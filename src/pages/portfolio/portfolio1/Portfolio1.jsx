import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import "./Portfolio1.scss";
import { usePortfolio } from "../Context/PortfolioContext";
import { formatTextWithLineBreaks } from "../../../utils";

const Portfolio1 = () => {
  const { projects, loading, fetchError } = usePortfolio();
  const [openModal, setOpenModal] = useState(null);

  if (loading)
    return <div className="portfolio-grid-container">Chargement...</div>;
  if (fetchError)
    return (
      <div className="portfolio-grid-container">Erreur : {fetchError}</div>
    );

  return (
    <div className="portfolio-grid-container">
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`portfolio-card${idx === projects.length - 1 ? " center-card" : ""}`}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <button onClick={() => setOpenModal(project.id)}>
              En savoir plus
            </button>
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
                </div>
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio1;
