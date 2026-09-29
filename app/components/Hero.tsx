'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="tecnologia"
      style={{
        position: 'relative',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        backgroundColor: '#000000',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1060px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
        }}
      >
        {/* Semantic SEO Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', fontSize: '0.82rem', fontWeight: 600, color: '#a1a1a6', marginBottom: '1.25rem' }}>
          <span>Protectores para Pantallas de Carros, Pantallas Digitales & Celulares</span>
        </div>

        {/* Apple Headline */}
        <h1 className="apple-headline" style={{ marginBottom: '1rem' }}>
          NanoCarbón.
        </h1>

        <p className="apple-subhead" style={{ maxWidth: '780px', margin: '0 auto 1.5rem', color: '#ffffff' }}>
          Más tenaz que el vidrio. <br />
          <span style={{ color: '#86868b' }}>Infundido con carbono molecular.</span>
        </p>

        <p className="apple-lead" style={{ maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          Láminas de polímero en carbón molecular para pantallas de carros, centros de infoentretenimiento táctil, clúster digital y smartphones. Absorbe impactos mecánicos, nunca se astilla y ofrece dureza 9H con acabados Clear y Mate Antirreflejo.
        </p>

        {/* Apple CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.75rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <Link href="/order" className="btn-apple-cta">
            Configurar Pedido
          </Link>
          <a href="#modelos" className="apple-link">
            Ver modelos compatibles ›
          </a>
        </div>

        {/* Cinematographic Product Hero (Borderless, Edge-to-Edge) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '920px',
            margin: '0 auto 5rem',
          }}
        >
          {/* Subtle Top Down Spotlight */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '350px',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 100px -20px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.1)',
              aspectRatio: '16/9',
              zIndex: 2,
              backgroundColor: '#050507',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-render.jpg"
              alt="NanoCarbón Protector de Polímero en Carbón"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Apple Clean Metrics (Floating Numbers on Pure Black - NO Boxes) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>
              9H
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#86868b', marginTop: '0.5rem' }}>
              Dureza superficial certificada
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>
              99.9%
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#86868b', marginTop: '0.5rem' }}>
              Transparencia óptica HD
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>
              0%
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#86868b', marginTop: '0.5rem' }}>
              Residuos al desmontar
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>
              Inerte
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#86868b', marginTop: '0.5rem' }}>
              Barrera antibacterial activa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
