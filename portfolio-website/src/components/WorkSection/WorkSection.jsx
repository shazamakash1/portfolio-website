import React from "react";
import "./WorkSection.css";

const WorkSection = () => {
  return (
    <section className="work-section">
      <div className="work-section__content">
        <h2>Our Work</h2>
        <div className="work-section__projects">
          <div className="work-section__project">
            <img src="https://picsum.photos/200/300" alt="Project 1" />
          </div>
          <div className="work-section__project">
            <img src="https://picsum.photos/200/301" alt="Project 2" />
          </div>
          <div className="work-section__project">
            <img src="https://picsum.photos/200/302" alt="Project 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
