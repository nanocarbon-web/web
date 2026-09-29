'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function InteractiveLab() {
  return (
    <section
      id="resistencia"
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: '#070709',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
            Rendimiento Comprobado
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            La diferencia del polímero.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#86868b', lineHeight: 1.5 }}>
            Diseñado para erradicar el mayor defecto del vidrio templado: la fragilidad ante impactos directos.
          </p>
        </div>

        {/* Apple Comparison Benchmark (Clean 2-Column Split) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Column 1: Vidrio Ordinario (Falla) */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: '#0e0e12',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Protector Tradicional
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '1.5rem' }}>
                Vidrio Templado Común
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#86868b' }}>
                  <X size={18} color="#ff453a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Se quiebra y astilla al primer impacto seco.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#86868b' }}>
                  <X size={18} color="#ff453a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Bordes frágiles que se desmoronan en el bolsillo.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#86868b' }}>
                  <X size={18} color="#ff453a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Obliga a cambiar de protector constantemente.</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', color: '#ff453a', fontSize: '0.85rem', fontWeight: 600 }}>
              Fragilidad estructural del cristal
            </div>
          </div>

          {/* Column 2: NanoCarbón (Superlativo) */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: '#121217',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#30d158', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Ingeniería NanoCarbón®
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
                Polímero en Carbón
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#f5f5f7' }}>
                  <Check size={18} color="#30d158" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>No se parte:</strong> Absorbe caídas violentas sin quebrarse jamás.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#f5f5f7' }}>
                  <Check size={18} color="#30d158" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Dureza 9H:</strong> Blindaje antirrayaduras de larga vida útil.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#f5f5f7' }}>
                  <Check size={18} color="#30d158" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Bioprotección activa:</strong> Superficie inerte libre de virus y bacterias.</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#30d158', fontSize: '0.85rem', fontWeight: 600 }}>
              Tenacidad molecular permanente
            </div>
          </div>
        </div>

        {/* Real Ballistic Lab Visual */}
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            aspectRatio: '21/9',
            minHeight: '260px',
            background: '#000000',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/impact-test.jpg"
            alt="Ensayo balístico de caída de acero"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              padding: '0.65rem 1.25rem',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.82rem',
              color: '#ffffff',
              fontWeight: 500,
            }}
          >
            Ensayo de resistencia mecánica por impacto balístico de bola de acero (64g)
          </div>
        </div>
      </div>
    </section>
  );
}
