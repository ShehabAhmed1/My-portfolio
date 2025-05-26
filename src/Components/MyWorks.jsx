import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**** Components from other components  *****/
import { SectionTitle } from "./Hero";
import { frombottom } from "./About";
import { zoomout } from "./Hero";
import { useData } from "../context/contextApi";

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
import City_library from "../assets/images/City-Library/city_library.png";
import css from "../assets/images/css3.svg";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import framer from "../assets/images/framer-motion.svg";
import html from "../assets/images/html-5.svg";
import reactQuery from "../assets/images/react-query.svg";
/*********** icons *************/
import { ImArrowUpRight2 } from "react-icons/im";
import { FaFilter } from "react-icons/fa6";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
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
    img: City_library,
    title: "City_library",
    description:
      "The City Library website is a modern, user-friendly platform designed to help users easily explore books, authors, and categories. It features responsive design, real-time search functionality, animations for a smooth user experience, and utilizes React Query for efficient state management and data fetching.",
    projectLink: "https://shehabahmed1.github.io/City_Library/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js", "react", "framer", "reactQuery"],
    startDate: "2025-05-20",
    endDate: "2025-05-24",
  },
  {
    img: mostafa_001,
    title: "Mostafa Kamal Portfolio",
    description:
      "A personal portfolio website showcasing Mostafa Kamal's work, skills, and experience. Built using modern React components with smooth animations and clean design. The site highlights different sections including About, Projects, Skills, and Contact, making it easy for recruiters and clients to explore.",
    projectLink: "https://shehabahmed1.github.io/portfolio-mostafa-001/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js", "react", "framer"],
    startDate: "2025-04-10",
    endDate: "2025-04-13",
  },
  {
    img: DarAlquran,
    title: "DarAlQuran_System",
    description:
      "DarAlQuran_System is a personalized web-based tool for managing Quran memorization institutes. It includes features for student and teacher registration, attendance tracking, hifz follow-up, and customizable schedules. The interface is clean, responsive, and easy to navigate.",
    projectLink: "https://shehabahmed1.github.io/DarAlQuranSystem/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js", "react", "framer"],
    startDate: "2025-03-10",
    endDate: "2025-03-15",
  },
  {
    img: onlineCourse,
    title: "Online Course Website",
    description:
      "An educational platform offering online courses with categorized lessons and responsive UI. Built with React, it includes course filtering, detailed course pages, and modern interactive components to enhance learning experience for students.",
    projectLink: "https://shehabahmed1.github.io/onlineCourses-Reactjs/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2025-02-20",
    endDate: "2025-02-24",
  },
  {
    img: NoteSystem,
    title: "Note-System",
    description:
      "This is a structured note-taking system designed to allow users to create, edit, and manage notes efficiently. It supports persistent storage and is optimized for both desktop and mobile views, offering a simple and elegant interface.",
    projectLink: "https://shehabahmed1.github.io/NoteSystem/",
    technology: ["Reactjs", "Static", "All", 2025],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2025-01-10",
    endDate: "2025-01-12",
  },
  {
    img: organica,
    title: "Organica E-commerce",
    description:
      "A modern e-commerce website for organic products featuring product listing, filtering, cart functionality, and responsive UI. It demonstrates frontend skills in building real-world shopping platforms using clean HTML, CSS, and JavaScript.",
    projectLink: "https://shehabahmed1.github.io/Organica/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: ["html", "css", "js"],
    startDate: "2025-1-22",
    endDate: "2025-1-25",
  },
  {
    img: realestates,
    title: "Real Estates Website",
    description:
      "A real estate listing platform showcasing properties with images, descriptions, and contact information. The site is fully responsive and includes filtering options, making it user-friendly for those searching for real estate online.",
    projectLink: "https://shehabahmed1.github.io/Real-estate/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: ["html", "css", "js"],
    startDate: "2024-11-20",
    endDate: "2024-11-23",
  },
  {
    img: resturant,
    title: "Restaurant Website",
    description:
      "A stylish restaurant website with an interactive menu, location information, and responsive layout. Built with React and modern CSS, it reflects good use of component structuring and responsive design techniques.",
    projectLink: "https://shehabahmed1.github.io/restaurant/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2024-10-10",
    endDate: "2024-10-15",
  },
  {
    img: cryptex,
    title: "Cryptex Website",
    description:
      "A cryptocurrency dashboard providing market insights, coin statistics, and price updates. It features a dynamic layout and modern animations. Built with clean HTML, CSS, and JavaScript for a seamless experience.",
    projectLink: "https://shehabahmed1.github.io/cryptex/",
    technology: ["Native", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js"],
    startDate: "2025-01-1",
    endDate: "2025-01-2",
  },
  {
    img: note,
    title: "Note App",
    description:
      "A simple and efficient note-taking application where users can create, update, and delete notes. It uses React for component-based structure and local storage for saving data between sessions.",
    projectLink: "https://shehabahmed1.github.io/Note-App/",
    technology: ["Native", "Static", "All", 2025],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2024-9-20",
    endDate: "2024-9-23",
  },
  {
    img: kasper,
    title: "personal website",
    description:
      "A personal website showcasing profile, services, and projects in a clean layout. Built with HTML, CSS, and JS, it focuses on simplicity and responsive design. A great example of a static one-page site.",
    projectLink: "https://shehabahmed1.github.io/kasper/",
    technology: ["Native", "Static", "All", 2024],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2024-9-15",
    endDate: "2024-9-18",
  },
  {
    img: typing,
    title: "typing App",
    description:
      "A simple Game to test your speed in typing a words. It measures how quickly and accurately you can type a given set of words. Built with React and styled using CSS, it gives real-time feedback and speed stats.",
    projectLink: "https://shehabahmed1.github.io/typing-test/",
    technology: ["Native", "Static", "All", 2024],
    technologysvg: ["html", "css", "js", "react"],
    startDate: "2024-9-01",
    endDate: "2024-9-3",
  },
  {
    img: fanta,
    title: "Fanta Website",
    description:
      "A creative landing page for Fanta with smooth animations and a vibrant design. It showcases branding and animation skills, and is built using React and Framer Motion for high-quality interactions and scroll-triggered animations.",
    projectLink: "https://shehabahmed1.github.io/fantaReactjs/",
    technology: ["Reactjs", "Animation", "All", 2025],
    technologysvg: ["html", "css", "js", "react", "framer"],
    startDate: "2024-11-15",
    endDate: "2024-11-17",
  },
];

