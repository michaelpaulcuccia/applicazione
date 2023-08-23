"use client"
import styles from './page.module.scss';

export default function Home() {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <>
      <div className={styles.main}>
        hello world
      </div>
      <div onClick={handleClick}>
        click to set
      </div>
    </>
  )
}
