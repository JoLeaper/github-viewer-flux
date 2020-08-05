export const initialState = {
  userName: '',
  userInfo: {},
  userRepos: []
};

import {
  UPDATE_USER_SEARCH,
  SET_USER_INFO,
  SET_USER_REPOS
} from '../actions/userActions';

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_USER_SEARCH:
      return { ...state, userName: action.payload };
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case SET_USER_REPOS:
      return { ...state, userRepos: action.payload };
    default: 
      return state;
  }
}
