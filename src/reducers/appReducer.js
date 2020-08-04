export const initialState = {
  userName: '',
  userInfo: {},
  repos: []
};

import {
  UPDATE_USER_SEARCH
} from '../actions/viewerActions';

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_USER_SEARCH:
      return { ...state, userName: action.payload };
    default: 
      return state;
  }
}
