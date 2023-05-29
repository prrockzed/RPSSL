import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GameRules } from '../shared/rules.ts'
import { randomInt } from '../shared/randomInt.ts'
import styles from '../styles/Results.module.css'
import styles2 from '../styles/Play.module.css'
import Button from './Button'

export default function Results({ selected, setselected, setscore, advanced }) {
  const [result, setResult] = useState('')
  const [show, setShow] = useState(false)
  const [house, setHouse] = useState('')

  useEffect(() => {
    const randomNum = randomInt(advanced ? 5 : 3)
    const userSelected = GameRules[selected].value
    console.log(userSelected, GameRules[randomNum].value)
    setTimeout(() => {
      setShow(true)
      if (GameRules[randomNum].beats.includes(userSelected)) {
        setResult('Lose')
        setscore((score) => score - 1)
      } else {
        if (GameRules[randomNum].value == userSelected) {
          setResult('Tie')
        } else {
          setResult('Win')
          setscore((score) => score + 1)
        }
      }
    }, 2000)
  }, [])

  return (
    <div className={show ? styles.results : styles.pending}>
      <div className={styles.pick}>
        <h3>You Picked</h3>
        <motion.div
          className={result == 'Win' ? styles.win : styles.house}
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { loop: 3 } }}
        >
          <Button
            classN={`${styles2[GameRules[selected].value]} ${styles.btn}`}
          >
            <img src={`/icon-${GameRules[selected].value}.svg`} alt='' />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
