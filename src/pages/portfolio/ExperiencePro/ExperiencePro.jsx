import React from "react";
import { usePortfolio } from "../Context/PortfolioProvider";
import "./ExperiencePro.scss";

const ExperiencePro = () => {
  const { experiences, loadingExperiences, experiencesError } = usePortfolio();

  return (
    <div className="timeline">
      {loadingExperiences ? (
        <div>Chargement…</div>
      ) : experiencesError ? (
        <div>Erreur : {experiencesError}</div>
      ) : (
        experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-period">{exp.period}</div>
            <div className="timeline-content">
              <h3>
                {exp.title} {exp.company && <span>@ {exp.company}</span>}
              </h3>
              <p>{exp.description}</p>
              {exp.location && (
                <div className="timeline-location">{exp.location}</div>
              )}
              {exp.certification?.titre && (
                <div className="timeline-certification">
                  <strong>Certif: </strong>
                  {exp.certification.titre}
                  {exp.certification.niveau && (
                    <> (Niveau {exp.certification.niveau})</>
                  )}
                  {exp.certification.date_obtention && (
                    <> — {exp.certification.date_obtention}</>
                  )}
                  {exp.certification.ccp && (
                    <div>CCP : {exp.certification.ccp}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ExperiencePro;
