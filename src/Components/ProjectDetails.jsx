import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

function ProjectDetails({ project }) {
  const projectDetails = project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details">
      <main className="main-container">
        <div className="content">
          {/* Back Link */}
          <Link to="/" className="back-link">
            <TiArrowBack className="icon" />
            Back
          </Link>
          {/* Header */}
          <div className="header">
            <h1 className="title">{projectDetails.title}</h1>
            <p className="date">{projectDetails.endDate}</p>
          </div>
          {/* Project Cover Image */}
          <div className="cover">
            <img src={projectDetails.img} alt="Project Cover" />
          </div>
          {/* Overview */}
          <section className="overview">
            <h2 className="section-title">Overview</h2>
            <p className="section-text">{projectDetails.description}</p>
          </section>
          {/* Tech Stack */}
          <section className="tech-stack">
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-grid">
              {projectDetails.technologysvg.map((tech) => (
                <div key={tech.name} className="tech-card">
                  <img src={tech.logo} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Features */}
          <section className="features">
            <h2 className="section-title">Features</h2>
            <ul className="features">
              {projectDetails.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          {/* Challenges */}
          <section className="challenges">
            <h2 className="section-title">Challenges & Solutions</h2>
            <ul className="challenges">
              {projectDetails.challengesAndSolutions.map((challenge) => (
                <li key={challenge.challenge}>
                  <strong>Challenge:</strong> {challenge.challenge}
                  <br />
                  <br />
                  <strong>Solution:</strong> {challenge.solution}
                </li>
              ))}
            </ul>
          </section>
          {/* Footer Links */}
          <section className="footer-links">
            <a href={projectDetails.projectLink} className="btn primary">
              <span className="material-symbols-outlined">visibility</span>
              Live Demo
            </a>
            {projectDetails.githubLink && (
              <a href={projectDetails.githubLink} className="btn secondary">
                GitHub Repository
              </a>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export { ProjectDetails };
