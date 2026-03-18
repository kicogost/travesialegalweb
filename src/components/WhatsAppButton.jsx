import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34694269008"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.12)',
        transition: 'transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.2s cubic-bezier(0.25,0.46,0.45,0.94)',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.5), 0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.12)'
      }}
    >
      <MessageCircle size={24} fill="white" stroke="none" />
    </a>
  )
}
