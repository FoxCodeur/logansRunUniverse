import React, { useState, useRef } from "react";
import Modal from "../../components/Modal/Modal";
import "./Portfolio1.scss";
import { usePortfolio } from "../../context/PortfolioProvider";
import { formatTextWithLineBreaks } from "../../utils";

/**
 * Ce composant affiche la grille des projets du portfolio.
 */
const Portfolio1 = () => {
  const { projects, projectsError } = usePortfolio();
  const [openModal, setOpenModal] = useState(null);
  const cardRefs = useRef({});

  // Centre la carte avant d’ouvrir la modale
  const handleOpenModal = (projectId) => {
    const cardNode = cardRefs.current[projectId];
    if (cardNode) {
      cardNode.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => setOpenModal(projectId), 350);
    } else {
      setOpenModal(projectId);
    }
  };

  if (projectsError) {
    return (
      <div className="portfolio-grid-container">
        <span className="portfolio-message portfolio-error-message">
          Source indisponible
        </span>
      </div>
    );
  }

  return (
    <section className="portfolio-grid-container">
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`portfolio-card${idx === projects.length - 1 ? " center-card" : ""}`}
            ref={(el) => {
              cardRefs.current[project.id] = el;
            }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <button onClick={() => handleOpenModal(project.id)}>
              En savoir plus
            </button>
            {openModal === project.id && (
              <Modal onClose={() => setOpenModal(null)}>
                <div className="modal-portfolio-content">
                  <div className="modal-project-header">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="modal-project-image"
                    />
                    <h2 className="modal-project-title">{project.title}</h2>
                  </div>
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
