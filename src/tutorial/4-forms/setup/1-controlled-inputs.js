import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  
  const checkValue = (e) => {
    e.preventDefault()
    const input = document.getElementById('firstName')
    const email = document.getElementById("email")
    console.log(input.value)
    console.log(email.value)
    input.value = ""
    email.value = ""
  }

return <>
    <article>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit' onClick={checkValue}>Enviar</button>
      </form>
    </article>
  </>;
};

export default ControlledInputs;
