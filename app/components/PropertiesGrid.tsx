'use client';

import React from 'react';
import { ShieldCheck, Layers, Droplet, Smartphone, Activity, Check } from 'lucide-react';

export default function PropertiesGrid() {
  return (
    <section
      id="propiedades"
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: '#000000',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Section Headline */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
            Innovación en Materiales
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Protección de nivel industrial. <br />
            <span style={{ color: '#86868b' }}>Diseñada para el uso cotidiano.</span>
          </h2>
        </div>

        {/* Apple Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}
        >
          {/* Bento 1: Hero Large Feature (8 cols) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '1.5rem' }}>
              <Activity size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#30d158', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                Matriz de Carbono Molecular
              </div>
              <h3 style={{ fontSize: '1.85rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                Absorbe la energía del impacto. <br />No se quiebra en astillas.
              </h3>
              <p style={{ fontSize: '1rem', color: '#86868b', lineHeight: 1.5, maxWidth: '540px' }}>
                A diferencia del vidrio templado común que se quiebra al primer golpe seco, el polímero en carbón distribuye la onda de choque horizontalmente, protegiendo el display intacto.
              </p>
            </div>
          </div>

          {/* Bento 2: 9H Hardness (4 cols) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '340px',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '1.5rem' }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2997ff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                Dureza Certificada
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Estándar 9H Mohs
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#86868b', lineHeight: 1.5 }}>
                Resistencia ante llaves, monedas, cuchillas y herramientas de trabajo rudo.
              </p>
            </div>
          </div>

          {/* Bento 3: Bio-Shield (4 cols) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '1.5rem' }}>
              <Check size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Superficie Inerte
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#86868b', lineHeight: 1.5 }}>
                No aloja bacterias ni virus en bordes ni orificios de la cámara. Grado higiénico permanente.
              </p>
            </div>
          </div>

          {/* Bento 4: Oleophobic (4 cols) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '1.5rem' }}>
              <Droplet size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Capa Antihuellas
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#86868b', lineHeight: 1.5 }}>
                Repele la grasa dactilar y aceites. Limpieza impecable con una sola pasada.
              </p>
            </div>
          </div>

          {/* Bento 5: Clean adhesive (4 cols) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '1.5rem' }}>
              <Layers size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                Fijación sin Residuos
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#86868b', lineHeight: 1.5 }}>
                Adhesivo óptico que expulsa burbujas al instalar y no deja goma al ser retirado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .bento-card {
            grid-column: span 12 !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
