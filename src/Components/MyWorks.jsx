import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

/**** Components from other components  *****/
import { SectionTitle } from "./Hero";
import { frombottom } from "./About";

/**** img ****/
import organica from "../assets/images/organica/organica1.png";
import onlineCourse from "../assets/images/online-course/online-courses1.png";
import realestates from "../assets/images/realestates/realestate1.png";
import fanta from "../assets/images/fanta/fanta1.png";
import resturant from "../assets/images/resturant/resturant1.png";
import cryptex from "../assets/images/cryptex/cryptix1.png";
import note from "../assets/images/note/note1.png";
import kasper from "../assets/images/kasper/kasper.png";
import youtubeClone from "../assets/images/youtube-clone/youtube-clone.png";
import DarAlquran from "../assets/images/DarAlQuran/DarAlQuran.png";
import typing from "../assets/images/typing/typing.png";
import NoteSystem from "../assets/images/NoteSystem/NoteSystem.png";
import mostafa_001 from "../assets/images/Mostafa_001/mostafa_001.png";

/*********** icons *************/
import { ImArrowUpRight2 } from "react-icons/im";
import { FaFilter } from "react-icons/fa6";
import { FaFilterCircleXmark } from "react-icons/fa6";
/************ animations ************/

/** move right animation that happen when hover above arrow */
const moveright = (duration) => {
  return {
    initial: { rotate: 0, x: 0 },
    hover: {
      rotate: [45, 45, 45],
      x: [0, 5, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};

/********** options *************/
const works = [
  {
    img: mostafa_001,
    title: "mostafa Kamal portfolio",
    description:
      "An educational platform offering online courses with a structured layout, course previews, and interactive UI built with React.",
    projectLink: "https://shehabahmed1.github.io/portfolio-mostafa-001/",
    technology: ["Reactjs", "Animation", "All", 2025],
  },
  {
    img: DarAlquran,
    title: "DarAlQuran_System",
    description:
      "DarAlQuran_System is a personalized web-based tool I developed to serve the specific needs of my Quran memorization work. It helps me track student progress, organize internal competitions, and store a complete history of performance reports. Each student has a dedicated notes section linked by their unique ID. The system also includes a page to listen to Quran recitations by Sheikh Al-Husary — all tailored to support my workflow and make student follow-up easier and more efficient.",
    projectLink: "https://shehabahmed1.github.io/DarAlQuranSystem/",
    technology: ["Reactjs", "Animation", "All", 2025],
  },
  {
    img: onlineCourse,
    title: "Online Course Website",
    description:
      "An educational platform offering online courses with a structured layout, course previews, and interactive UI built with React.",
    projectLink: "https://shehabahmed1.github.io/onlineCourses-Reactjs/",
    technology: ["Reactjs", "Animation", "All", 2025],
  },
  {
    img: NoteSystem,
    title: "Note-System",
    description:
      "This is a structured note-taking system that categorizes notes into distinct groups. Each category includes a note title and its corresponding content. The platform is divided into two main sections: one dedicated to adding new notes, and another designed to present the notes in an organized and visually engaging manner.",
    projectLink: "https://shehabahmed1.github.io/NoteSystem/",
    technology: ["Reactjs", "Static", "All", 2025],
  },
  {
    img: organica,
    title: "Organica E-commerce",
    description:
      "A modern e-commerce website for organic products, featuring a clean UI, product filtering, and a responsive design.",
    projectLink: "https://shehabahmed1.github.io/Organica/",
    technology: ["Native", "Static", "All", 2025],
  },
  {
    img: realestates,
    title: "Real Estates Website",
    description:
      "A real estate listing platform showcasing properties with search and filter functionality for an enhanced user experience.",
    projectLink: "https://shehabahmed1.github.io/Real-estate/",
    technology: ["Native", "Static", "All", 2025],
  },
  {
    img: fanta,
    title: "Fanta Website",
    description:
      "A creative landing page for Fanta, featuring engaging animations, bright visuals, and a smooth scrolling experience.",
    projectLink: "https://shehabahmed1.github.io/fantaReactjs/",
    technology: ["Reactjs", "Animation", "All", 2025],
  },
  {
    img: resturant,
    title: "Restaurant Website",
    description:
      "A stylish restaurant website with an interactive menu, booking system, and a visually appealing design optimized for mobile.",
    projectLink: "https://shehabahmed1.github.io/restaurant/",
    technology: ["Native", "Static", "All", 2025],
  },
  {
    img: cryptex,
    title: "Cryptex Website",
    description:
      "A cryptocurrency dashboard providing market insights, live price updates, and a user-friendly UI.",
    projectLink: "https://shehabahmed1.github.io/cryptex/",
    technology: ["Native", "Animation", "All", 2025],
  },
  {
    img: note,
    title: "Note App",
    description:
      "A simple and efficient note-taking application with local storage support, allowing users to create, edit, and delete notes.",
    projectLink: "https://shehabahmed1.github.io/Note-App/",
    technology: ["Native", "Static", "All", 2025],
  },
  {
    img: kasper,
    title: "personal website",
    description:
      "A simple and efficient note-taking application with local storage support, allowing users to create, edit, and delete notes.",
    projectLink: "https://shehabahmed1.github.io/kasper/",
    technology: ["Native", "Static", "All", 2024],
  },
  {
    img: typing,
    title: "typing App",
    description: "A simple Game to test your speed in typing a words",
    projectLink: " https://shehabahmed1.github.io/typing-test/",
    technology: ["Native", "Static", "All", 2024],
  },
];

function MyWorks() {
  const [filter, Setfilter] = useState("All");
  const [projectnumshow, Setprojectnumshow] = useState(2);
  const [projectsfalge, Setprojectsfalge] = useState(false);
  return (
    <section className="my-works" id="work">
      <div className="main-container">
        <div className="section-title">
          <SectionTitle Title="my works highlights" />
          <Filter Setfilter={Setfilter} />
        </div>
        <div className="works-content">
          <Projects
            work={works}
            filter={filter}
            projectsfalge={projectsfalge}
            projectnumshow={projectnumshow}
            Setprojectnumshow={Setprojectnumshow}
          />
          <div className="movement">
            <button
              className="more"
              onClick={() => {
                Setprojectsfalge(!projectsfalge);
              }}
            >
              {projectsfalge ? "show less" : "show more"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*** the unit of the project  */
function ProjectUnit({ project, delaytime }) {
  const [hover, Sethover] = useState(false);
  return (
    <motion.div
      className="project-unit"
      variants={frombottom(0.5, delaytime)}
      initial="initial"
      whileInView="animate"
    >
      <figure>
        <img src={project.img} alt={project.title} />
      </figure>
      <div className="project-info">
        <div className="info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="technology">
            <p> {project.technology[0]} </p>
            <motion.div
              className="project-link"
              onHoverStart={() => Sethover(!hover)}
              onHoverEnd={() => Sethover(!hover)}
            >
              <motion.a
                href={project.projectLink}
                variants={moveright(0.6)}
                initial="initial"
                animate={hover ? "hover" : "initial"}
                target="blank"
              >
                <ImArrowUpRight2 />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Filter({ Setfilter }) {
  const [showfilter, Setshowfilter] = useState(false);
  return (
    <div className="filter">
      <p onClick={() => Setshowfilter(!showfilter)}>
        filter {showfilter ? <FaFilterCircleXmark /> : <FaFilter />}
      </p>
      {showfilter ? <FilterList Setfilter={Setfilter} /> : ""}
    </div>
  );
}

function FilterList({ Setfilter }) {
  return (
    <ul>
      <li>
        <input
          type="radio"
          id="All"
          name="project"
          value="All"
          onClick={(event) => Setfilter(event.target.value)}
        />
        <label htmlFor="All">All</label>
      </li>
      <li>
        <input
          type="radio"
          id="native"
          name="project"
          value="Native"
          onClick={(event) => Setfilter(event.target.value)}
        />
        <label htmlFor="native"> native</label>
      </li>
      <li>
        <input
          type="radio"
          id="Reactjs"
          name="project"
          value="Reactjs"
          onClick={(event) => Setfilter(event.target.value)}
        />
        <label htmlFor="Reactjs">Reactjs</label>
      </li>
      <li>
        <input
          type="radio"
          id="Animation"
          name="project"
          value="Animation"
          onClick={(event) => Setfilter(event.target.value)}
        />
        <label htmlFor="Animation">Animation</label>
      </li>
    </ul>
  );
}

import { useEffect } from "react";

function Projects({
  work,
  filter,
  projectsfalge,
  projectnumshow,
  Setprojectnumshow,
}) {
  let delaytime = 0.01;

  // filter projects
  const filteredProjects = work.filter((project) =>
    project.technology.includes(filter)
  );

  // Safe: run after render
  useEffect(() => {
    if (projectsfalge) {
      Setprojectnumshow(filteredProjects.length);
    } else {
      Setprojectnumshow(2);
    }
  }, [projectsfalge, filteredProjects.length]); // add dependencies here

  return (
    <div className="projects">
      {filteredProjects.map((project, index) => {
        delaytime += 0.1;
        return projectnumshow > index ? (
          <ProjectUnit key={index} project={project} delaytime={delaytime} />
        ) : null;
      })}
    </div>
  );
}

export { MyWorks, works };
