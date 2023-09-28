"use client"
import React, { useContext} from 'react';
import UserContext from '../../context/UserContext';

export default function index ({ params }) {

  const { contextUser } = useContext(UserContext);

  return (
    <>
      {
        !contextUser.inputUserName && !contextUser.inputPass || contextUser.inputUserName === '' || contextUser.inputPass === '' ?
        <h1>UNAUTHORIZED</h1>
        :
        <div>Welcome {params.slug}</div>
      }
    </>
  )
}

