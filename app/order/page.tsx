'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchLiveDatabase } from '@/lib/catalogDatabase';
import { AUTOMOTIVE_DATABASE } from '@/lib/automotiveDatabase';
import styles from './page.module.css';

interface Marca {
  nombre: string;
  modelos: string[];
}

interface Categoria {
  tipo: string;
  marcas: Marca[];
}

// Built-in verified database from "Propiedades NanoCarbón.docx" so the list is NEVER empty
const DEFAULT_DATABASE: Categoria[] = [
  {
    tipo: 'Celular',
    marcas: [
      {
        nombre: 'Apple',
        modelos: [
          'iPhone 15 Pro Max',
          'iPhone 15 Pro',
          'iPhone 15 Plus',
          'iPhone 15',
          'iPhone 14 Pro Max',
          'iPhone 14 Pro',
          'iPhone 14 Plus',
          'iPhone 14',
          'iPhone 13 Pro Max',
          'iPhone 13 Pro',
          'iPhone 13',
          'iPhone 12 Pro Max',
          'iPhone 12 Pro',
          'iPhone 12',
          'iPhone 11 Pro Max',
          'iPhone 11 Pro',
          'iPhone 11',
          'iPhone Xs Max',
          'iPhone XR',
          'iPhone Xs',
          'iPhone 7 / 8 Plus',
          'iPhone 5 / 6 / 7 / 8G',
        ]
      },
      {
        nombre: 'Samsung',
        modelos: [
          'Galaxy S24 Ultra',
          'Galaxy S24 Plus',
          'Galaxy S24',
          'Galaxy S23 Ultra',
          'Galaxy S23',
          'Galaxy A80',
          'Galaxy A71',
          'Galaxy A70',
          'Galaxy A60',
          'Galaxy A51',
          'Galaxy A50S',
          'Galaxy A20 / A30S',
          'Galaxy A10S',
          'Galaxy A10',
          'Galaxy J8',
          'Galaxy J7 / J7 Prime',
          'Galaxy J6 Plus',
          'Galaxy J5 Pro',
          'Galaxy J4 Plus',
        ]
      },
      {
        nombre: 'Xiaomi',
        modelos: [
          'Redmi Note 9S',
          'Redmi Note 8 Pro',
          'Redmi Note 8 / 8T',
          'Redmi Note 7',
          'Redmi 8A',
          'Mi 9T / 9T Pro',
          'Mi 9 Lite',
          'Mi 8 Lite',
        ]
      },
      {
        nombre: 'Motorola',
        modelos: [
          'Moto G8 Power',
          'Moto G8 Plus',
          'Moto G8 Play',
          'Moto G7 Power',
          'Moto G7 Plus',
          'Moto G6 Play',
          'Motorola Edge Series',
        ]
      },
      {
        nombre: 'Huawei',
        modelos: [
          'P40 Lite',
          'P30 Pro / P30 / P30 Lite',
          'P20 Lite',
          'Mate 30 Pro / LTE',
          'Mate 20 Lite',
          'Mate 10 Pro / Lite',
          'PSmart 2019',
          'Y9 Prime 2019',
          'Y7 Prime / Y7 2019',
          'Y6 Prime',
          'Y5 2019',
        ]
      },
      {
        nombre: 'Honor',
        modelos: [
          'Honor 8A',
          'Honor 9X',
          'Honor Magic Series',
        ]
      },
    ]
  },
  {
    tipo: 'Tablet',
    marcas: [
      {
        nombre: 'Apple iPad',
        modelos: [
          'iPad 7 / 8 / 9 / 10 Gen',
          'iPad Air / iPad Air 2',
          'iPad mini 1 / 2 / 3 / 4 / 5',
          'iPad 2 / 3 / 4',
        ]
      },
      {
        nombre: 'Samsung Galaxy Tab',
        modelos: [
          'Galaxy Tab S5e (10.5" 4G)',
          'Galaxy Tab A 10.1',
          'Galaxy Tab A 8.0 (2017 / 2019)',
          'Galaxy Tab Active 2',
          'Galaxy Tab E (9.6)',
          'Galaxy Tab 3',
        ]
      },
      {
        nombre: 'Lenovo',
        modelos: [
          'Lenovo Tab A10 / A10 Plus',
          'Lenovo Tab E10 / E7',
        ]
      }
    ]
  },
  {
    tipo: 'Automotriz',
    marcas: AUTOMOTIVE_DATABASE
  }
];

