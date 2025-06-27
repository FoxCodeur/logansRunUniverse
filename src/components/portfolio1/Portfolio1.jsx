import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./Portfolio1.scss";
import { usePortfolio } from "../../context/PortfolioProvider";
import { formatTextWithLineBreaks } from "../../utils";

/**
 * Ce composant affiche la grille des projets du portfolio.
 * Si une erreur survient lors du chargement, un message d'erreur est affiché.
 */
const Portfolio1 = () => {
  // Récupère les projets et les éventuelles erreurs du contexte Portfolio
  const { projects, projectsError } = usePortfolio();
  const [openModal, setOpenModal] = useState(null); // Gère l'état de la modale

  // Utilisation d'une ternaire pour afficher soit le message d'erreur,
  // soit la grille des projets (remplace le if/return)
  return projectsError ? (
    // Si une erreur est présente, affiche un message d'erreur
    <div className="portfolio-grid-container">
      <span className="portfolio-message portfolio-error-message">
        Source indisponible
      </span>
    </div>
  ) : (
    // Sinon, affiche la grille des projets
    <section className="portfolio-grid-container">
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`portfolio-card${
              idx === projects.length - 1 ? " center-card" : ""
            }`}
          >
            {/* Image du projet */}
            <img src={project.image} alt={project.title} />
            {/* Titre du projet */}
            <h3>{project.title}</h3>
            {/* Bouton pour ouvrir la modale */}
            <button onClick={() => setOpenModal(project.id)}>
              En savoir plus
            </button>
            {/* Modale avec détails du projet si openModal === id du projet */}
            {openModal === project.id && (
              <Modal onClose={() => setOpenModal(null)}>
                <div className="modal-portfolio-content">
                  <h2>{project.title}</h2>
                  <h4>Résumé du projet</h4>
                  <p className="modal-portfolio-paragraph">
                    {formatTextWithLineBreaks(project.summary)}
                  </p>
                  <h4>Objectif</h4>
                  <p className="modal-portfolio-paragraph">
                    {formatTextWithLineBreaks(project.details.objectif)}
                  </p>
                  <h4>Travail réalisé</h4>
                  <ul>
                    {project.details.travail.map((item, i) => (
                      <li key={i} className="modal-portfolio-paragraph">
                        {formatTextWithLineBreaks(item)}
                      </li>
                    ))}
                  </ul>
                  <h4>Code source</h4>
                  <p>
                    <a
                      className="modal-accent-code"
                      href={project.details.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.details.code}
                    </a>
                  </p>
                  <h4>Démo</h4>
                  <p>
                    <a
                      className="modal-accent-demo"
                      href={project.details.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.details.demo}
                    </a>
                  </p>
                  {/* Technologies utilisées */}
                  {project.technologies &&
                    Object.values(project.technologies).some(Boolean) && (
                      <div className="modal-portfolio-technologies">
                        <h4>Technologies utilisées</h4>
                        <ul className="technologies-list">
                          {Object.entries(project.technologies)
                            .filter(([, used]) => used)
                            .map(([tech]) => (
                              <li key={tech} className="technology-badge">
                                {tech}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio1;
