"use client";
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '../../context/UserContext';
import styles from './styles.module.scss';

export default function index() {

    const { setContextUser } = useContext(UserContext);

    const router = useRouter();

    const [inputUserName, setInputUserName] = useState('');
    const [inputPass, setInputPass] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setContextUser({ inputUserName, inputPass })
        //clears form
        setInputUserName('');
        setInputPass('');
        router.push(`/users/${inputUserName}`);
    }

  return (
    <div className={styles.root}>
        <h3>welcome</h3>
        <h3>please enter a username and password</h3>
        <div className={styles.formContainer}>
          <form 
            onSubmit={handleSubmit}
          >
             <div
              className={styles.flex}
            >
              <label htmlFor='inputUserName'>User Name</label>
                <input 
                  type='text' 
                  value={inputUserName} 
                  onChange={(event) => setInputUserName(event.target.value)} 
                />
                <label htmlFor='inputPass'>Password (must be 8 characters)</label>
                <input 
                  type='password'
                  minLength={8}
                  required 
                  value={inputPass} 
                  onChange={(event) => setInputPass(event.target.value)} 
                />
            </div>
            <input 
              className='btn-1'
              type='submit' 
              value='Sign Up'
            />
          </form>
        </div>
    </div>
  )
}
