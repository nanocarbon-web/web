'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#070709',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: '#090e1a',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-2026.jpg"
                  alt="NanoCarbón 2026 Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                NanoCarbón®
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#86868b', lineHeight: 1.6, marginBottom: '1rem' }}>
              El mejor aliado de tu teléfono. Película protectora de alta definición fabricada en matriz NanoCarbón con dureza estándar 9H.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>
              Distribución nacional en Colombia · Canal B2B y Retail
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f5f5f7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Navegación
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <a href="#tecnologia" style={{ color: '#86868b', transition: 'color 0.2s' }}>Tecnología</a>
              <a href="#pruebas" style={{ color: '#86868b', transition: 'color 0.2s' }}>Ensayos de Laboratorio</a>
              <a href="#propiedades" style={{ color: '#86868b', transition: 'color 0.2s' }}>Propiedades 9H</a>
              <a href="#modelos" style={{ color: '#86868b', transition: 'color 0.2s' }}>Disponibilidad de Modelos</a>
              <a href="#galeria" style={{ color: '#86868b', transition: 'color 0.2s' }}>Producto Real</a>
            </div>
          </div>

          {/* Orders */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f5f5f7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Canal Comercial
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <Link href="/order" style={{ color: '#f5f5f7', fontWeight: 600 }}>
                Configurar Nuevo Pedido
              </Link>
              <Link href="/cart" style={{ color: '#86868b' }}>
                Ver Resumen de Pedido
              </Link>
              <span style={{ color: '#6e6e73' }}>
                Venta mayorista para tiendas y distribuidores de telefonía.
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f5f5f7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Atención Directa & Pedidos
            </div>
            <p style={{ fontSize: '0.88rem', color: '#86868b', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              Línea directa para pedidos, cotizaciones por volumen o preguntas técnicas:
            </p>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              +57 315 851 2091
            </div>
            <a
              href="https://wa.me/573158512091?text=Hola%20NanoCarb%C3%B3n,%20deseo%20hacer%20un%20pedido%20o%20tengo%20preguntas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.4rem',
                borderRadius: '999px',
                background: '#ffffff',
                color: '#000000',
                fontWeight: 600,
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <MessageCircle size={18} />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#6e6e73',
          }}
        >
          <div>
            © {new Date().getFullYear()} NanoCarbón®. Todos los derechos reservados.
          </div>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#86868b',
              fontSize: '0.8rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#86868b')}
          >
            <span>Subir al inicio</span>
            <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
