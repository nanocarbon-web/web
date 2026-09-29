'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="WhatsApp de atención y pedidos"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
      }}
    >
      <a
        href="https://wa.me/573158512091?text=Hola%20NanoCarb%C3%B3n,%20deseo%20hacer%20un%20pedido%20o%20hacer%20preguntas%20sobre%20el%20producto"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.25rem',
          borderRadius: '999px',
          background: 'rgba(20, 20, 26, 0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 600,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
          e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#30d158',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000',
            flexShrink: 0,
          }}
        >
          <MessageCircle size={16} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span style={{ fontSize: '0.72rem', color: '#a1a1a6', fontWeight: 500, lineHeight: 1.1 }}>
            Pedidos o Preguntas
          </span>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f5f5f7' }}>
            315 851 2091
          </span>
        </div>
      </a>
    </aside>
  );
}
