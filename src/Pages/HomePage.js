import React, { useEffect } from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TypeWritter from "../common/TypeWritter";

function HomePage() {
  const typeWritter = new TypeWritter(true);

  useEffect(() => {
    typeWritter
    .typeString("I'm a Full-Stack Web Developer ")
    .pauseFor(100)
    .typeString('works for Accolite Digital, Gurugram, HR. ')
    .deleteChars(42)
    .typeString('works for Browserstack, Mumbai, MH. \n')
    .pauseFor(100)
    .typeString("I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.")
    .deleteAll(10)
    .start('typed',true);

    return () => {
      typeWritter.stop();
    }
  });

  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Dhruv Rana.</span>
        </h1>
        <p className="h-sub-text" id="typed"></p>
        <div className="icons">
          <Link
            to={{ pathname: "https://instagram.com/itsdrjaat" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link
            to={{ pathname: "https://github.com/drjaat" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to={{ pathname: "https://linkedin.com/in/drjaat" }}
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
