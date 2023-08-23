"use client"
import React,{ useContext}  from 'react';
import UserContext from '../context/UserContext';

export default function CheckContext() {

const { setContextUser } = useContext(UserContext);

  return (
    <div onClick={() => {
        setContextUser({userName: 'michael', age: 43})
      }}>
        click to set
    </div>
  )
}
