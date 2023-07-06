import React from 'react'
import styles from '../styles/Play.module.css'
import Button from './Button'

export default function PlayButtons(props) {
  return (
    <div className={styles.playbuttons}>
      {props.advanced ? (
        <div className={styles.threegrid}>
          <Button
            onClicK={() => props.onCLick(0)}
            classN={styles.scissor}
            lid='scissor'
          >
            <img src='../public/icon-scissor.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(3)}
            classN={styles.spock}
            lid='spock'
          >
            <img src='../public/icon-spock.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(4)}
            classN={styles.lizard}
            lid='lizard'
          >
            <img src='../public/icon-lizard.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(1)}
            classN={styles.paper}
            lid='paper'
          >
            <img src='../public/icon-paper.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(2)}
            classN={styles.rock}
            lid='rock'
          >
            <img src='../public/icon-rock.svg' alt='' />
          </Button>
        </div>
      ) : (
        <div className={styles.twogrid}>
          <Button
            onClicK={() => props.onCLick(0)}
            classN={styles.sci2}
            lid='sci'
          >
            <img src='../public/icon-scissor.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(1)}
            classN={styles.paper2}
            lid='paper'
          >
            <img src='../public/icon-paper.svg' alt='' />
          </Button>
          <Button
            onClicK={() => props.onCLick(2)}
            classN={styles.rock2}
            lid='rock'
          >
            <img src='../public/icon-rock.svg' alt='' />
          </Button>
        </div>
      )}
    </div>
  )
}
