"use client"
import React,{ useContext, useEffect }  from 'react';
import styles from './page.module.scss';
import UserContext from './context/UserContext';
import CheckContext from './components/CheckContext';

export default function Home() {

  const { contextUser } = useContext(UserContext);

  useEffect(() => {

  }, [contextUser])

  console.log(contextUser)

  return (
    <>
      <div className={styles.main}>
        <CheckContext />
      </div>
    </>
  )
}
