import { ArrowRight } from 'lucide-react'

/**
 * InteractiveButton — sliding dot hover animation.
 * Keeps all brand colours; wording slides out, arrow+wording slides in.
 *
 * Props:
 *  variant   'gold' | 'outline-dark'
 *  href      URL (internal or external)
 *  to        internal path (alias for href, kept for backwards compat)
 *  children  button label (icon + text)
 *  style     extra inline styles
 */
export default function InteractiveButton({ variant = 'gold', href, to, children, style, ...rest }) {
  const cls = `btn-interactive btn-interactive--${variant}`

  const inner = (
    <>
      <div className="btn-interactive__dot" />
      <span className="btn-interactive__label">{children}</span>
      <span className="btn-interactive__hover-label">
        {children}
        <ArrowRight size={16} />
      </span>
    </>
  )

  return (
    <a href={to || href} className={cls} style={style} {...rest}>
      {inner}
    </a>
  )
}
