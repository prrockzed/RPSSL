import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles/Play.module.css'
import PlayButtons from './PlayButtons.tsx'

export default function Play(props) {
  return (
<motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className={styles.container}
    >
      {props.advanced ? (
        <img src="/bg-pentagon.svg" />
      ) : (
        <img src="/bg-triangle.svg" />
      )}
      <PlayButtons
        onCLick={(value) => props.setselected(value)}
        advanced={props.advanced}
      />
    </motion.div>
  )
}
