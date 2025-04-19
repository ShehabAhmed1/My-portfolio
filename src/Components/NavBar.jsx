import React, { useState } from "react";
import logo from "../assets/images/logo2.png";
import { animate, motion } from "framer-motion";

/**** components from other component */
import { ContactMe } from "./Contact";

/*** icons ***/
import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUber } from "react-icons/fa6";

/*** options ***/
const navItems = [
  {
    label: "Home",
    link: "#hero",
    icon: <IoHomeSharp />,
    className: "nav-link active",
  },
  {
    label: "About",
    link: "#about",
    icon: <FaUserCircle />,
    className: "nav-link",
  },
  {
    label: "Work",
    link: "#work",
    icon: <FaBriefcase />,
    className: "nav-link",
  },
  {
    label: "Reviews",
    link: "#feedback",
    icon: <FaComments />,
    className: "nav-link",
  },
  {
    label: "Pricing",
    link: "#Pricing",
    icon: <FaComments />,
    className: "nav-link",
  },
  {
    label: "Questions",
    link: "#questions",
    icon: <FaComments />,
    className: "nav-link",
  },
  {
    label: "Contact",
    link: "#contact",
    icon: <FaEnvelope />,
    className: "nav-link hidden",
  },
];

//from top animation
const fromTop = (duration = 0.3) => {
  return {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
};

function NavBar() {
  const [show, SetShow] = useState(false);
  //this function to make link active
  function liActive(target) {
    let nav = document.querySelectorAll(".links .nav-link");
    nav.forEach((e) => {
      e.classList.remove("active");
    });
    target.closest(".nav-link").classList.add("active");
  }
  return (
    <motion.nav variants={fromTop(0.5)} initial="initial" animate="animate">
      <div className="main-container">
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="my logo" />
          </div>
          {/************mobile***********/}
          <Links show={show} liActive={liActive} />
          {/************others***********/}
          <ul className="links others">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.className}
                  onClick={(event) => {
                    liActive(event.target);
                  }}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <NavIcon SetShow={SetShow} show={show} />
          <ContactMe />
        </div>
      </div>
    </motion.nav>
  );
}

/****** menue in mobile *****/
function Links({ show, liActive }) {
  return (
    <motion.ul
      className="links mobile"
      initial={{ opacity: 0, y: -210 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -250 }}
      transition={{ duration: 0.3 }}
    >
      {navItems.map((item, index) => {
        return (
          <li
            key={index}
            className={item.className}
            onClick={(event) => liActive(event.target)}
          >
            <a href={item.link}>{item.label}</a>
          </li>
        );
      })}
    </motion.ul>
  );
}

/** the menu icon in small screen */
function NavIcon({ show, SetShow }) {
  return (
    <div
      className={`baricon ${show ? "active" : ""}`}
      onClick={() => SetShow(!show)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export { NavBar, navItems };
