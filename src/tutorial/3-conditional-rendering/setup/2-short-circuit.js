import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false)
  const [text, setText] = useState('random text')
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1> 
    <h1>value :{secondValue}</h1> */}
    {/* {if(){console.log('Hello World')}} */}
    <h1>{text || 'John Doe'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
    <h1>{isError && "Error..."}</h1>
    {isError ? <p>There is an error...</p>: "Everything looks fine"}
  </>;
};

export default ShortCircuit;
