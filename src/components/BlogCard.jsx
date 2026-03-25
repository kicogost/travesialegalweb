import { ArrowRight } from 'lucide-react'

const categoryColors = {
  'Extranjería': { bg: '#EBF4FF', color: '#1E3A6E' },
  'Fiscal': { bg: '#FEF9EC', color: '#A8853A' },
  'Laboral': { bg: '#F0FFF4', color: '#2D6A4F' },
}

export default function BlogCard({ category, title, excerpt, readTime, href }) {
  const colors = categoryColors[category] || { bg: 'var(--navy-faint)', color: 'var(--navy)' }

  return (
    <article style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'box-shadow 0.25s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
      e.currentTarget.style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          display: 'inline-block',
          background: colors.bg,
          color: colors.color,
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '500',
        }}>{category}</span>
        <span style={{ fontSize: '12px', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>{readTime}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--navy)',
        lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontSize: '14px',
        color: 'var(--ink-mid)',
        lineHeight: 1.7,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>{excerpt}</p>
      <a
        href={href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--navy-light)',
          textDecoration: 'none',
          marginTop: 'auto',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '10px'}
        onMouseLeave={e => e.currentTarget.style.gap = '6px'}
      >
        Leer más <ArrowRight size={14} />
      </a>
    </article>
  )
}
