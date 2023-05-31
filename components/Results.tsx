import React, { useEffect, useState } from 'react'
import { randomInt } from '../shared/randomInt'
import { GameRules } from '../shared/rules'
import styles from '../styles/Results.module.css'
import styles2 from '../styles/Play.module.css'
import Button from './Button'

export default function Results({ selected, setselected, setscore, advanced }) {
  const [result, setResult] = useState('')
  const [show, setShow] = useState(false)
  const [computer, setComputer] = useState('')

  useEffect(() => {
    const randomNum = randomInt(advanced ? 5 : 3)
    const userSelected = GameRules[selected].value

    setTimeout(() => {
      setShow(true)
      setComputer(GameRules[randomNum].value)
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
    }, 900)
  }, [])

  return (
    <div className={show ? styles.results : styles.pending}>
      <div className={styles.pick}>
        <h3>You Picked</h3>
        <div>
          <Button
            classN={`${styles2[GameRules[selected].value]} ${styles.btn}`} lid='user'
          >
            <img src={`/icon-${GameRules[selected].value}.svg`} alt='' />
          </Button>
        </div>
      </div>

      <div className={styles.pick}>
        <h3>Computer Picked</h3>
        <div>
          {computer && (
            <Button classN={`${styles2[computer]} ${styles.btn}`} lid='computer'>
              <img src={`/icon-${computer}.svg`} alt='' />
            </Button>
          )}
        </div>
      </div>

      <div className={styles.result}>
        {show && (
          <div>
            <h2>You {result}</h2>
            <div
              className={styles.playBtn}
              onClick={() => {
                setselected(-1)
                setResult('')
              }}
            >
              Play again
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
