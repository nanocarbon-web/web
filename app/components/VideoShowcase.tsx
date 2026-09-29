'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VIDEOS = [
  {
    id: 1,
    src: '/videos/video-2.mp4',
    poster: '/videos/v2-mid.jpg',
    badge: 'PRUEBA EXTREMA',
    title: 'Aplastamiento de Impacto',
    description: 'Comparativa real: el vidrio templado se destruye por completo ante el peso, mientras que el NanoCarbón absorbe la presión y permanece intacto.',
  },
  {
    id: 2,
    src: '/videos/video-1.mp4',
    poster: '/videos/v1-mid.jpg',
    badge: 'ESTRUCTURA',
    title: 'Polímero y Flexibilidad Multicapa',
    description: 'Demostración de la película de polímero en carbón: maleabilidad y tenacidad sin quiebres ni fisuras.',
  },
  {
    id: 3,
    src: '/videos/video-3.mp4',
    poster: '/videos/v3-mid.jpg',
    badge: 'INSTALACIÓN',
    title: 'Montaje Profesional en Laboratorio',
    description: 'Proceso de adhesión electrostática sin burbujas y despegue libre de residuos.',
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSelect = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="videos"
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
            Evidencia en Laboratorio
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
            Pruebas Reales en Video.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#86868b', lineHeight: 1.5 }}>
            Ensayos de resistencia mecánica, flexibilidad extrema e instalación en taller.
          </p>
        </div>

        {/* Video Player Display (Apple Clean Style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            backgroundColor: '#0c0c10',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '28px',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Main Video Viewport */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              aspectRatio: '9/16',
              maxHeight: '520px',
              margin: '0 auto',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
            }}
          >
            <video
              ref={videoRef}
              key={VIDEOS[activeVideo].src}
              src={VIDEOS[activeVideo].src}
              poster={VIDEOS[activeVideo].poster}
              playsInline
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />

            {!isPlaying && (
              <button
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.35)',
                  cursor: 'pointer',
                  border: 'none',
                }}
                aria-label="Reproducir video"
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Play size={26} style={{ marginLeft: '3px' }} />
                </div>
              </button>
            )}
          </div>

          {/* Video Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Selecciona una prueba:
            </div>

            {VIDEOS.map((vid, idx) => {
              const isActive = activeVideo === idx;
              return (
                <div
                  key={vid.id}
                  onClick={() => handleSelect(idx)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.06)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? '#30d158' : '#86868b' }}>
                      {vid.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6e6e73' }}>
                      Video 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                    {vid.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#86868b', lineHeight: 1.45 }}>
                    {vid.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
