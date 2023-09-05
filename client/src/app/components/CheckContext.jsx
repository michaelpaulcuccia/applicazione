"use client"
import React,{ useState, useContext}  from 'react';
import UserContext from '../context/UserContext';

export default function CheckContext() {

  const { setContextUser } = useContext(UserContext);

  const [inputUserName, setInputUserName] = useState('')
  const [inputAge, setInputAge] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setContextUser({ inputUserName, inputAge })
    //clears form
    setInputUserName('');
    setInputAge('')
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className='input_hide_number_scroll_arrows'
      >
        <div>
          <label htmlFor='inputUserName'>Name</label>
            <input 
              type='text' 
              value={inputUserName} 
              onChange={(event) => setInputUserName(event.target.value)} 
            />
            <label htmlFor='inputAge'>Age</label>
            <input 
              type='number' 
              value={inputAge} 
              onChange={(event) => setInputAge(event.target.value)} 
            />
        </div>
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}
