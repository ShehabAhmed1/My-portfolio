import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**** Components from other components  *****/
import { SectionTitle } from "./Hero";
import { frombottom } from "./About";
import { useData } from "../context/contextApi";
import { works } from "../assets/data";

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
      onClick={() => {
        Sethover(!hover);
      }}
    >
      {hover && (
        <Link
          to={`/ProjectPage/${project.title}`}
          className="eye-icon"
          onClick={() => {
            setProjectDetails(project);
          }}
        >
          <FaEye />
        </Link>
      )}

      <figure>
        <img src={project.img} alt={project.title} />
      </figure>
      <div className="project-info">
        <div className="info">
          <h2>{project.title}</h2>
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

export { MyWorks, works };
