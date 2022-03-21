import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName && email){
      let person = { id: new Date().getTime().toString(), firstName, email}
      setPeople((people) => {
        people.push(person)
        return people
      })
      
      console.log(people)
    }else{
      console.log("empty values")
    }
    setFirstName("")
    setEmail("")
  }
  
return <>
    <article>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </article>
    {
      people.map((person)=>{
        const {id,firstName,email} = person
        return (
          <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
          </div>
        )
      })
    }
  </>;
};

export default ControlledInputs;
