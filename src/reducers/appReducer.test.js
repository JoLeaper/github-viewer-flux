import reducer from './appReducer';
import {
  UPDATE_USER_SEARCH,
  GET_USER_INFO,
  GET_USER_REPOS
} from '../actions/userActions';

describe('app Reducer', () => {
  it('sets the username in state', () => {
    const state = {
      userName: ''
    };

    const action = {
      type: UPDATE_USER_SEARCH,
      payload: 'JoLeaper'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userName: 'JoLeaper'
    });
  });

  it('sets the userInfo in state', () => {
    const state = {
      userInfo: {}
    };

    const action = {
      type: GET_USER_INFO,
      payload: { 
        userName: 'JoLeaper',
        followers: 2,
        following: 1,
        url: 'github.com/JoLeaper'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userInfo: { 
        userName: 'JoLeaper',
        followers: 2,
        following: 1,
        url: 'github.com/JoLeaper'
      }
    });
  });

  it('sets the userRepos in state', () => {
    const state = {
      userRepos: []
    };

    const action = {
      type: GET_USER_REPOS,
      payload: ['link1.com', 'link2.com', 'link3.com']
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userRepos: ['link1.com', 'link2.com', 'link3.com'] 
    });
  });

});
