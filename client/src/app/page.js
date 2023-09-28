"use client"
import React from 'react';
import CheckContext from './components/LogInForm/Index';
import CalloutBox from './components/CalloutBox';

export default function Home() {

  return (
    <>
      <CalloutBox>
        <CheckContext />
      </CalloutBox>
    </>
  )
}
