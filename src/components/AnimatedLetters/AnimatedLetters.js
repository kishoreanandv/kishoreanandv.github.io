import React from 'react'
import './AnimatedLetters.scss'

const AnimatedLetters = ({ lettersClassName, lettersArray, lettersIndex }) => {
  return (
    <span>
      {lettersArray.map((letter, index) => (
        <span
          key={letter + index}
          className={`${lettersClassName} _${index + lettersIndex}`}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
