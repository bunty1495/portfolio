import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Wraps children in a Framer Motion fade+slide-up reveal triggered once
 * when the element enters the viewport.
 *
 * @param {number} delay   - stagger delay in seconds (default 0)
 * @param {number} y       - initial vertical offset in px (default 28)
 */
export default function RevealOnScroll({ children, delay = 0, y = 28 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
