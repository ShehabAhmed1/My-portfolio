import React, { useState } from "react";
import { motion } from "framer-motion";
import cv from "../assets/Shehab Ahmed_front-end developer.pdf";
/**** img ****/
import shehab4 from "../assets/images/shehab4.jpg";
import banner from "../assets/images/shehab1_1.png";
/*** icons */
import { FaDownload } from "react-icons/fa6";
/*** property ***/
//from left animation
const fromleft = (duration = 0.3, delaytime = 0) => {
  return {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delaytime,
      },
    },
  };
};

//from left animation
const fromright = (duration = 0.3, delaytime = 0) => {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delaytime,
      },
    },
  };
};
//zoom out animation
const zoomout = (duration = 0.3) => {
  return {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
};

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="main-container">
        <div className="hero-content">
          <Heroinfo img={shehab4} />
          <Herobanner banner={banner} />
        </div>
      </div>
    </section>
  );
}

/**** the information in hero Component *****/
function Heroinfo({ img }) {
  return (
    <motion.div
      className="hero-info"
      variants={fromleft(0.5)}
      initial="initial"
      animate="animate"
    >
      <HeroActive img={img} />
      <SectionTitle Title="Building Scalable Modern Websites for the Future" />
      <DownloadCv />
    </motion.div>
  );
}

/* active compnent*/
function HeroActive({ img }) {
  return (
    <div className="hero-active">
      <figure>
        <img src={img} alt="My photo (4)" />
      </figure>
      <p>
        <span className="circle"></span> <span>active for work</span>
        {/**
         active for work
        */}
      </p>
    </div>
  );
}

/*Section Title in all compnents*/
function SectionTitle({ Title }) {
  return <h1 className="title">{Title}</h1>;
}

/*Download button*/
function DownloadCv() {
  return (
    <button className="download-cv">
      <a href={cv} download="Shehab Ahmed Front end.pdf">
        <span>Download CV</span>
        <span>
          <FaDownload />
        </span>
      </a>
    </button>
  );
}

/**** the banner in hero Component *****/
function Herobanner({ banner }) {
  return (
    <motion.figure
      className="hero-banner"
      variants={fromright(0.5)}
      initial="initial"
      animate="animate"
    >
      <img src={banner} alt="my banner" />
    </motion.figure>
  );
}

export { Hero, SectionTitle, fromright };
