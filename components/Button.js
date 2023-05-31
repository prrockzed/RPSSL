import React from 'react'
import styles from '../styles/Play.module.css'

export default function Button({ classN, children, lid, onClicK = () => {} }) {
  return (
    <div onClick={() => onClicK()} className={classN}>
      <div className={styles.inside}>{children}</div>
    </div>
  )
}
