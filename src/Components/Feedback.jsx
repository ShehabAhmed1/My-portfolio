import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

/**** components from other component */
import { SectionTitle } from "./Hero";
import { ContactMe } from "../Components/Contact";

/**** img ****/
import mostafa_001 from "../assets/feedbacks/mostafa_001/mostafa-001.png";
import feed_mostafa_001I from "../assets/feedbacks/mostafa_001/feed_mostafa_001.jpg";
//import feed_mostafa_001V from "../assets/feedbacks/mostafa_001/test.mp4";

/*** icons */
import { TbStarFilled } from "react-icons/tb";
import { img } from "framer-motion/client";

/*** options ***/
const feedback = [
  {
    id: "001",
    name: "Mostafa Kamal",
    img: mostafa_001,
    feedbackText:
      " the work was more than excellent. After he designed my website, I shared it on social media, and to my surprise, my first client came through because he loved the website design! Truly professional work — I highly recommend him to anyone looking for a standout website.",
    feedbackImg: feed_mostafa_001I,
    //feedbackVideos: feed_mostafa_001V,
  },
];

function Feedback() {
  return (
    <section className="feedback" id="feedback">
      <div className="main-container">
        <SectionTitle Title="what our customers say" />
        <div className="feedback-content">
          <FeedbackReviews />
          <FeedbackImg />/{" "}
        </div>
      </div>
    </section>
  );
}

//three components to display feedback with different ways
function FeedbackReviews() {
  return (
    <>
      <h1 className="feed-title">reviews</h1>
      <div className="reviews">
        {feedback.map((feed) => {
          return <FeedbackBlock key={feed.id} feed={feed} />;
        })}
      </div>
    </>
  );
}
function FeedbackImg() {
  return (
    <>
      <h1 className="feed-title">images</h1>
      <div className="feed-img">
        {feedback.map((feed) => {
          return feed.feedbackImg != "" ? (
            <img
              key={feed.id}
              src={feed.feedbackImg}
              alt="review with images"
            />
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}
function FeedbackVideos() {
  return (
    <>
      <h1 className="feed-title">videos</h1>
      <div className="feed-videos">
        {feedback.map((feed) => {
          return feed.feedbackVideos != "" ? (
            <video key={feed.id} src={feed.feedbackVideos} controls muted />
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}

/** the unit of feedback Reviews that use when be a real feedback  **/
function FeedbackBlock({ feed }) {
  return (
    <div className="feedback-block" key={feed.id}>
      <div className="stars">
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
        <TbStarFilled />
      </div>
      <p className="p-feedback">{feed.feedbackText}</p>
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

{
  /*** temporary p that remove mhen there are be a real feedback 
           * 
           *    <p className="temporary" style={{ width: `100%` }}>
            "Our clients will share their thoughts soon! Will you be the first
            to leave your mark?"
          </p>
           * 
          */
}

{
  /*** temporary ContactMe that remove mhen there are be a real feedback */
}
{
  /* <ContactMe /> */
}
