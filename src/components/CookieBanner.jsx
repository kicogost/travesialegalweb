import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event('cookie-consent-accepted'))
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  }

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        background: '#08142A',
        borderTop: '1px solid rgba(200,169,110,0.3)',
        padding: '20px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '16px',
        justifyContent: 'space-between',
      }}
    >
      <p style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: '14px',
        lineHeight: 1.6,
        margin: 0,
        flex: '1 1 300px',
        fontFamily: 'var(--font-body)',
      }}>
        Utilizamos cookies para analizar el tráfico y mejorar tu experiencia. Puedes consultar nuestra{' '}
        <a
          href="/politica-de-cookies"
          style={{ color: '#C8A96E', textDecoration: 'underline' }}
        >
          política de cookies
        </a>
        .
      </p>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          style={{
            background: '#C8A96E',
            color: '#08142A',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#A8853A' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#C8A96E' }}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
