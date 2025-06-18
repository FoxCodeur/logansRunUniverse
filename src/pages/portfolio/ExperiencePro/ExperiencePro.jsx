import React from "react";
import { usePortfolio } from "../Context/PortfolioProvider";
import "./ExperiencePro.scss";

/**
 * Ce composant affiche la timeline des expériences professionnelles.
 * Si une erreur survient lors du chargement, un message d'erreur est affiché.
 */
const ExperiencePro = () => {
  // Récupère les expériences et les éventuelles erreurs du contexte Portfolio
  const { experiences, experiencesError } = usePortfolio();

  // Affiche le message d'erreur si les expériences ne sont pas disponibles
  if (experiencesError)
    return (
      <div className="timeline">
        <div className="timeline-error">Source indisponible</div>
      </div>
    );

  // Affiche la timeline des expériences si tout va bien
  return (
    <div className="timeline">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
        >
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
                  <div>CCP: {exp.certification.ccp}</div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePro;
