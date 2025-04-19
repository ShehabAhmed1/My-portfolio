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
import { IoClose } from "react-icons/io5";

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
  {
    href: "https://wa.me/+201272073227?",
    icon: <IoLogoWhatsapp />,
    alt: "whatsup",
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [error, setError] = useState("");

  return (
    <form action="https://formsubmit.co/sa2315144@gmail.com" method="POST">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="phone">
        phone:
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder="your phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </label>
      <label htmlFor="phone">
        email:
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="your email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </label>
      <label htmlFor="message">
        message:
        <textarea
          name="subject"
          id="message"
          required
          placeholder="Write what you need, and add any link you want me to check."
          onChange={(event) => {
            setRequest(event.target.value);
          }}
        ></textarea>
      </label>
      <input
        type="submit"
        value="send"
        onClick={(event) => {
          setError(formValidation(name, phone, email, request, event));
        }}
      />
      {error != "" ? <FormErrors error={error} setError={setError} /> : ""}
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

/***** whatsup icon ******/
function Whatsup() {
  return (
    <a className="whatsup" href="https://wa.me/+201272073227?" target="_blank">
      <IoLogoWhatsapp />
    </a>
  );
}

/**** error box ****/
function FormErrors({ error, setError }) {
  return (
    <div className="error-box">
      <div
        className="close-icon"
        onClick={() => {
          setError("");
        }}
      >
        <IoClose />
      </div>
      <p>{error}</p>
    </div>
  );
}

/** function form validation **/
function formValidation(name, phone, email, request, event) {
  console.log(name, phone);
  const phonePatter = /^(010|011|012|015)[0-9]{8}$/;
  //check the name
  if (name.length < 7 || !name.includes(" ")) {
    event.preventDefault();
    return "please enter real name.";
  }

  //check the phone
  if (!phonePatter.test(phone)) {
    event.preventDefault();
    return "Please enter a valid Egyptian phone number or use the WhatsApp icon.";
  }

  //check the request
  if (request.length < 20 || !request.includes(" ")) {
    event.preventDefault();
    return "Your request seems unclear or needs more details .";
  }

  return "";
}

export { Contact, socialLinks, ContactMe };
