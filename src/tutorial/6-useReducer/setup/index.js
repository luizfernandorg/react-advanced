import React, { useState, useReducer, useRef } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: ''
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const inputContainer = useRef(null)
  /** Old way to handle data
   * const [people, setPeople] = useState(data)
   * const [showModal, setShowModal] = useState(false)
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name) {
      // setShowModal(true)
      // setPeople([...people,{id: new Date().getTime().toString(), name}])
      // setName('')
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type:'ADD_ITEM', payload: newItem})
      setName('')
      inputContainer.current.focus()
    }else{
      // setShowModal(true)
      dispatch({type:'NO_VALUE'})
    }
    
  }
  const closeModal = () => {
    dispatch({type:"CLOSE_MODAL"})
  }
  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit}>
      <div>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            ref={inputContainer}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
    {
      state.people.map((person) => {
        return <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: person.id})}>Remove</button>
        </div>
      })
    }
  </>;
};

export default Index;
