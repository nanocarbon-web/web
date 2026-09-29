'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function ProductGallery() {
  return (
    <section
      id="galeria"
      style={{
        position: 'relative',
        padding: '5rem 2rem',
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
          <div className="apple-badge" style={{ marginBottom: '1rem' }}>
            <span>PRODUCTO REAL</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
              color: '#ffffff',
            }}
          >
            Presentación Retail & B2B
          </h2>

          <p style={{ fontSize: '1rem', color: '#86868b' }}>
            Empaque individual sellado &ldquo;Glass Pro+&rdquo; con película de polímero en carbón.
          </p>
        </div>

        {/* 2-Column Presentation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Real Photo Card */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#0a0a0e',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/product-real.jpeg"
                alt="Empaque oficial NanoCarbón"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.85rem', color: '#f5f5f7', fontWeight: 600 }}>
                Packaging Sellado Glass Pro+
              </span>
              <span style={{ fontSize: '0.78rem', color: '#30d158', fontWeight: 600 }}>
                ● 100% Original
              </span>
            </div>
          </div>

          {/* Clean Bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                Protección para tiendas y mayoristas
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#86868b', lineHeight: 1.5 }}>
                Película nanotecnológica en polímero de carbono. No se quiebra al doblar ni se astilla con golpes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Check size={16} color="#30d158" />
                <span style={{ fontSize: '0.9rem', color: '#f5f5f7' }}>Biselado pulido 2.5D suave al tacto</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Check size={16} color="#30d158" />
                <span style={{ fontSize: '0.9rem', color: '#f5f5f7' }}>Sobre individual hermético contra polvo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Check size={16} color="#30d158" />
                <span style={{ fontSize: '0.9rem', color: '#f5f5f7' }}>Corte inmediato para cualquier modelo</span>
              </div>
            </div>

            <div>
              <Link href="/order" className="btn-apple-primary">
                <span>Configurar Pedido</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
