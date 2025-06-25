// src/components/CVComponent.jsx

import React from "react";
import "./CVComponent.scss";

const CVComponent = () => {
  return (
    <div className="cv">
      <div className="cv__sidebar">
        <div className="cv__photo" />
        <h1 className="cv__name">Jean-Luc Detcherry</h1>
        <h2 className="cv__title">Développeur Web</h2>

        <section className="cv__section">
          <h3>Profil</h3>
          <p>
            Développeur Web passionné en reconversion professionnelle.
            Spécialisé en front-end : HTML, CSS, SASS, JavaScript, React.
          </p>
        </section>

        <section className="cv__section">
          <h3>Contact</h3>
          <ul>
            <li>Email : jeanluc.detcherry@email.com</li>
            <li>Téléphone : +33 6 12 34 56 78</li>
            <li>Adresse : Paris, France</li>
            <li>Portfolio : www.jeanluc-dev.fr</li>
            <li>GitHub : github.com/jeanlucdetcherry</li>
          </ul>
        </section>

        <section className="cv__section">
          <h3>Centres d'intérêt</h3>
          <ul>
            <li>📚 Lecture</li>
            <li>🌍 Veille technologique</li>
            <li>✈️ Voyage</li>
            <li>⚽ Sport</li>
            <li>👨‍💻 Écriture</li>
          </ul>
        </section>
      </div>

      <div className="cv__main">
        <section className="cv__section">
          <h3>Expérience</h3>
          <div>
            <strong>2025 - présent</strong> — Fansite Logan's Run (React)
            <br />
            <small>Application responsive, contenu, Git</small>
          </div>
          <div>
            <strong>2024</strong> — OhMyFood
            <br />
            <small>Intégration SASS, animations, responsive</small>
          </div>
          <div>
            <strong>2024</strong> — Booki
            <br />
            <small>Accessibilité, SEO, responsive</small>
          </div>
        </section>

        <section className="cv__section">
          <h3>Formation</h3>
          <div>
            <strong>2024 - 2025</strong> — Développeur Web, OpenClassrooms
            <br />
            <small>12 projets, 1170h</small>
          </div>
          <div>
            <strong>2015</strong> — Autodidacte
            <br />
            <small>Photoshop, HTML/CSS</small>
          </div>
        </section>

        <section className="cv__section">
          <h3>Compétences</h3>
          <ul className="cv__skills">
            <li>
              <span>HTML/CSS</span>
              <div className="cv__skill-bar full" />
            </li>
            <li>
              <span>SASS/SCSS</span>
              <div className="cv__skill-bar full" />
            </li>
            <li>
              <span>JavaScript</span>
              <div className="cv__skill-bar four" />
            </li>
            <li>
              <span>React</span>
              <div className="cv__skill-bar four" />
            </li>
            <li>
              <span>Photoshop</span>
              <div className="cv__skill-bar four" />
            </li>
            <li>
              <span>SEO</span>
              <div className="cv__skill-bar four" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CVComponent;
