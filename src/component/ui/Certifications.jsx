import React, { useState } from 'react'
import { FaCertificate, FaTimes } from 'react-icons/fa'

const certs = [
  {
    id: 1,
    title: 'Level 1 Certification – Java Programming',
    issuer: 'ITEG (IT Excellence Group)',
    date: 'Sant Singaji Educational Society',
    image: 'cert-iteg.png',
  },
  {
    id: 2,
    title: 'AI for Beginners',
    issuer: 'HP LIFE – HP Foundation',
    date: 'July 25, 2025',
    image: 'cert-hp-life.png',
  },
]

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="heading">My <span>Certifications</span></h2>
        <div className="cert-grid">
          {certs.map(cert => (
            <div className="cert-card" key={cert.id} onClick={() => setPreview(cert)}>
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-overlay"><span>View</span></div>
              </div>
              <div className="cert-info">
                <FaCertificate className="cert-icon" />
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div className="cert-modal" onClick={() => setPreview(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setPreview(null)}><FaTimes /></button>
            <img src={preview.image} alt={preview.title} />
          </div>
        </div>
      )}
    </section>
  )
}
