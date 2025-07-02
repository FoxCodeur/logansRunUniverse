import React, { useState, useRef } from "react";
import Modal from "../../components/Modal/Modal";
import "./Portfolio1.scss";
import { usePortfolio } from "../../context/PortfolioProvider";
import { formatTextWithLineBreaks } from "../../utils";

/**
 * Composant Portfolio1
 * Affiche une grille de projets issus du contexte Portfolio.
 * Chaque projet peut ouvrir une modale détaillée.
 * Gère les erreurs de chargement et le centrage des cartes au scroll.
 */
const Portfolio1 = () => {
  // Récupère la liste des projets et une éventuelle erreur depuis le contexte PortfolioProvider
  const { projects, projectsError } = usePortfolio();

  // État pour savoir quelle modale (projet) est ouverte (null = aucune modale ouverte)
  const [openModal, setOpenModal] = useState(null);

  // Ref pour stocker un accès direct à chaque élément de carte-projet dans le DOM (clé = project.id)
  const cardRefs = useRef({});

  /**
   * Fonction pour ouvrir la modale d'un projet :
   * - Centre la carte projet dans le viewport (scrollIntoView)
   * - Ouvre la modale après un court délai (pour laisser le temps au scroll)
   * @param {string|number} projectId - Identifiant du projet à ouvrir
   */
  const handleOpenModal = (projectId) => {
    const cardNode = cardRefs.current[projectId]; // Récupère la référence DOM de la carte projet
    if (cardNode) {
      // Défile la page pour centrer la carte projet dans la fenêtre
      cardNode.scrollIntoView({ behavior: "smooth", block: "center" });
      // Ouvre la modale après 300ms pour que le scroll soit visible avant
      setTimeout(() => setOpenModal(projectId), 300);
    } else {
      setOpenModal(projectId); // Fallback : ouvre la modale sans scroll si la ref n'existe pas
    }
  };

  // ----------- RENDU UI -----------

  // Si une erreur a eu lieu lors du chargement des projets, on affiche un message d'erreur
  if (projectsError) {
    return (
      <div className="portfolio-grid-container">
        <span className="portfolio-message portfolio-error-message">
          Source indisponible
        </span>
      </div>
    );
  }

  // Sinon, on affiche la grille des projets
  return (
    <section className="portfolio-grid-container">
      <div className="portfolio-grid">
        {/* On parcourt tous les projets pour générer une carte par projet */}
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`portfolio-card${idx === projects.length - 1 ? " center-card" : ""}`} // Classe spéciale pour la dernière carte
            // Associe une ref DOM à chaque carte (pour scrollIntoView)
            ref={(el) => {
              cardRefs.current[project.id] = el;
            }}
          >
            {/* Affichage de l'image du projet */}
            <img src={project.image} alt={project.title} />
            {/* Titre du projet */}
            <h3>{project.title}</h3>
            {/* Bouton pour ouvrir la modale de détails */}
            <button onClick={() => handleOpenModal(project.id)}>
              En savoir plus
            </button>
            {/* Affiche la modale seulement si openModal === project.id */}
            {openModal === project.id && (
              <Modal onClose={() => setOpenModal(null)}>
                <div className="modal-portfolio-content">
                  {/* Titre du projet */}
                  <h2>{project.title}</h2>
                  {/* Résumé */}
                  <h4>Résumé du projet</h4>
                  <p className="modal-portfolio-paragraph">
                    {formatTextWithLineBreaks(project.summary)}
                  </p>
                  {/* Objectif */}
                  <h4>Objectif</h4>
                  <p className="modal-portfolio-paragraph">
                    {formatTextWithLineBreaks(project.details.objectif)}
                  </p>
                  {/* Travail réalisé */}
                  <h4>Travail réalisé</h4>
                  <ul>
                    {project.details.travail.map((item, i) => (
                      <li key={i} className="modal-portfolio-paragraph">
                        {formatTextWithLineBreaks(item)}
                      </li>
                    ))}
                  </ul>
                  {/* Lien vers le code source */}
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
                  {/* Lien vers la démo */}
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
                  {/* Affichage conditionnel des technologies utilisées */}
                  {project.technologies &&
                    // Vérifie s'il existe au moins UNE technologie utilisée
                    Object.values(project.technologies).some(Boolean) && (
                      <div className="modal-portfolio-technologies">
                        <h4>Technologies utilisées</h4>
                        <ul className="technologies-list">
                          {/* Affiche seulement les technologies effectivement utilisées */}
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

/**
 * Explication sur Array.prototype.some :
 *
 * La méthode `.some(Boolean)` permet de savoir si au moins un élément du tableau vérifie la condition.
 * Ici : Object.values(project.technologies).some(Boolean)
 * - Object.values(project.technologies) retourne un tableau de booléens (true/false) indiquant si chaque technologie est utilisée.
 * - .some(Boolean) retourne true s'il y a AU MOINS UNE technologie utilisée (true dans le tableau).
 * - Cela permet d'afficher la section "Technologies utilisées" seulement si le projet utilise au moins une techno.
 *
 * Exemple :
 *   project.technologies = { React: true, Sass: false, GSAP: false }
 *   Object.values(project.technologies) = [true, false, false]
 *   .some(Boolean) => true  (au moins un true)
 *
 *   project.technologies = { React: false, Sass: false }
 *   Object.values(project.technologies) = [false, false]
 *   .some(Boolean) => false (aucun true)
 */
