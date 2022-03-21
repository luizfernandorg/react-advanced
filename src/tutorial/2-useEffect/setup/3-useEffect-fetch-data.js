import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [profiles,setProfiles] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setProfiles(users)
  }
  useEffect(() => {
    getUsers()
  },[])

  return <>
    <h3>GitHub Users</h3>
    <ul className='users'>
      {
        profiles.map((profile) => {
          const {id,login,html_url,avatar_url} = profile
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })
      }  
    </ul>
  </>;
};

export default UseEffectFetchData;
