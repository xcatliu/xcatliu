(function () {
  const GitHubAPIReposPrefix = 'https://api.github.com/repos/';

  let projectElements = document.getElementsByClassName('site-project');
  if (projectElements.length === 0) return;

  for (let i = 0; i < projectElements.length; i++) {
    let projectElement = projectElements[i];
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
      <div class="flex-left">
        <h3 class="top-gap-0"><a href="${data.html_url}">${data.name}</a></h3>
        <div class="unit"></div>
        <small class="text-muted site-project-meta">
          <strong class="site-project-count">${data.stargazers_count}</strong> STARS
          &nbsp;
          <strong class="site-project-count">${data.forks_count}</strong> FORKS
        </small>
      </div>
      <p>
        ${data.description}
        &nbsp;
        <a href="${data.homepage}">${data.homepage}</a>
      </p>
    `;
  }
})();