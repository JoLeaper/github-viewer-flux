export const UPDATE_USER_SEARCH = 'UPDATE_USER_SEARCH';

export const updateUserSearch = (username) => ({
  type: UPDATE_USER_SEARCH,
  payload: username
});
