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
  const { userName } = useContext(AppContext);
  return userName;
};

export const userUserInfo = () => {
  const { userInfo } = useContext(AppContext);
  return userInfo;
};

export const userRepos = () => {
  const { userRepos } = useContext(AppContext);
  return userRepos;
};
