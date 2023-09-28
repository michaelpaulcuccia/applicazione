"use client"
import React,{ useState, useContext}  from 'react';
import UserContext from '../../context/UserContext';
import styles from './styles.module.scss';

export default function Index() {

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
      >
        <div
          className={styles.flex}
        >
          <label htmlFor='inputUserName'>Name</label>
            <input 
              type='text' 
              value={inputUserName} 
              onChange={(event) => setInputUserName(event.target.value)} 
            />
            <label htmlFor='inputAge'>Password</label>
            <input 
              type='password'
              minLength={8}
              required 
              value={inputAge} 
              onChange={(event) => setInputAge(event.target.value)} 

            />
        </div>
        <input 
          className='btn-1'
          type='submit' 
          value='Login'
        />
      </form>
    </div>
  )
}
