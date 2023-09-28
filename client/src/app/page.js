"use client"
import React,{ useContext, useEffect }  from 'react';
import UserContext from './context/UserContext';
import CheckContext from './components/LogInForm/Index';
import CalloutBox from './components/CalloutBox';

export default function Home() {

  const { contextUser } = useContext(UserContext);

  useEffect(() => {

  }, [contextUser])

  console.log(contextUser)

  return (
    <>
      <CalloutBox>
        <CheckContext />
      </CalloutBox>
    </>
  )
}
