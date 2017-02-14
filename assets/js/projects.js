(function () {
  var GITHUB_API_REPOS_PREFIX = 'https://api.github.com/repos/';
  var PROJECT_CLASS_NAME = 'site-project';
  var GITHUB_REPO_PREFIX = 'https://github.com/';

  var ERROR_EMPTY_RESPONSE = 'Empty response';
  var ERROR_NOT_JSON = 'Only accept json response';

  var projectElements = document.getElementsByClassName(PROJECT_CLASS_NAME);
  if (projectElements.length === 0) return;
  
  for (var i = 0; i < projectElements.length; i++) {
    buildElement(projectElements[i]);
  }

  function buildElement(projectElement) {
    if (projectElement && projectElement.dataset && projectElement.dataset.github) {
      fetchRepoDataFromGitHubAPI(projectElement.dataset.github, successData => {
        fillProjectElement(projectElement, successData);
      }, error => {
        fillProjectElementWithError(projectElement, error);
      });
    }
  }

  function fetchRepoDataFromGitHubAPI(repoPath, successCallback, failureCallback) {
    var url = GITHUB_API_REPOS_PREFIX + repoPath;

    fetch(url)
      .then(handleErrors)
      .then(data => data.json()).then(data => {
        successCallback({
          name: data.name,
          html_url: data.html_url,
          description: data.description,
          homepage: data.homepage,
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
        });
      }).catch(failureCallback);
  }

  function handleErrors(response) {
    if (!response) {
      throw new Error(ERROR_EMPTY_RESPONSE);
    }

    if (!response.ok) {
      if (!isJson(response)) {
        throw new Error(response.statusText);
      }
      return response.json().then(errorData => {
        throw new Error(errorData.message || response.statusText);
      });
    }

    if (!isJson(response)) {
      throw new Errow(ERROR_NOT_JSON);
    }

    return response;
  }

  function isJson(response) {
    var contentType = response.headers.get('content-type');
    if(contentType && contentType.indexOf('application/json') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  function fillProjectElement(element, data) {
    element.innerHTML = `
      <a href="${data.html_url}">${data.name}</a>
      &nbsp;&nbsp;&nbsp
      ${data.stargazers_count}
      <small class="text-muted site-project-stars">STARS</small>
      &nbsp;
      ${data.forks_count}
      <small class="text-muted site-project-stars">FORKS</small>
      <br/>
      <small class="text-muted">
        ${data.description}
        &nbsp;
        <a class="text-muted" href="${data.homepage}">${data.homepage}</a>
      </small>
    `;
  }

  function fillProjectElementWithError(element, error) {
    console.error(error);

    var repo = element.dataset.github;
    element.innerHTML = `
      Fetch <a href="${GITHUB_REPO_PREFIX}${repo}">${repo}</a> fails:
      <small class="text-muted">${error.message}</small>
    `
  }
})();