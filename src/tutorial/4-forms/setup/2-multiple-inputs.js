import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const {person, setPerson} = useState({id: 0, firstName:'', age:'', email:''})
  const {people, setPeople} = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {

  }
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        
      </article>
      {
        people.map((p) => {
          const {id, firstName, age, email} = p
          return (<div key={id} className="item">
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>)
        })
      }
    </>
  );
};

export default ControlledInputs;
