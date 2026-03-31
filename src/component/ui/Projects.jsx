import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import projectsData from '../api/projectsData.json'  

const filters = ['All', 'Frontend', 'Backend', 'Full Stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = projectsData.filter(p =>
    active === 'All' ? true : p.category === active
  )

  return (
    <section id='project' className="project">
      <div className="project-container container">
        <h2 className="heading">My <span>Works</span></h2>
        <div className="filter-btns">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >{f}</button>
          ))}
        </div>
        <div className="container-grid">
          {filtered.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-img">
                <img src={project.image} alt={project.title} />
                <span className="project-category-badge">{project.category}</span>
              </div>
              <div className="project-card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tech-tags">
                  {project.tech.split(',').map((t, i) => (
                    <span key={i} className="tech-tag">{t.trim()}</span>
                  ))}
                </div>
                <div className="project-card-btns">
                  {project.previewLink !== '#' ? (
                    <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="card-btn preview-btn">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="card-btn preview-btn disabled-btn">
                      <FaExternalLinkAlt /> Coming Soon
                    </span>
                  )}
                  {project.githubLink !== '#' ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="card-btn github-btn">
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <span className="card-btn github-btn disabled-btn">
                      <FaGithub /> GitHub
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
