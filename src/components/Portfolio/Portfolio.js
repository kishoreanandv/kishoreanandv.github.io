import './Portfolio.scss'
import React, { useEffect, useState } from 'react'
import skills from './skillsData'
import projectsArr from './projectsData'
import Badge from 'react-bootstrap/Badge'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

// Main Component
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillsArr = ['S', 'k', 'i', 'l', 'l', 's']
  const projectArr = ['P', 'r', 'o', 'j', 'e', 'c', 't']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container">
      <h1 className="skillsname">
        <AnimatedLetters
          lettersClassName={letterClass}
          lettersArray={skillsArr}
          lettersIndex={15}
        />
      </h1>

      {/* SKILLS SECTION */}
      <div className="skills-container">
        <div className="skill-cards">
          {skills.map((skill) => {
            return (
              <div className="skill-card" key={skill.id}>
                {skill.icon}
                <h2>{skill.name}</h2>
              </div>
            )
          })}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <h1 className="projectname">
        <AnimatedLetters
          lettersClassName={letterClass}
          lettersArray={projectArr}
          lettersIndex={17}
        />
      </h1>
      <div className="portfolio-container">
        <div className="projects">
          {projectsArr.map(
            ({
              id,
              img,
              title,
              sourcecode,
              demo,
              languageOne,
              languageTwo,
              languageThree,
            }) => {
              return (
                <article key={id} className="portfolio-item">
                  <Badge className="badge" bg="primary">
                    {languageThree}
                  </Badge>
                  <Badge className="badge" bg="primary">
                    {languageTwo}
                  </Badge>
                  <Badge className="badge" bg="primary">
                    {languageOne}
                  </Badge>
                  <div className="banner">
                    <img src={img} alt="banner" />
                  </div>
                  <h3 className="projecttitle">{title}</h3>
                  <div className="bottom">
                    <a
                      href={sourcecode}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </article>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
