import React from 'react';

const ErrorExample = () => {
  let title = "Hello, People!"
  const handleClick = () => {
    title = "Hello, World!"
  }
  return <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>Click me</button>
      {/** onClick={(event) => handleClick(event)} */}
  </React.Fragment>;
};

export default ErrorExample;