function MyWorks() {
  const [filter, Setfilter] = useState("All");
  const [projectnumshow, Setprojectnumshow] = useState(3);
  const [projectsfalge, Setprojectsfalge] = useState(false);
  const { projectDetails } = useData();
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
          {projectDetails && (
            <DetailsCard
              title={projectDetails.title}
              description={projectDetails.description}
              technologies={projectDetails.technologysvg}
              liveUrl={projectDetails.projectLink}
              startDate={projectDetails.startDate}
              endDate={projectDetails.endDate}
            />
          )}
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
  const { setProjectDetails } = useData();
  return (
    <motion.div
      className={`project-unit ${hover && "active"}`}
      variants={frombottom(0.5, delaytime)}
      initial="initial"
      whileInView="animate"
      onHoverStart={() => Sethover(true)}
      onHoverEnd={() => Sethover(false)}
    >
      {hover && (
        <motion.div
          className="eye-icon"
          initial={{
            scale: 0,
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            x: -25,
            y: -25,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          onClick={() => {
            setProjectDetails(project);
          }}
        >
          <FaEye />
        </motion.div>
      )}

      <figure>
        <img src={project.img} alt={project.title} />
      </figure>
      <div className="project-info">
        <div className="info">
          <h2>{project.title}</h2>
          {/* <p>{project.description}</p> */}
          <div className="technology">
            {/* <div>
              {" "}
              {project.technologysvg.map((ele, index) => {
                return <img src={ele} alt="technology svg" />;
              })}{" "}
            </div> */}
            {/* <motion.div
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
            </motion.div> */}
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
      Setprojectnumshow(3);
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

/************ details **********/
const DetailsCard = ({
  title,
  description,
  technologies,
  liveUrl,
  startDate,
  endDate,
}) => {
  const { setProjectDetails } = useData();
  return (
    <div className="project-card">
      <div
        className="close"
        onClick={() => {
          setProjectDetails("");
        }}
      >
        <IoMdCloseCircle />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="project-dates">
          <span className="date-label">Duration:</span>
          <span className="date-range">
            {startDate} / {endDate}
          </span>
        </div>

        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-buttons">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary-btn"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export { MyWorks, works };
