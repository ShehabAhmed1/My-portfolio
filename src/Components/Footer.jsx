import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

/**** components from other component */
import { SectionTitle } from "./Hero";
import { navItems } from "./NavBar";
import { socialLinks } from "./Contact";
import { frombottom } from "./About";
/**** img ****/
/*** icons */
/*** options ***/

function Footer() {
  return (
    <footer>
      <div className="main-container">
        <motion.div
          className="footer-content"
          variants={frombottom(0.5)}
          initial="initial"
          whileInView="animate"
        >
          <SectionTitle Title="Let's work together today..." />
          <Links />
        </motion.div>
      </div>
      <Right />
    </footer>
  );
}
function Links() {
  return (
    <div className="links">
      <ul className="portfolio-links">
        <h3>sitemap</h3>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        <h3>socials</h3>
        {socialLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>
                {item.icon}
                {item.alt}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function Right() {
  return (
    <div className="rights">
      <p>
        All right to <span className="my-name">Shehab Ahmed</span>
      </p>
    </div>
  );
}
export { Footer };
