import React from "react";
import { usePortfolio } from "../../context/PortfolioProvider";
import useIsMobile from "@/hooks/useIsMobile"; // Hook personnalisé pour détecter la largeur d'écran (mobile/déstop)
import "./ExperiencePro.scss";

/**
 * Composant d'affichage de la timeline des expériences professionnelles.
 * Affiche un message d'erreur si les données ne peuvent pas être chargées.
 */
const ExperiencePro = () => {
  // Récupère les expériences et les erreurs éventuelles via le contexte PortfolioProvider
  const { experiences, experiencesError } = usePortfolio();
  const isMobile = useIsMobile(800); // On considère mobile si la largeur < 800px

  // Affichage conditionnel : erreur ou timeline des expériences
  return experiencesError ? (
    // Si erreur lors du chargement des données, affiche un message spécifique
    <div className="timeline">
      <div className="timeline-error">Source indisponible</div>
    </div>
  ) : (
    // Sinon, on affiche la timeline des expériences
    <section className="timeline">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          // Sur mobile (ou tablette), tous les items sont à gauche.
          // Sur desktop, on alterne gauche/droite pour l'effet visuel de timeline.
          className={`timeline-item ${isMobile ? "left" : idx % 2 === 0 ? "left" : "right"}`}
        >
          {/* Affiche la période de l'expérience (ex : 2020-2023) */}
          <div className="timeline-period">{exp.period}</div>

          {/* Contenu principal de l'expérience */}
          <div className="timeline-content">
            {/* Titre du poste (ex: "Développeur Web") */}
            {/* Si la société est renseignée, elle s'affiche à côté du titre */}
            <h3>
              {exp.title} {exp.company && <span>@ {exp.company}</span>}
            </h3>

            {/* Description détaillée de l'expérience */}
            <p>{exp.description}</p>

            {/* Si la localisation est renseignée, on l'affiche sous forme d'un petit encadré */}
            {exp.location && (
              <div className="timeline-location">{exp.location}</div>
            )}

            {/* Si une certification est associée à l'expérience, on affiche ses infos */}
            {exp.certification?.titre && (
              <div className="timeline-certification">
                <strong>Certif: </strong>
                {/* Titre de la certification */}
                {exp.certification.titre}
                {/* Niveau de la certification, s'il existe */}
                {exp.certification.niveau && (
                  <> (Niveau {exp.certification.niveau})</>
                )}
                {/* Date d'obtention de la certification, si renseignée */}
                {exp.certification.date_obtention && (
                  <> — {exp.certification.date_obtention}</>
                )}
                {/* CCP (certificat complémentaire), si présent */}
                {exp.certification.ccp && (
                  <div>CCP: {exp.certification.ccp}</div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperiencePro;
