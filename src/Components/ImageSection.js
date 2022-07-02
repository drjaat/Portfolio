import React from 'react'
import about from '../img/about.jpg'

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Dhruv Rana</span>
        </h4>
        <p className="about-text">
          I'm a Full-Stack Web Developer works for Browserstack, Mumbai, MH. I
          have serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Dhruv Rana</p>
            <p>: 25</p>
            <p>: Indian</p>
            <p>: English, Hindi</p>
            <p>: India</p>
          </div>
        </div>
        <button
          className="btn"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1Gm1xNyDZegLvU3jdUnsTII9-QLQPgCuL/view?usp=sharing',
              '_blank'
            )
          }
        >
          Download Cv
        </button>
      </div>
    </div>
  )
}

export default ImageSection
