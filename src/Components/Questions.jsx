import React, { useState } from "react";

/**** components from other component */
import { SectionTitle } from "./Hero";
import { frombottom } from "./About";

/*** icons ***/
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6"; /*** property ***/
import { span } from "framer-motion/client";
const questions = {
  _1: {
    Q: "How can I contact you to work on a project?",
    A: "You can contact me through the 'Contact Me' Section on the website and write your request details. I will respond to you within 24 hours, God willing. If you do not receive a response due to any issue, you can contact me directly on whatsApps at 01272073227.",
  },
  // _2: {
  //   Q: "Do you have experience integrating with the Back-End or APIs?",
  //   A: "Yes, I have experience integrating Front-End with Back-End using RESTful APIs and GraphQL. I have worked with fetch API, Axios, and async/await to handle API requests efficiently. Additionall, managing state with React (using Context API or Redux), and ensuring smooth data flow between the client and server.",
  // },
};
function Questions() {
  return (
    <div className="questions" id="questions">
      <div className="main-container">
        <SectionTitle Title="frequently asked questions" />
        <div className="questions-content">
          <ul>
            {Object.entries(questions).map(([key, value]) => {
              return (
                <li key={key}>
                  <Question QA={value} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Question({ QA, show }) {
  const [showque, Setshow] = useState(false);
  return (
    <div className="question-block">
      <h2 className="q">
        <div
          className={`q-icon ${showque ? "active" : ""}`}
          onClick={() => Setshow(!showque)}
        >
          {showque ? <FaCircleMinus /> : <IoIosAddCircle />}
        </div>
        <span>{QA.Q}</span>
      </h2>
      {showque ? <p className="a">{QA.A}</p> : ""}
    </div>
  );
}
export { Questions };
