import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return <>
    <button className='btn' onClick={() => setShow(!show)}>Show or Hide</button>
    {show && <Item/>}
  </>
};

const Item = () => {
  const [sizeX, setXSize] = useState(window.innerWidth)
  const [sizeY, setYSize] = useState(window.innerHeight)

  const setSize = () => {
    setXSize(window.innerWidth)
    setYSize(window.innerHeight)
  }

  useEffect( () => {
    window.addEventListener("resize", setSize)
    return () => {
      window.removeEventListener("resize", setSize)
    }
  },[])

  return (
    <div>
      <h1>Window Size:</h1>
      <h3>Size x: {sizeX} px</h3>
      <h3>Size y: {sizeY} px</h3>
    </div>
  )
}
export default ShowHide;
