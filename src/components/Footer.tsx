import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

// import logo from "../static/logo.svg"

// import { library } from "@fortawesome/fontawesome-svg-core"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Button from "../components/button"

// import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

// library.add(faTwitter, faFacebook, faGithub)

import {
  faGithub,
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerColor = {
  background:
    "linear-gradient(180deg, rgba(133,93,81,1) 0%, rgba(164,129,119,1) 100%, rgba(168,134,124,1) 100%)",
};

const Footer = () => (
  <div className="flex flex-row h-auto pt-8 pb-8 bg-orange-800">
    <div className="hidden w-1/6 md:flex"></div>
    <div className="flex flex-col w-full p-8 text-champagne md:p-0 md:w-4/6">
      <div className="flex flex-col justify-between md:flex-row ">
        <div className="flex flex-col mb-6 w-100 md:w-1/2 md:mb-0">
          <Link href="about">
            <a className="mb-6 text-lg font-semibold text-champagne">
              About us
            </a>
          </Link>

          <Link href="ourwork">
            <a className="mb-6 text-lg font-semibold text-champagne">
              Our Work
            </a>
          </Link>
          <Link href="contact">
            <a className="mb-6 text-lg font-semibold text-champagne">
              Treetop Grove
            </a>
          </Link>
          <div className="flex flex-row">
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faGithub} />
            </a>
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faLinkedin} />
            </a>
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faYoutube} />
            </a>
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faFacebook} />
            </a>
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faInstagram} />
            </a>
            <a href="https://github.com/ladderdesigns/portfolio">
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="justify-right">
          <img
            className="w-32 h-32 lg:h-40 lg:w-40 md:w-36 md:h-36 rounded-xl"
            src={"/ladder-logo.svg"}
            alt="Ladder logo"
          />
        </div>
      </div>
      <hr className="self-start h-1 mt-6 rounded-sm border-champagne bg-champagne w-44 md:self-end" />
      <p className="font-semibold text-left text-champagne md:text-right text-md">
        @2021 Ladder Designs
      </p>
    </div>
    <div className="hidden w-1/6 md:flex"></div>
  </div>
);

Footer.propTypes = {
  source: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
