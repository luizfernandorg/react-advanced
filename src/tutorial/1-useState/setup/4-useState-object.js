import React, { useState } from 'react';

const people = {id:1, name:"Luiz Fernando", age: 42, message:"Cortar a grama"}

const UseStateObject = () => {
  const [name,setName] = useState(people.name)
  const [age, setAge] = useState(people.age)
  const [message,setMessage] = useState(people.message)
  return <>
    <p>{name}</p>
    <p>{age}</p>
    <p>{message}</p>
    <button onClick={() => setMessage("Dormir mais")}>
      change Message
    </button>
  </>
};

export default UseStateObject;
