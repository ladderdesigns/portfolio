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
  <div className="flex flex-row h-auto bg-orange-800 md:pt-8 md:pb-8">
    <div className="hidden w-1/6 md:flex"></div>
    <div className="flex flex-col w-full p-8 text-champagne md:p-0 md:w-4/6">
      <div className="flex flex-col justify-between md:flex-row ">
        <div className="flex flex-col mb-6 md:mb-0">
          <Link href="about">
            <a className="w-20 mb-6 text-lg font-semibold transition duration-100 text-champagne focus:opacity-50 hover:opacity-50">
              About us
            </a>
          </Link>
          <Link href="our-work">
            <a className="w-20 mb-6 text-lg font-semibold transition duration-100 text-champagne focus:opacity-50 hover:opacity-50">
              Our Work
            </a>
          </Link>
          <Link href="contact">
            <a className="w-32 mb-6 text-lg font-semibold transition duration-100 text-champagne focus:opacity-50 hover:opacity-50">
              Treetop Grove
            </a>
          </Link>
        </div>
        <div className="justify-right">
          <img
            className="w-32 h-32 md:w-36 md:h-36 rounded-xl"
            src={"/ladder-logo.svg"}
            alt="Ladder logo"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between mt-6 md:flex-row">
        <div className="flex flex-row">
          <a href="https://github.com/ladderdesigns/portfolio ">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faGithub}
            />
          </a>
          <a href="https://github.com/ladderdesigns/portfolio">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faLinkedin}
            />
          </a>
          <a href="https://github.com/ladderdesigns/portfolio">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faYoutube}
            />
          </a>
          <a href="https://github.com/ladderdesigns/portfolio">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faFacebook}
            />
          </a>
          <a href="https://github.com/ladderdesigns/portfolio">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faInstagram}
            />
          </a>
          <a href="https://github.com/ladderdesigns/portfolio">
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faTwitter}
            />
          </a>
        </div>

        <div className="mt-6 md:mt-0 ">
          <hr className="self-start h-1 rounded-sm border-champagne bg-champagne w-44 md:self-end" />
          <p className="font-semibold text-left text-champagne md:text-right text-md">
            @2021 Ladder Designs
          </p>
        </div>
      </div>
    </div>
    <div className="hidden w-1/6 md:flex"></div>
  </div>
);

Footer.propTypes = {
  source: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
