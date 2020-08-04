import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useUserName = () => {
  const { state } = useContext(AppContext);
  return state.userName;
};

export const useUserInfo = () => {
  const { state } = useContext(AppContext);
  return state.userInfo;
};

export const useUserRepos = () => {
  const { state } = useContext(AppContext);
  return state.userRepos;
};
