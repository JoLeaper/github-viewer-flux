export const getUserInfo = (username) => {
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
