import React from "react";
import "./Experience.scss"; // Assure-toi d'avoir le SCSS adapté

const timelineItems = [
  {
    date: "2024 - 2025",
    title: "Développeur React",
    subtitle: "Entreprise X, Paris",
    description: "Développement d'applications web modernes.",
  },
  {
    date: "2022 - 2024",
    title: "Diplôme d’ingénieur",
    subtitle: "École Y",
    description: "Spécialisation en développement web.",
  },
  {
    date: "2021",
    title: "Stage Développeur",
    subtitle: "Startup Z",
    description: "Participation à la création d’une application mobile.",
  },
  {
    date: "2020",
    title: "Baccalauréat Scientifique",
    subtitle: "Lycée ABC",
    description: "Mention très bien.",
  },
];

const Experience = () => (
  <div className="timeline-wrapper">
    <h2 className="timeline-main-title">Mon parcours</h2>
    <div className="timeline">
      {timelineItems.map((item, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-marker" />
          <div className="timeline-content">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title">{item.title}</div>
            {item.subtitle && (
              <div className="timeline-subtitle">{item.subtitle}</div>
            )}
            {item.description && (
              <div className="timeline-description">{item.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
