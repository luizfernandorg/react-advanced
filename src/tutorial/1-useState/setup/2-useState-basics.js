import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title,setTitle] = useState("random title")
  const handleClick = () => {
      if(title === "random title"){
        setTitle("Hello, World")
      }else{
        setTitle("random title")
      }
  }
  return (<>
    <h1>{title}</h1>
    <button className='btn' onClick={handleClick}>Change to {title === "random title"?"Hello, World":"random title"}</button>
  </>);
};

export default UseStateBasics;
