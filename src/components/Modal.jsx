import { useEffect } from 'react'
import { caseStudies } from '../data/caseStudies'
import './Modal.css'

/**
 * SVG pipeline diagram for the M365 guest migration architecture.
 * Hardcoded colors match the site design tokens (index.css).
 */
function MigrationDiagram() {
  return (
    <svg
      viewBox="0 0 480 358"
      className="arch-diagram"
      aria-label="M365 Migration Architecture Diagram"
      role="img"
    >
      <defs>
        <marker id="ms-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#6366f1" />
        </marker>
      </defs>

      {/* ── Step 1: Source ── */}
      <circle cx="96" cy="42" r="14" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="1" />
      <text x="96" y="47" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="700">1</text>
      <rect x="140" y="16" width="200" height="52" rx="10" fill="#1a1a26" stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="38" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">Yammer Guest Registry</text>
      <text x="240" y="56" textAnchor="middle" fill="#94a3b8" fontSize="11">Source · 300K native guests</text>

      {/* Arrow 1 → 2 */}
      <line x1="240" y1="68" x2="240" y2="96" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      <text x="352" y="87" fill="#64748b" fontSize="11">chunked reads</text>

      {/* ── Step 2: Orchestrator ── */}
      <circle cx="96" cy="126" r="14" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="1" />
      <text x="96" y="131" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="700">2</text>
      <rect x="140" y="100" width="200" height="52" rx="10" fill="#1a1a26" stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="122" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">Migration Orchestrator</text>
      <text x="240" y="139" textAnchor="middle" fill="#94a3b8" fontSize="11">Batched · Idempotent · Retryable</text>

      {/* Arrow 2 → 3 */}
      <line x1="240" y1="152" x2="240" y2="180" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      <text x="352" y="171" fill="#64748b" fontSize="11">rollback gates</text>

      {/* ── Step 3: AAD Creation ── */}
      <circle cx="96" cy="210" r="14" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="1" />
      <text x="96" y="215" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="700">3</text>
      <rect x="140" y="184" width="200" height="52" rx="10" fill="#1a1a26" stroke="#6366f1" strokeWidth="1.5" />
      <text x="240" y="206" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">AAD Guest Creation</text>
      <text x="240" y="223" textAnchor="middle" fill="#94a3b8" fontSize="11">Feature parity validation ✓</text>

      {/* Arrow 3 → 4 */}
      <line x1="240" y1="236" x2="240" y2="264" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#ms-arrow)" />
      <text x="352" y="255" fill="#64748b" fontSize="11">identity swap</text>

      {/* ── Step 4: Sync Pipeline (result) ── */}
      <circle cx="96" cy="294" r="14" fill="#818cf8" fillOpacity="0.2" stroke="#818cf8" strokeWidth="1" />
      <text x="96" y="299" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="700">4</text>
      <rect x="140" y="268" width="200" height="52" rx="10" fill="#12121a" stroke="#818cf8" strokeWidth="2" />
      <text x="240" y="290" textAnchor="middle" fill="#818cf8" fontSize="13" fontWeight="700">Sync Pipeline</text>
      <text x="240" y="307" textAnchor="middle" fill="#94a3b8" fontSize="11">{'SLA: 1 day → < 5 min ✓'}</text>
    </svg>
  )
}

/** Map of diagramId → diagram component. Extend here to add future case studies. */
const diagrams = {
  'ms-migration': MigrationDiagram,
}

export default function Modal({ studyId, onClose }) {
  const study = caseStudies[studyId]
  const Diagram = diagrams[studyId]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!study) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={study.title}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{study.title}</h2>
            <p className="modal-subtitle">{study.subtitle}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        </div>

        <div className="modal-body">

          {/* Section 1: Challenge */}
          <div className="case-section">
            <div className="case-section-label">
              <span className="case-num">1</span>
              The Challenge
            </div>
            <p className="case-text">{study.challenge}</p>
          </div>

          {/* Section 2: Architecture */}
          <div className="case-section">
            <div className="case-section-label">
              <span className="case-num">2</span>
              The Architecture
            </div>
            <div className="diagram-container">
              {Diagram && <Diagram />}
            </div>
          </div>

          {/* Section 3: Result */}
          <div className="case-section">
            <div className="case-section-label">
              <span className="case-num">3</span>
              The Result
            </div>
            <div className="result-metrics">
              {study.result.metrics.map(({ value, label }) => (
                <div key={label} className="result-metric">
                  <span className="metric-value">{value}</span>
                  <span className="metric-label">{label}</span>
                </div>
              ))}
            </div>
            <p className="case-text">{study.result.summary}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
