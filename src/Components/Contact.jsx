import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
/**** components from other component */
import { SectionTitle } from "./Hero";
import { frombottom } from "./About";
/**** img ****/
import khamsat from "../assets/images/khamsat.svg";
import banner from "../assets/images/circular_shehab4.png";

/*** icons */
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { button } from "framer-motion/client";

/*** options ***/
const socialLinks = [
  {
    href: "https://github.com/ShehabAhmed1",
    icon: <FaGithub />,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shehab-ahmed-553102276",
    icon: <TiSocialLinkedinCircular />,
    alt: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/me/",
    icon: <FaFacebook />,
    alt: "Facebook",
  },
];

/* spin 360deg animation */
const spining = (duration) => {
  return {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
};

function Contact() {
  return (
    <section className="contact" id="contact">
      <Whatsup />
      <div className="main-container">
        <motion.div
          className="contact-content"
          variants={frombottom(0.5)}
          initial="initial"
          whileInView="animate"
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

/** information in contact + img at the end */
function ContactInfo() {
  return (
    <div className="contact-info">
      <SectionTitle Title="contact me for collaboration" />
      <p>
        Reach out today to discuss your project needs and start collaborating on
        something amazing!
      </p>
      <div className="social">
        {socialLinks.map((social, index) => {
          return (
            <a href={social.href} className="icon" key={index} target="blank">
              {social.icon}
            </a>
          );
        })}
      </div>
      <figure>
        <motion.div
          className="circle"
          variants={spining(20)}
          initial="initial"
          animate="animate"
        ></motion.div>
        <img className="banner" src={banner} alt="banner" />
      </figure>
    </div>
  );
}

/** the form to contact with you **/
function ContactForm() {
  return (
    <form action="https://formsubmit.co/sa2315144@gmail.com" method="POST">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="shehab Ahmed"
        />
      </label>
      <label htmlFor="phone">
        phone:
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder="01272073227"
        />
      </label>
      <label htmlFor="phone">
        email:
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="sa2315144@gmail.com"
        />
      </label>
      <label htmlFor="message">
        message:
        <textarea
          name="subject"
          id="message"
          required
          placeholder="Hi!"
        ></textarea>
      </label>
      <input type="submit" value="send" />
    </form>
  );
}

/*** contact me button ***/
function ContactMe() {
  return (
    <button className="contact-me">
      <a href="#contact">conatct me</a>
    </button>
  );
}

/***** whatsup ******/
function Whatsup() {
  return (
    <a className="whatsup" href="https://wa.me/+201272073227?" target="_blank">
      <IoLogoWhatsapp />
    </a>
  );
}
export { Contact, socialLinks, ContactMe };
