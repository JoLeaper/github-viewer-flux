import React from 'react';
import { useUserRepos }  from '../../hooks/appContext';


function RepoList() {
  const userRepos = useUserRepos();
  return (
    <div>
      {userRepos.map(repo => <h2 key={repo}>{repo}</h2>)}
    </div>
  );
}


export default RepoList;

