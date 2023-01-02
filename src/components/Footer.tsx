/* eslint-disable import/first */
import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import {
  faGithub,
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

const Footer = () => (
  <div className="flex flex-row justify-center h-auto bg-orange-800 md:pt-8 md:pb-8">
    <div className="flex flex-col self-center w-full max-w-5xl p-8 mx-auto sm:px-10 text-champagne ">
      <div className="flex flex-col justify-between md:flex-row ">
        <div className="flex flex-col mb-6 md:mb-0">
          <Link href="/about">
            <a className="w-32 mb-6 text-lg font-semibold transition duration-100 cursor-pointer text-champagne focus:opacity-50 hover:opacity-50">
              About us
            </a>
          </Link>
          <Link href="/our-work">
            <a className="w-32 mb-6 text-lg font-semibold transition duration-100 cursor-pointer text-champagne focus:opacity-50 hover:opacity-50">
              Our Work
            </a>
          </Link>
          <Link href="/#contact-us">
            <a className="w-32 mb-6 text-lg font-semibold transition duration-100 cursor-pointer text-champagne focus:opacity-50 hover:opacity-50">
              Contact Us
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
          <a
            href="https://github.com/ladderdesigns"
            aria-label="GitHub link"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faGithub}
            />
          </a>
          {/* <a
            href="https://www.linkedin.com/school/ladderdesigns/"
            aria-label="LinkedIn link"
          >
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faLinkedin}
            />
          </a> */}
          {/* <a
            href="https://www.youtube.com/user/ladderdesigns"
            aria-label="YouTube link"
          >
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faYoutube}
            />
          </a> */}
          <a
            href="https://twitter.com/ladderdesigns"
            aria-label="Twitter link"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faTwitter}
            />
          </a>
          <a
            href="mailto:contact@ladderdesigns.co"
            aria-label="Email link"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className="w-5 h-5 mr-5 transition duration-100 focus:opacity-50 hover:opacity-50"
              icon={faEnvelope}
            />
          </a>
        </div>

        <div className="mt-6 md:mt-0 ">
          <hr className="self-start w-64 h-0.5 rounded-sm border-champagne bg-champagne md:self-end" />

          <p className="font-semibold text-left text-champagne md:text-right text-md">
            <Link href="https://ladderdesigns.co">
              <a
                className="cursor-pointer focus:opacity-50 hover:opacity-50"
                href="https://ladderdesigns.co"
              >
                Ladder Designs
              </a>
            </Link>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  source: PropTypes.string,
};

Footer.defaultProps = {};

export default Footer;
