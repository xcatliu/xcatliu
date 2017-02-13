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
      <a href="${data.html_url}">${data.name}</a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <strong class="site-project-count">${data.stargazers_count}</strong>
      <small class="text-muted">STARS<small>
      &nbsp;
      <strong class="site-project-count">${data.forks_count}</strong>
      <small class="text-muted">FORKS<small>
      <br/>
      ${data.description}
      &nbsp;
      <a href="${data.homepage}">${data.homepage}</a>
    `;
  }
})();