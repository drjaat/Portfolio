import React from 'react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Dhruv Rana.</span>
        </h1>
        <p className="h-sub-text">
          I'm a Full-Stack Web Developer for Accolite Digital in Gurugram, HR. I
          have serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
        </p>
        <div className="icons">
          <Link
            to={{ pathname: 'https://instagram.com/itsdrjaat' }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link
            to={{ pathname: 'https://github.com/drjaat' }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to={{ pathname: 'https://linkedin.com/in/drjaat' }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage
