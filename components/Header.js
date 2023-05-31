import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={props.advanced ? styles.advancedTitle : styles.title}>
        <div>Rock</div>
        <div>Paper</div>
        <div>Scissor</div>
        {props.advanced && (
          <>
            <div>Lizard</div>
            <div>Spock</div>
          </>
        )}
      </div>
      <div className={styles.score}>
        <h4>Score</h4>
        <h1>{props.score}</h1>
      </div>
    </div>
  )
}
