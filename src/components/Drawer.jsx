import { useEffect } from 'react'
import './Drawer.css'

/**
 * Generic side-drawer shell that slides in from the right.
 * Accepts any children as the panel body content.
 *
 * Props:
 *   isOpen   {boolean}  - controls visibility
 *   onClose  {function} - called on ESC / overlay click / close button
 *   title    {string}   - panel header title
 *   subtitle {string}   - panel header subtitle (optional)
 */
export default function Drawer({ isOpen, onClose, title, subtitle, children }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="drawer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="drawer-panel" onClick={e => e.stopPropagation()}>

        <div className="drawer-header">
          <div>
            {title    && <h2 className="drawer-title">{title}</h2>}
            {subtitle && <p  className="drawer-subtitle">{subtitle}</p>}
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
            ×
          </button>
        </div>

        <div className="drawer-body">
          {children}
        </div>

      </div>
    </div>
  )
}