export default function OrderPage() {
  const router = useRouter();
  const [db, setDb] = useState<Categoria[]>(DEFAULT_DATABASE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Default to Celular so list is immediately visible
  const [tipoSeleccionado, setTipo] = useState('Celular');
  const [cantidad, setCantidad] = useState(1);
  const [material, setMaterial] = useState('Clear (Transparente)');

  const [marcaSeleccionada, setMarca] = useState('Apple');
  const [modeloSeleccionado, setModelo] = useState('');

  // Manual custom option
  const [isCustom, setIsCustom] = useState(false);
  const [customMarca, setCustomMarca] = useState('');
  const [customModelo, setCustomModelo] = useState('');

  // Automotive specific fields
  const [autoMarca, setAutoMarca] = useState('');
  const [autoModelo, setAutoModelo] = useState('');
  const [autoAno, setAutoAno] = useState('');
  const [autoVersion, setAutoVersion] = useState('');
  const [autoTipoPantalla, setAutoTipoPantalla] = useState('Pantalla Central / Infoentretenimiento');

  // Quick search
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    // Attempt live sync from Google Sheet
    fetchLiveDatabase()
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          const merged = [...data];
          DEFAULT_DATABASE.forEach(defCat => {
            const existing = merged.find(c => c.tipo.toLowerCase() === defCat.tipo.toLowerCase());
            if (!existing) {
              merged.push(defCat);
            } else if (defCat.tipo.toLowerCase() === 'automotriz') {
              existing.marcas = defCat.marcas;
            }
          });
          setDb(merged);
        }
      })
      .catch(() => {
        // Fallback uses DEFAULT_DATABASE seamlessly
      });
  }, []);

  const currentCategoria = tipoSeleccionado.toLowerCase() === 'automotriz'
    ? { tipo: 'Automotriz', marcas: AUTOMOTIVE_DATABASE }
    : (db.find(c => c.tipo.toLowerCase() === tipoSeleccionado.toLowerCase()) || db[0]);
  const marcasDisponibles = currentCategoria ? currentCategoria.marcas : [];
  const currentMarca = marcasDisponibles.find(m => m.nombre.toLowerCase() === marcaSeleccionada.toLowerCase()) || marcasDisponibles[0];
  const modelosDisponibles = currentMarca ? currentMarca.modelos : [];

  const filteredModelos = useMemo(() => {
    if (!searchFilter.trim()) return modelosDisponibles;
    return modelosDisponibles.filter(m => m.toLowerCase().includes(searchFilter.toLowerCase()));
  }, [modelosDisponibles, searchFilter]);

  const handleAgregar = () => {
    if (tipoSeleccionado === 'Automotriz') {
      if (!autoMarca.trim() || !autoModelo.trim()) {
        setError('Por favor indica la marca y el modelo de tu vehículo.');
        return;
      }

      const displayModelo = `${autoModelo.trim()}${autoAno.trim() ? ` (${autoAno.trim()})` : ''} - ${autoTipoPantalla}${autoVersion.trim() ? ` [${autoVersion.trim()}]` : ''}`;

      const nuevoProducto = {
        id: Date.now().toString(),
        tipo: 'Automotriz',
        marca: autoMarca.trim(),
        modelo: displayModelo,
        autoData: {
          marca: autoMarca.trim(),
          modelo: autoModelo.trim(),
          ano: autoAno.trim(),
          version: autoVersion.trim(),
          tipoPantalla: autoTipoPantalla
        },
        cantidad: cantidad,
        material: material
      };

      const cart = JSON.parse(localStorage.getItem('nanocarbon_order') || '[]');
      cart.push(nuevoProducto);
      localStorage.setItem('nanocarbon_order', JSON.stringify(cart));
      router.push('/cart');
      return;
    }

    const finalMarca = isCustom ? customMarca.trim() : (marcaSeleccionada || currentMarca?.nombre);
    const finalModelo = isCustom ? customModelo.trim() : (modeloSeleccionado || filteredModelos[0]);

    if (!tipoSeleccionado || !finalMarca || !finalModelo) {
      setError('Por favor selecciona o especifica la marca y modelo.');
      return;
    }

    const nuevoProducto = {
      id: Date.now().toString(),
      tipo: tipoSeleccionado,
      marca: finalMarca,
      modelo: finalModelo,
      cantidad: cantidad,
      material: material
    };

    const cart = JSON.parse(localStorage.getItem('nanocarbon_order') || '[]');
    cart.push(nuevoProducto);
    localStorage.setItem('nanocarbon_order', JSON.stringify(cart));
    
    router.push('/cart');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', padding: '2rem 1.5rem', color: '#f5f5f7' }}>
      <div className={styles.orderContainer}>
        {/* Back Link */}
        <Link
          href="/"
          style={{
            color: '#a1a1a6',
            fontSize: '0.85rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '1.75rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          ← Volver al Catálogo NanoCarbón
        </Link>

        {/* Brand Header with 2026 Logo */}
        <div className={styles.header}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              overflow: 'hidden',
              margin: '0 auto 1rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              background: '#090e1a',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-2026.jpg"
              alt="NanoCarbón 2026"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 className={styles.title}>Configurar Pedido</h2>
          <div className={styles.subtitle}>Corte láser de precisión bajo demanda · Dureza 9H</div>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        {/* Segmented Device Type Selector - Clear & 100% Visible */}
        <div className={styles.formGroup}>
          <label>1. Tipo de Dispositivo</label>
          <div className={styles.typeSelector}>
            {['Celular', 'Tablet', 'Automotriz'].map((tipo) => {
              const active = tipoSeleccionado.toLowerCase() === tipo.toLowerCase();
              return (
                <button
                  key={tipo}
                  type="button"
                  className={`${styles.typeBtn} ${active ? styles.typeBtnActive : ''}`}
                  onClick={() => {
                    setTipo(tipo);
                    if (tipo === 'Automotriz') {
                      setAutoMarca('Mercedes-Benz');
                      const mb = AUTOMOTIVE_DATABASE.find(b => b.nombre === 'Mercedes-Benz');
                      setAutoModelo(mb?.modelos[0] || '');
                    } else {
                      const cat = db.find(c => c.tipo.toLowerCase() === tipo.toLowerCase());
                      if (cat && cat.marcas.length > 0) {
                        setMarca(cat.marcas[0].nombre);
                        setModelo(cat.marcas[0].modelos[0] || '');
                      }
                    }
                    setError('');
                  }}
                >
                  {tipo === 'Celular' ? '📱 Celular' : tipo === 'Tablet' ? '📟 Tablet' : '🚗 Automotriz'}
                </button>
              );
            })}
          </div>
        </div>

        {tipoSeleccionado === 'Automotriz' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1a6' }}>
                🚗 Selecciona la marca y modelo de tu vehículo para cortar el protector a la medida exacta de tu pantalla o clúster.
              </p>
            </div>

            {/* Marca del Vehículo */}
            <div className={styles.formGroup}>
              <label>2. Marca del Vehículo</label>
              <select
                className={styles.select}
                value={autoMarca || 'Mercedes-Benz'}
                onChange={(e) => {
                  const nuevaMarca = e.target.value;
                  setAutoMarca(nuevaMarca);
                  const found = AUTOMOTIVE_DATABASE.find(b => b.nombre === nuevaMarca);
                  setAutoModelo(found ? found.modelos[0] : '');
                  setError('');
                }}
              >
                {AUTOMOTIVE_DATABASE.map((b, i) => (
                  <option key={i} value={b.nombre} style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                    {b.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Modelo o Línea del Vehículo */}
            <div className={styles.formGroup}>
              <label>3. Modelo o Línea del Vehículo</label>
              <select
                className={styles.select}
                value={autoModelo}
                onChange={(e) => {
                  setAutoModelo(e.target.value);
                  setError('');
                }}
              >
                {(AUTOMOTIVE_DATABASE.find(b => b.nombre === (autoMarca || 'Mercedes-Benz'))?.modelos || []).map((mod, i) => (
                  <option key={i} value={mod} style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                    {mod}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className={styles.input}
                style={{ marginTop: '0.6rem' }}
                placeholder="O escribe aquí si es otra versión o modelo..."
                value={autoModelo}
                onChange={(e) => {
                  setAutoModelo(e.target.value);
                  setError('');
                }}
              />
            </div>

            {/* Grid de Año de Fabricación y Versión */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              <div className={styles.formGroup}>
                <label>4. Año de Fabricación</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Ej. 2024, 2023, 2022..."
                  value={autoAno}
                  onChange={(e) => setAutoAno(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>5. Versión o Edición</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Ej. Touring, High Country, GT..."
                  value={autoVersion}
                  onChange={(e) => setAutoVersion(e.target.value)}
                />
              </div>
            </div>

            {/* Tipo de Pantalla a Proteger */}
            <div className={styles.formGroup}>
              <label>6. Pantalla a Proteger</label>
              <select
                className={styles.select}
                value={autoTipoPantalla}
                onChange={(e) => setAutoTipoPantalla(e.target.value)}
              >
                <option value="Pantalla Central / Infoentretenimiento" style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                  Pantalla Central / Infoentretenimiento
                </option>
                <option value="Clúster Digital (Tacómetro / Tablero)" style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                  Clúster Digital (Tacómetro / Tablero)
                </option>
                <option value="Kit Completo (Pantalla Central + Clúster)" style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                  Kit Completo (Pantalla Central + Clúster)
                </option>
                <option value="Pantalla Trasera / Pasajeros" style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                  Pantalla Trasera / Pasajeros
                </option>
              </select>
            </div>
          </div>
        ) : (
          <>
            {/* Switcher Manual vs Lista */}
            <div style={{ marginBottom: '1.5rem', textAlign: 'right' }}>
              <button 
                type="button"
                onClick={() => {
                  setIsCustom(!isCustom);
                  setError('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2997ff',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                {isCustom ? "Seleccionar desde la lista" : "¿No encuentras tu modelo? Escríbelo manualmente"}
              </button>
            </div>

            {isCustom ? (
              <>
                <div className={styles.formGroup}>
                  <label>Marca (Manual)</label>
                  <input 
                    type="text" 
                    className={styles.input} 
                    placeholder="Ej. Samsung, Apple, Xiaomi..."
                    value={customMarca} 
                    onChange={(e) => setCustomMarca(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Modelo exacto (Manual)</label>
                  <input 
                    type="text" 
                    className={styles.input} 
                    placeholder="Ej. Galaxy A54 5G, iPad Air 5..."
                    value={customModelo} 
                    onChange={(e) => setCustomModelo(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Brand Dropdown - 100% Visible with High Contrast */}
                <div className={styles.formGroup}>
                  <label>2. Marca</label>
                  <select 
                    className={styles.select} 
                    value={marcaSeleccionada} 
                    onChange={(e) => {
                      setMarca(e.target.value);
                      setModelo('');
                      setError('');
                    }}
                  >
                    {marcasDisponibles.map((m, i) => (
                      <option key={i} value={m.nombre} style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                        {m.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model Dropdown - 100% Visible with High Contrast */}
                <div className={styles.formGroup}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ margin: 0 }}>3. Modelo Exacto</label>
                    <span style={{ fontSize: '0.78rem', color: '#86868b' }}>
                      {filteredModelos.length} opciones disponibles
                    </span>
                  </div>

                  {/* Quick filter input for models */}
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Escribe para filtrar tu modelo (ej. S23, iPhone 11, Note 8...)"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    style={{ marginBottom: '0.6rem', padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                  />

                  <select 
                    className={styles.select} 
                    value={modeloSeleccionado || filteredModelos[0] || ''} 
                    onChange={(e) => {
                      setModelo(e.target.value);
                      setError('');
                    }}
                  >
                    {filteredModelos.map((mod, i) => (
                      <option key={i} value={mod} style={{ backgroundColor: '#141418', color: '#ffffff' }}>
                        {mod}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </>
        )}

        {/* Material Selection */}
        <div className={styles.formGroup}>
          <label>{tipoSeleccionado === 'Automotriz' ? '7. Acabado del Protector' : '4. Acabado del Protector'}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="material" 
                value="Clear (Transparente)" 
                checked={material === 'Clear (Transparente)'}
                onChange={(e) => setMaterial(e.target.value)}
                style={{ accentColor: '#ffffff' }}
              />
              <span>Clear (Brillante HD)</span>
            </label>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="material" 
                value="Mate (Antirreflejo)" 
                checked={material === 'Mate (Antirreflejo)'}
                onChange={(e) => setMaterial(e.target.value)}
                style={{ accentColor: '#ffffff' }}
              />
              <span>Mate (Antirreflejo)</span>
            </label>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="material" 
                value="AntiEspía (Privacidad)" 
                checked={material === 'AntiEspía (Privacidad)'}
                onChange={(e) => setMaterial(e.target.value)}
                style={{ accentColor: '#ffffff' }}
              />
              <span>AntiEspía (Privacidad)</span>
            </label>
          </div>
        </div>

        {/* Quantity */}
        <div className={styles.formGroup}>
          <label>{tipoSeleccionado === 'Automotriz' ? '8. Cantidad' : '5. Cantidad'}</label>
          <input 
            type="number" 
            min="1" 
            className={styles.input}
            value={cantidad}
            onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button 
            type="button" 
            className="btn-apple-secondary"
            onClick={() => router.push('/')}
          >
            Cancelar
          </button>
          <button 
            type="button" 
            className="btn-apple-primary"
            onClick={handleAgregar}
          >
            Agregar al Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
