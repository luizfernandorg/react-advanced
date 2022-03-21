import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('User')

  useEffect(() => {
    fetch(url).then((resp) => {
      if(resp.status >= 200 && resp.status <= 299){
        return resp.json()
      }else{
        setIsError(true)
        setIsLoading(false)
        throw new Error("Error on fetching data")
      }
    }).then((user) => {
      
      setUser(user)
      setIsLoading(false)
    }).catch((error) => {
      console.error(error)
    })
  },[])

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return <>
    <div className='item' style={{display: "flex", justifyContent: "start", alignItems: "start"}}>
      <img src={user.avatar_url} width="100" height="100" alt={user.login}></img>
      <div style={{marginLeft: "1rem", textAlign: 'start'}}>
        {user.login}
        <br/>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
      </div>
    </div>
  </>;
};

export default MultipleReturns;
