import React from "react";
import SkillCard from "../SkillCard/SkillCard";
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

const skills = [
  {
    icon: <SiJavascript color="#F7DF1E" />,
    title: "JavaScript",
    description: "Dynamic scripting language for web development.",
  },
  {
    icon: <SiReact color="#61DAFB" />,
    title: "React",
    description: "Modern library for building user interfaces.",
  },
  {
    // React Context avec une couleur différente (#21A1F3)
    icon: <SiReact color="#21A1F3" />,
    title: "React Context",
    description: "Système de gestion d’état global pour React.",
  },
  {
    // Redux avec une couleur différente (#764ABC est la couleur officielle Redux)
    icon: <SiRedux color="#764ABC" />,
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
    icon: <DiGithubAlt className="github-icon" color="#fff" />,
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

const Skills = () => (
  <section className="skills-section">
    <h2>Compétences</h2>
    <div className="skills-list">
      {skills.map((skill, idx) => (
        <SkillCard
          key={idx}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  </section>
);

export default Skills;
