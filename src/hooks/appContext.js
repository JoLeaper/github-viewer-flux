import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(AppContext);
  return dispatch;
};

export const userUserName = () => {
  const { userName } = useContext(AppContext);
  return userName;
};

export const useUserInfo = () => {
  const { userInfo } = useContext(AppContext);
  return userInfo;
};

export const useRepos = () => {
  const { userRepos } = useContext(AppContext);
  return userRepos;
};
