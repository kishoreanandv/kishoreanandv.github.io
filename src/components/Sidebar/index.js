import './index.scss'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logosmall from '../../assets/images/logo-s.png'
import logotext from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBriefcase,
  faClose,
  faHome,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showham, setShowHam] = useState(false)
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={Logosmall} alt="logo" />
        <img className="sub-logo" src={logotext} alt="kishore text" />
      </Link>
      {/* Nav starts here */}
      <nav className={showham ? 'mobile-show' : ''}>
        {/* Home Nav */}
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowHam(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        {/* About Nav */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowHam(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        {/* Portfolio Nav */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowHam(false)}
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>

        {/* Contact Nav */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowHam(false)}
        >
          <FontAwesomeIcon icon={faPhone} color="#4d4d4e" />
        </NavLink>

        {/* Close icon for Nav */}
        <FontAwesomeIcon
          onClick={() => setShowHam(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="closenavIcon"
        />
      </nav>

      {/* Social Icons */}
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreffer noreferrer"
            href="https://www.linkedin.com"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreffer noreferrer"
            href="https://www.github.com"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      {/* Icon for showing Nav for Mobiles */}
      <FontAwesomeIcon
        onClick={() => setShowHam(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
