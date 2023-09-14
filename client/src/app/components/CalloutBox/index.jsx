import React from 'react';
import styles from './styles.module.scss';

export default function index({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}
