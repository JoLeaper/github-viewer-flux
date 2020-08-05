export const UPDATE_USER_SEARCH = 'UPDATE_USER_SEARCH';
export const updateUserSearch = (payload) => ({
  payload,
  type: UPDATE_USER_SEARCH
});

export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (payload) => ({
  payload,
  type: SET_USER_INFO
});

export const SET_USER_REPOS = 'SET_USER_REPOS';
export const setUserRepos = (payload) => ({
  payload,
  type: SET_USER_REPOS
});
