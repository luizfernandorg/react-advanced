import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0)

  const increaseValue = () => {
    setValue(++value)
  }
  const reset = () => {
    setValue(0)
  }
  const descreaseValue = () => {
    if (value >= 1) {
      setValue(--value)
    }
  }
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 2000)
  }
  return <>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={increaseValue}>+</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={descreaseValue}>-</button>
    </section>
    <section>
      <h2>More Complex Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>Counter</button>
    </section>
  </>;
};

export default UseStateCounter;
