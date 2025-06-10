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
    // Ajout de la classe github-icon ici
    icon: <DiGithubAlt className="github-icon" color="#fff" />,
    title: "GitHub",
    description: "Platform for version control and collaboration.",
  },
  {
    icon: <SiRedux color="#764ABC" />,
    title: "Redux",
    description: "State container for JavaScript apps.",
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
];

const Skills = () => (
  <div className="skills-section">
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
  </div>
);

export default Skills;
