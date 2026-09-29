'use client';

import React, { useState, useRef } from 'react';
import { Play, Car, Activity } from 'lucide-react';

interface VideoItem {
  id: number;
  src: string;
  poster: string;
  badge: string;
  title: string;
  description: string;
  aspect: '16/9' | '9/16';
}

const VIDEO_CATEGORIES: { [key: string]: { label: string; icon: any; videos: VideoItem[] } } = {
  carros: {
    label: 'Instalación en Vehículos',
    icon: Car,
    videos: [
      {
        id: 1,
        src: '/videos/carro-1.mp4',
        poster: '/videos/carro-1-poster.jpg',
        badge: 'PREPARACIÓN Y AJUSTE',
        title: 'Limpieza y Adhesión Óptica Panorámica',
        description: 'Proceso de descontaminación de pantalla y acople de la lámina de polímero en carbón sin alterar la sensibilidad táctil ni visibilidad.',
        aspect: '16/9',
      },
      {
        id: 2,
        src: '/videos/carro-2.mp4',
        poster: '/videos/carro-2-poster.jpg',
        badge: 'CLÚSTER DIGITAL',
        title: 'Montaje en Pantalla Flotante MBUX',
        description: 'Fijación de alta precisión en pantalla panorámica de cabina. Protección contra rayos solares, rayaduras y huellas dactilares.',
        aspect: '16/9',
      },
      {
        id: 3,
        src: '/videos/carro-3.mp4',
        poster: '/videos/carro-3-poster.jpg',
        badge: 'CONSOLA CENTRAL',
        title: 'Instalación en Pantalla Vertical (Mercedes-Benz)',
        description: 'Corte milimétrico y retiro del liner protector en pantalla táctil de infoentretenimiento. Ajuste perfecto sin burbujas ni marcas.',
        aspect: '16/9',
      },
    ],
  },
  laboratorio: {
    label: 'Ensayos de Laboratorio',
    icon: Activity,
    videos: [
      {
        id: 4,
        src: '/videos/video-2.mp4',
        poster: '/videos/v2-mid.jpg',
        badge: 'PRUEBA EXTREMA',
        title: 'Aplastamiento de Impacto',
        description: 'Comparativa real: el vidrio templado se destruye por completo ante el peso, mientras que el NanoCarbón absorbe la presión y permanece intacto.',
        aspect: '9/16',
      },
      {
        id: 5,
        src: '/videos/video-1.mp4',
        poster: '/videos/v1-mid.jpg',
        badge: 'ESTRUCTURA',
        title: 'Polímero y Flexibilidad Multicapa',
        description: 'Demostración de la película de polímero en carbón: maleabilidad y tenacidad sin quiebres ni fisuras.',
        aspect: '9/16',
      },
      {
        id: 6,
        src: '/videos/video-3.mp4',
        poster: '/videos/v3-mid.jpg',
        badge: 'INSTALACIÓN',
        title: 'Montaje Profesional en Laboratorio',
        description: 'Proceso de adhesión electrostática sin burbujas y despegue libre de residuos.',
        aspect: '9/16',
      },
    ],
  },
};

export default function VideoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<'carros' | 'laboratorio'>('carros');
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentCategory = VIDEO_CATEGORIES[selectedCategory];
  const currentVideo = currentCategory.videos[activeVideo] || currentCategory.videos[0];

  const handleSelectCategory = (catKey: 'carros' | 'laboratorio') => {
    setSelectedCategory(catKey);
    setActiveVideo(0);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

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
        {/* Apple Segmented Control */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              gap: '4px',
            }}
          >
            {(Object.keys(VIDEO_CATEGORIES) as ('carros' | 'laboratorio')[]).map((catKey) => {
              const cat = VIDEO_CATEGORIES[catKey];
              const isSelected = selectedCategory === catKey;
              const IconComp = cat.icon;
              return (
                <button
                  key={catKey}
                  onClick={() => handleSelectCategory(catKey)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#000000' : '#86868b',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 15px rgba(0, 0, 0, 0.3)' : 'none',
                  }}
                >
                  <IconComp size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#30d158', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
            {selectedCategory === 'carros' ? 'Evidencia Real en Cabina' : 'Evidencia en Laboratorio'}
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
            {selectedCategory === 'carros' ? 'Instalación en Carros.' : 'Pruebas de Resistencia.'}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#86868b', lineHeight: 1.5 }}>
            {selectedCategory === 'carros'
              ? 'Montaje profesional en pantallas táctiles verticales, flotantes y clúster digital sin burbujas ni reflejos.'
              : 'Ensayos de resistencia mecánica, maleabilidad multicapa y adhesión electrostática sin residuos.'}
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
              aspectRatio: currentVideo.aspect,
              maxHeight: currentVideo.aspect === '16/9' ? '460px' : '520px',
              width: '100%',
              margin: '0 auto',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
              transition: 'aspect-ratio 0.3s ease',
            }}
          >
            {/* Official NanoCarbón Video Brand Watermark Badge */}
            {selectedCategory === 'laboratorio' && (
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-2026.jpg"
                  alt="Logo NanoCarbón"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    color: '#ffffff',
                  }}
                >
                  NanoCarbón®
                </span>
              </div>
            )}

            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              poster={currentVideo.poster}
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
              Videos disponibles ({currentCategory.label}):
            </div>

            {currentCategory.videos.map((vid, idx) => {
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
