import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles/Rules.module.css'

// {props.open && (
//   <motion.div className={styles.rules} onClick={() => props.setopen()}>
//     <div className={styles.title}>
//       <h1>Rules</h1>
//       <img
//         height='100'
//         width='100'
//         src='../public/icon-close.svg'
//         alt='close'
//       />
//     </div>
//     <div className={styles.image}>
//       {props.advanced ? (
//         <img
//           src='../public/image-rules-bonus.svg'
//           alt='rules for advanced'
//         />
//       ) : (
//         <img src='../public/image-rules.svg' alt='rules for normal' />
//       )}
//     </div>
//   </motion.div>
// )}

export default function Rules(props) {
  return (
    <div>
      {props.open && (
        <motion.div
          initial={{ opacity: 0, borderRadius: '50%' }}
          animate={{ opacity: 1, borderRadius: '0%' }}
          exit={{ opacity: 0 }}
          className={styles.rules}
          onClick={() => props.setopen()}
        >
          <div className={styles.title}>
            <h1>Rules</h1>
            <img height='100' width='100' src='/icon-close.svg' alt='close' />
          </div>
          <div className={styles.image}>
            {props.advanced ? (
              <img src='/image-rules-bonus.svg' alt='rules for advanced' />
            ) : (
              <img src='/image-rules.svg' alt='rules for normal' />
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}
