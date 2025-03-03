import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

/**** Components from other components  *****/
import { SectionTitle, fromright } from "./Hero";
import { works } from "./MyWorks";

/**** img ****/
import logo from "../assets/images/logo2.png";
import figma from "../assets/images/figma.svg";
import css from "../assets/images/css3.svg";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import framer from "../assets/images/framer-motion.svg";
import html from "../assets/images/html-5.svg";

/*** icons */
import { IoMdAdd } from "react-icons/io";

/*** property ***/
const skillItem = [
  {
    img: figma,
    label: "Figma",
    desc: "Design tool",
  },
  {
    img: html,
    label: "html",
    desc: "Structured content.",
  },
  {
    img: css,
    label: "CSS",
    desc: "User Interface",
  },

  {
    img: js,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    img: react,
    label: "React",
    desc: "Framework",
  },
  {
    img: framer,
    label: "Framer motion",
    desc: "animations",
  },
];
//from left animation
const frombottom = (duration = 0.1, delaytime = 0) => {
  return {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delaytime,
      },
    },
  };
};

const useskillItem = createContext();

function About() {
  return (
    <section className="about" id="about">
      <div className="main-container">
        <div className="about-content">
          <Aboutinfo />
          <useskillItem.Provider value={skillItem}>
            <Skills />
          </useskillItem.Provider>
        </div>
      </div>
    </section>
  );
}

/*** section informations in About Component ***/
function Aboutinfo() {
  return (
    <motion.div
      className="about-info"
      variants={frombottom(0.5)}
      initial="initial"
      whileInView="animate"
    >
      <p className="about-me">
        Welcome! I&apos;m <span className="my-name">shehab Ahmed</span>, a
        professional web developer with a knack for crafting visually stunning
        and highly functional websites. Combining creativity and technical
        expertise. I transform your vision into digital masterpiece that excels
        in both appearance and performance.
      </p>
      <div className="my-progress">
        <div className="all-units">
          <ProgressUnit num={works.length} description="project done" />
          <ProgressUnit num={1} description="years of experience" />
        </div>
        <div className="logo">
          <img src={logo} alt="my logo" />
        </div>
      </div>
    </motion.div>
  );
}

/*** block of progress like (num of projects) in Aboutinfo ***/
function ProgressUnit({ num, description }) {
  return (
    <div className="p-unit">
      <span>
        {num}
        <IoMdAdd />
      </span>
      <p>{description}</p>
    </div>
  );
}

/**** Skills section ****/
function Skills() {
  return (
    <div className="skills">
      <SkillsDescription />
      <Tooles />
    </div>
  );
}

/*** skill Description before tooles  **/
function SkillsDescription() {
  return (
    <div className="Skills-title">
      <SectionTitle Title="Essential Tools I use" />
      <p>
        Discover the powerful tools and technologies I use to create
        exceptional, high-performing websites & applications.
      </p>
    </div>
  );
}

/*** big div that containe All tooles */
function Tooles() {
  const skillItem = useContext(useskillItem);
  let delaytime = 0.01;
  return (
    <div className="tooles">
      {skillItem.map((item, index) => {
        delaytime += 0.07;
        return (
          <TooleUnit
            key={index}
            img={item.img}
            name={item.label}
            goal={item.desc}
            delaytime={delaytime}
          />
        );
      })}
    </div>
  );
}

/** the toole block **/
function TooleUnit({ img, name, goal, delaytime }) {
  return (
    <motion.div
      className="toole"
      variants={fromright(0.4, delaytime)}
      initial="initial"
      whileInView="animate"
    >
      <figure>
        <img src={img} alt="toole img" />
      </figure>
      <div className="toole-description">
        <h1 className="title">{name}</h1>
        <p>{goal}</p>
      </div>
    </motion.div>
  );
}
export { About, frombottom };
