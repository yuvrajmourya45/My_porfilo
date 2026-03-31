import React from 'react'
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,
  FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa'
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiPostman, SiFigma, SiVscodium
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React',       icon: <FaReact />,      level: 'Advanced' },
      { name: 'HTML5',       icon: <FaHtml5 />,      level: 'Expert'   },
      { name: 'CSS3',        icon: <FaCss3Alt />,    level: 'Advanced' },
      { name: 'JavaScript',  icon: <FaJs />,         level: 'Advanced' },
      { name: 'Tailwind',    icon: <SiTailwindcss />,level: 'Advanced' },
      { name: 'Bootstrap',   icon: <FaBootstrap />,  level: 'Advanced' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js',  icon: <FaNodeJs />,   level: 'Advanced'     },
      { name: 'Express',  icon: <SiExpress />,  level: 'Advanced'     },
      { name: 'Java',     icon: <FaJava />,     level: 'Intermediate' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 'Advanced'     },
      { name: 'MySQL',   icon: <SiMysql />,   level: 'Advanced'     },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git',     icon: <FaGitAlt />,   level: 'Expert'       },
      { name: 'GitHub',  icon: <FaGithub />,   level: 'Expert'       },
      { name: 'VS Code', icon: <SiVscodium />, level: 'Expert'       },
      { name: 'Postman', icon: <SiPostman />,  level: 'Intermediate' },
      { name: 'Docker',  icon: <FaDocker />,   level: 'Beginner'     },
      { name: 'Figma',   icon: <SiFigma />,    level: 'Intermediate' },
    ]
  }
]

export default function Skills() {
  const topCategories = skillCategories.slice(0, 1)       // Frontend
  const midCategories = skillCategories.slice(1, 3)       // Backend + Database
  const bottomCategories = skillCategories.slice(3)       // Tools

  const renderCategory = (cat) => (
    <div className="skill-category" key={cat.title}>
      <h3 className="skill-category-title">{cat.title}</h3>
      <div className="skill-cards-grid">
        {cat.skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
            <span className={`skill-level level-${skill.level.toLowerCase()}`}>{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id='skills' className="skills">
      <div className="skills-section container">
        <h2 className='heading'>My <span>Skills</span></h2>
        <div className="skills-categories">
          {topCategories.map(renderCategory)}
          <div className="skills-row-pair">
            {midCategories.map(renderCategory)}
          </div>
          {bottomCategories.map(renderCategory)}
        </div>
      </div>
    </section>
  )
}
