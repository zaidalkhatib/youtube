import React, {useState} from "react";
// getting data from the data file
import {initalPorjects, otherProjects} from "./data";
//outside library for the animations
import "aos/dist/aos.css";

import Cards from "./Cards";

function Projects() {
  const [show, setShow] = useState(false);

  return (
    <div id="projects">
      <h1
        style={{
          padding: "0 0 2rem 0",
          color: "#5c99d6",
          letterSpacing: 6,
          marginTop: "1rem",
          fontSize: "2.7rem",
          textAlign: "center",
        }}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        Favorite Projects
      </h1>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          fontWeight: "700",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="ui special cards "
        >
          {initalPorjects.map((project) => (
            <Cards
              name={project.name}
              liveWebsite={project.liveWebsite}
              githubCode={project.githubCode}
              description={project.description}
              image={project.image}
              language={project.language}
            />
          ))}
          {show ? (
            <>
              {otherProjects.map((project) => (
                <Cards
                  name={project.name}
                  liveWebsite={project.liveWebsite}
                  githubCode={project.githubCode}
                  description={project.description}
                  image={project.image}
                  language={project.language}
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "100px",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        <button
          className="ui  secondary submit button"
          onClick={() => {
            setShow(!show);
          }}
        >
          <p style={{letterSpacing: "2px", fontSize: "17px"}}>
            Show {show ? "Less" : "More"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Projects;
