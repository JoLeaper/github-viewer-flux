export const fetchUserInfo = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(({ login, followers, following, html_url }) => {
      return {
        username: login,
        followers: followers,
        following: following,
        githubURL: html_url
      };
    });
};

export const fetchUserRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(res => res.map(repo => repo.html_url));
};
