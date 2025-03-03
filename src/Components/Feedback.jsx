import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

/**** components from other component */
import { SectionTitle } from "./Hero";
import { ContactMe } from "../Components/Contact";

/**** img ****/
import clint1 from "../assets/images/shehab2.jpg";

/*** icons */
import { TbStarFilled } from "react-icons/tb";

/*** options ***/
const feedback = [
  //   {
  //     name: "shehab",
  //     img: clint1,
  //     feedback:
  //       "Our clients will share their thoughts soon! Will you be the fito leave your mark?",
  //     stars: [
  //       <TbStarFilled />,
  //       <TbStarFilled />,
  //       <TbStarFilled />,
  //       <TbStarFilled />,
  //       <TbStarFilled />,
  //     ],
  //   },
];

function Feedback() {
  return (
    <section className="feedback" id="feedback">
      <div className="main-container">
        <SectionTitle Title="what our customers say" />

        <div className="feedback-content">
          {/*** temporary p that remove mhen there are be a real feedback */}
          <p className="temporary" style={{ width: `100%` }}>
            "Our clients will share their thoughts soon! Will you be the first
            to leave your mark?"
          </p>
          {feedback.map((feed, index) => {
            return <FeedbackBlock key={index} feed={feed} />;
          })}

          {/*** temporary ContactMe that remove mhen there are be a real feedback */}
          <ContactMe />
        </div>
      </div>
    </section>
  );
}

/** the unit of feedback that use when be a real feedback  **/
function FeedbackBlock({ feed }) {
  return (
    <div className="feedback-block">
      <div className="stars">{feed.stars}</div>
      <p className="p-feedback">{feed.feedback}</p>
      <div className="person">
        <figure>
          <img src={feed.img} alt={feed.img} />
        </figure>
        <div className="p-info">
          <h2>{feed.name}</h2>
          <p>thank you</p>
        </div>
      </div>
    </div>
  );
}
export { Feedback };
