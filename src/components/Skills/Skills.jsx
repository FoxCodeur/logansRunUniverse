import React from "react";
import SkillCard from "../SkillCard/SkillCard";
// Importation des icônes pour chaque compétence via react-icons
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiRedux,
  SiGit,
  SiSwagger,
  SiFigma,
  SiMongodb,
  SiLighthouse,
  SiGoogle,
} from "react-icons/si";
import { DiGithubAlt } from "react-icons/di";
import "./Skills.scss";

// Tableau des compétences à afficher
const skills = [
  {
    icon: <SiJavascript color="#F7DF1E" />, // Icône JS avec couleur officielle
    title: "JavaScript",
    description: "Dynamic scripting language for web development.",
  },
  {
    icon: <SiReact color="#61DAFB" />,
    title: "React",
    description: "Modern library for building user interfaces.",
  },
  {
    icon: <SiReact color="#21A1F3" />, // React Context, couleur différente pour distinguer
    title: "React Context",
    description: "Système de gestion d’état global pour React.",
  },
  {
    icon: <SiRedux color="#764ABC" />, // Redux, couleur officielle
    title: "Redux",
    description: "Gestion centralisée de l’état des applications React.",
  },
  {
    icon: <SiHtml5 color="#E44D26" />,
    title: "HTML5",
    description: "Markup language for structuring web content.",
  },
  {
    icon: <SiCss3 color="#1572B6" />,
    title: "CSS3",
    description: "Style sheet language for designing web pages.",
  },
  {
    icon: <SiSass color="#CC6699" />,
    title: "Sass",
    description: "CSS pre-processor with advanced features.",
  },
  {
    icon: <DiGithubAlt className="github-icon" color="#fff" />, // Icône GitHub
    title: "GitHub",
    description: "Platform for version control and collaboration.",
  },
  {
    icon: <SiGit color="#F05032" />,
    title: "Git",
    description: "Distributed version control system.",
  },
  {
    icon: <SiSwagger color="#85EA2D" />,
    title: "Swagger",
    description: "API design and documentation platform.",
  },
  {
    icon: <SiFigma color="#F24E1E" />,
    title: "Figma",
    description: "Collaborative interface design tool.",
  },
  {
    icon: <SiMongodb color="#47A248" />,
    title: "MongoDB",
    description: "NoSQL database for modern applications.",
  },
  {
    icon: <SiLighthouse color="#F44B21" />,
    title: "Lighthouse",
    description: "Outil d'audit de performance, SEO et accessibilité web.",
  },
  {
    icon: <SiGoogle color="#F9AB00" />,
    title: "Google Analytics",
    description: "Outil d'analyse de trafic et de performance web. (SEO)",
  },
];

// Composant principal Skills
const Skills = () => (
  <section className="skills-section">
    {/* Titre de la section */}
    <h2>Compétences</h2>
    {/* Liste des compétences, rendue via SkillCard pour chaque élément */}
    <div className="skills-list">
      {skills.map((skill, idx) => (
        <SkillCard
          key={idx} // Clé unique pour chaque carte (ici l'index du tableau)
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  </section>
);

export default Skills;
