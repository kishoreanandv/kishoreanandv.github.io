import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logotext from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greet = ['H', 'o', 'l', 'a', ',']
  const prefix = ['I', "'", 'm']
  const nameArray = [
    'i',
    's',
    'h',
    'o',
    'r',
    'e',
    ' ',
    'a',
    'n',
    'a',
    'n',
    'd',
    ' ',
    'v',
  ]

  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            lettersClassName={letterClass}
            lettersArray={greet}
            lettersIndex={10}
          />
          <br />
          <AnimatedLetters
            lettersClassName={letterClass}
            lettersArray={prefix}
            lettersIndex={12}
          />
          <div className="namearray">
            <img src={Logotext} alt="developer" />
            <AnimatedLetters
              lettersClassName={letterClass}
              lettersArray={nameArray}
              lettersIndex={15}
            />
          </div>
          {/* <br /> */}

          <div className="roleArray">
            <AnimatedLetters
              lettersClassName={letterClass}
              lettersArray={jobArray}
              lettersIndex={22}
            />
          </div>
        </h1>
        <div className="otherroles">
          <h2> Front End Developer / YouTuber / Public Speaker </h2>
        </div>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
