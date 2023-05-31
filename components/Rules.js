import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/Rules.module.css'

const Rules = ({ toggle, advanced }) => {
  return ReactDOM.createPortal(
    <div className='modal-container'>
      <div className='modal-box'>
        <div className='modal__header'>
          <button className='button' onClick={toggle}>
            <h1 className='close'>Close</h1>
          </button>
        </div>
        {advanced ? (
          <img src='/image-rules-bonus.svg' alt='rules for advanced' />
        ) : (
          <img src='/image-rules.svg' alt='rules for normal' />
        )}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Rules
