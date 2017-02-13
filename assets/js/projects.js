(function () {
  var GitHubAPIReposPrefix = 'https://api.github.com/repos/';

  var projectElements = document.getElementsByClassName('site-project');
  if (projectElements.length === 0) return;

  for (var i = 0; i < projectElements.length; i++) {
    var projectElement = projectElements[i];
    fetchRepoDataFromGitHubAPI(projectElement.dataset.github, (data) => {
      fillProjectElement(projectElement, data);
    });
  }

  function fetchRepoDataFromGitHubAPI(repoPath, callback) {
    var url = GitHubAPIReposPrefix + repoPath;

    fetch(url).then(data => data.json()).then(data => {
      callback({
        name: data.name,
        html_url: data.html_url,
        description: data.description,
        homepage: data.homepage,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
      });
    });
  }

  function fillProjectElement(element, data) {
    element.innerHTML = `
      <a href="${data.html_url}">${data.name}</a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>${data.stargazers_count}</strong>
      <small class="text-muted site-project-stars">STARS</small>
      &nbsp;
      <strong>${data.forks_count}</strong>
      <small class="text-muted site-project-stars">FORKS</small>
      <br/>
      <small class="text-muted">
        ${data.description}
        &nbsp;
        <a class="text-muted" href="${data.homepage}">${data.homepage}</a>
      </small>
    `;
  }
})();