import React from "react";
import "./style/ProjectPage.css";
import { ProjectDetails } from "../Components/ProjectDetails";
import { useParams } from "react-router-dom";
import { works } from "../assets/data";
function ProjectPage() {
  const { title } = useParams();

  const project = works.filter((p) => {
    return p.title == title;
  });
  return (
    <section className="Project_page">
      <div className="container">
        <ProjectDetails project={project[0]} />
      </div>
    </section>
  );
}

export default ProjectPage;
