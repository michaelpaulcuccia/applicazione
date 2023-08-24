"use client"
import React,{ useContext}  from 'react';
import UserContext from '../context/UserContext';

export default function CheckContext() {

  const { setContextUser } = useContext(UserContext);

  const handleClick = () => {
    setContextUser({userName: 'michael', age: 43});
  }

  return (
    <div onClick={handleClick}>
        click to set
    </div>
  )
}
