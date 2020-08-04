import reducer from './appReducer';
import {
  UPDATE_USER_SEARCH
} from '../actions/viewerActions';

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

  // it('sets the username in state', () => {
    
  // });

  // it('sets the username in state', () => {
    
  // });

  // it('sets the username in state', () => {
    
  // });

});
