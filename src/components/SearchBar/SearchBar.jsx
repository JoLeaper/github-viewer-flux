import React from 'react';
import { useUserName, useDispatch } from '../../hooks/appContext';
import { updateUserSearch, setUserInfo, setUserRepos } from '../../actions/userActions';
import { fetchUserInfo, fetchUserRepos } from '../../services/githubRequests';

export default function SearchBar() {
  const dispatch = useDispatch();
  const userName = useUserName();

  const handleChange = ({ target }) => dispatch(updateUserSearch(target.value));
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    Promise.all([fetchUserInfo(userName), fetchUserRepos(userName)])
      .then(([userInfo, userRepos]) => {
        dispatch(setUserInfo(userInfo));
        dispatch(setUserRepos(userRepos));
      });
  };
  // const handleChange = () => dispatch(updateUserSearch(userName));
  // Promise.all([getUserRepos(), getUserInfo()]).then(([]) => {})

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userName} onChange={handleChange} />
        <button>Search</button>
      </form>

 
    </div>
  );
}
