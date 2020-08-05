import React from 'react';
import { useUserInfo } from '../../hooks/appContext';

function UserInfo() {
  const { username, followers, following, githubURL } = useUserInfo();
  return (
    <div>
      <h1>{username}</h1>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>githubURL: {githubURL}</p>
    </div>
  );
}

export default UserInfo;

