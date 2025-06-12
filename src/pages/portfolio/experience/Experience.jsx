import React from "react";
import { usePortfolio } from "./usePortfolio";
import "./Experience.scss";

const Experience = () => {
  const { experiences, loadingExperiences, experiencesError } = usePortfolio();

  return loadingExperiences ? (
    <div>Chargement…</div>
  ) : experiencesError ? (
    <div>Erreur : {experiencesError}</div>
  ) : (
    <div className="experience-wrapper">
      <h2 className="experience-title">Parcours professionnel</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-location">{exp.location}</span>
              <div className="timeline-description">
                <p>{exp.description}</p>
                {exp.certification &&
                exp.certification.titre &&
                exp.certification.titre.trim() !== "" ? (
                  <div className="certification-section">
                    <p>
                      <b>Titre professionnel visé&nbsp;:</b>{" "}
                      {exp.certification.titre}
                      <br />
                      <b>Niveau de certification&nbsp;:</b>{" "}
                      {exp.certification.niveau}
                      <br />
                      <b>CCP obtenu&nbsp;:</b> {exp.certification.ccp}
                    </p>
                    <p>
                      <b>Date d'obtention&nbsp;:</b>{" "}
                      {exp.certification.date_obtention}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
