import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * InteractiveButton — sliding dot hover animation.
 * Keeps all brand colours; wording slides out, arrow+wording slides in.
 *
 * Props:
 *  variant   'gold' | 'outline-dark'
 *  href      external URL  → renders <a>
 *  to        internal path → renders <Link>
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

  if (to) {
    return <Link to={to} className={cls} style={style} {...rest}>{inner}</Link>
  }

  return (
    <a href={href} className={cls} style={style} {...rest}>
      {inner}
    </a>
  )
}
