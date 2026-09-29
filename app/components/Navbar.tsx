'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      try {
        const savedOrder = localStorage.getItem('nanocarbon_order');
        if (savedOrder) {
          const parsed = JSON.parse(savedOrder);
          if (Array.isArray(parsed)) {
            const count = parsed.reduce((acc, item) => acc + (item.cantidad || 1), 0);
            setCartCount(count);
          }
        } else {
          setCartCount(0);
        }
      } catch (e) {}
    };

    checkCart();
    const interval = setInterval(checkCart, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '48px',
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1024px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#090e1a',
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-2026.jpg"
              alt="NanoCarbón"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span
            style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: '#f5f5f7',
            }}
          >
            NanoCarbón
          </span>
        </Link>

        {/* Apple Desktop Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          <a href="#tecnologia" className="nav-link">Tecnología</a>
          <a href="#videos" className="nav-link">Videos de Prueba</a>
          <a href="#resistencia" className="nav-link">Resistencia</a>
          <a href="#propiedades" className="nav-link">Propiedades</a>
          <a href="#modelos" className="nav-link">Modelos</a>
          <a href="#empaque" className="nav-link">Empaque</a>
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/cart"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a1a1a6',
              transition: 'color 0.2s ease',
            }}
            title="Bolsa de pedidos"
          >
            <ShoppingBag size={17} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/order"
            style={{
              padding: '0.35rem 0.95rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              backgroundColor: '#0071e3',
              color: '#ffffff',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            Pedir
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              color: '#f5f5f7',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '48px',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.96)',
            backdropFilter: 'blur(30px)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <a href="#tecnologia" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600 }}>Tecnología</a>
          <a href="#resistencia" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600 }}>Resistencia</a>
          <a href="#propiedades" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600 }}>Propiedades</a>
          <a href="#modelos" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600 }}>Modelos</a>
          <a href="#empaque" onClick={() => setMobileMenuOpen(false)} style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600 }}>Empaque</a>
          <Link
            href="/order"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              padding: '0.75rem',
              textAlign: 'center',
              backgroundColor: '#0071e3',
              color: '#ffffff',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              marginTop: '0.5rem',
            }}
          >
            Configurar Pedido
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          font-size: 0.78rem;
          color: #a1a1a6;
          font-weight: 400;
          letter-spacing: -0.01em;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
