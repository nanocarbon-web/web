'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Smartphone, 
  Tablet, 
  Car, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { fetchLiveDatabase } from '@/lib/catalogDatabase';

interface DeviceItem {
  brand: string;
  category: 'Celular' | 'Tablet' | 'Automotriz';
  model: string;
}

const DOCX_MODELS: DeviceItem[] = [
  // iPhone
  { brand: 'Apple', category: 'Celular', model: 'iPhone 15 Pro Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 15 Pro' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 15 / 15 Plus' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 14 / 14 Pro / 14 Pro Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 13 / 13 Pro / 13 Pro Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 12 / 12 Pro / 12 Pro Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 11 Pro Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 11 Pro' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 11' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone Xs Max' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone XR' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone Xs' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 7 / 8 Plus' },
  { brand: 'Apple', category: 'Celular', model: 'iPhone 5 / 6 / 7 / 8G' },

  // Samsung
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy S24 / S24 Ultra' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy S23 / S23 Ultra' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A80' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A71' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A70' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A60' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A51' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A50S' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A20 / A30S' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A10S' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy A10' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy J8' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy J7 / J7 Prime' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy J6 Plus' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy J5 Pro' },
  { brand: 'Samsung', category: 'Celular', model: 'Galaxy J4 Plus' },

  // Xiaomi
  { brand: 'Xiaomi', category: 'Celular', model: 'Redmi Note 9S' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Redmi Note 8 Pro' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Redmi Note 8 / Note 8T' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Redmi Note 7' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Redmi 8A' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Mi 9T / 9T Pro' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Mi 9 Lite' },
  { brand: 'Xiaomi', category: 'Celular', model: 'Mi 8 Lite' },

  // Motorola
  { brand: 'Motorola', category: 'Celular', model: 'Moto G8 Power' },
  { brand: 'Motorola', category: 'Celular', model: 'Moto G8 Plus' },
  { brand: 'Motorola', category: 'Celular', model: 'Moto G8 Play' },
  { brand: 'Motorola', category: 'Celular', model: 'Moto G7 Power' },
  { brand: 'Motorola', category: 'Celular', model: 'Moto G7 Plus' },
  { brand: 'Motorola', category: 'Celular', model: 'Moto G6 Play' },

  // Huawei
  { brand: 'Huawei', category: 'Celular', model: 'P40 Lite' },
  { brand: 'Huawei', category: 'Celular', model: 'P30 / P30 Lite' },
  { brand: 'Huawei', category: 'Celular', model: 'P20 Lite' },
  { brand: 'Huawei', category: 'Celular', model: 'Mate 30 LTE / Pro' },
  { brand: 'Huawei', category: 'Celular', model: 'Mate 20 Lite' },
  { brand: 'Huawei', category: 'Celular', model: 'Mate 10 Pro / Mate 10 Lite' },
  { brand: 'Huawei', category: 'Celular', model: 'PSmart 2019' },
  { brand: 'Huawei', category: 'Celular', model: 'Y9 Prime 2019' },
  { brand: 'Huawei', category: 'Celular', model: 'Y7 2019 / Y7 Prime' },
  { brand: 'Huawei', category: 'Celular', model: 'Y6 Prime' },
  { brand: 'Huawei', category: 'Celular', model: 'Y5 2019' },

  // Honor
  { brand: 'Honor', category: 'Celular', model: 'Honor 8A' },
  { brand: 'Honor', category: 'Celular', model: 'Honor 9X / Magic' },

  // Tablets
  { brand: 'Apple', category: 'Tablet', model: 'iPad 7 / 8 / 9 / 10 Gen' },
  { brand: 'Apple', category: 'Tablet', model: 'iPad Air / iPad Air 2' },
  { brand: 'Apple', category: 'Tablet', model: 'iPad mini 1 / 2 / 3 / 4 / 5' },
  { brand: 'Apple', category: 'Tablet', model: 'iPad 2 / 3 / 4' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab S5e (10.5" 4G)' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab A 10.1' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab A 8.0 (2017 & 2019)' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab Active 2' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab E (9.6)' },
  { brand: 'Samsung', category: 'Tablet', model: 'Galaxy Tab 3' },
  { brand: 'Lenovo', category: 'Tablet', model: 'Lenovo Tab A10 / Tab A10 Plus' },
  { brand: 'Lenovo', category: 'Tablet', model: 'Lenovo Tab E10 / Tab E7' },

  // Automotriz
  { brand: 'Automotriz', category: 'Automotriz', model: 'Pantalla Central & Clúster Vehicular' },
  { brand: 'Automotriz', category: 'Automotriz', model: 'Infoentretenimiento Universal 7" / 9" / 10"' },
];

export default function ModelCatalog() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [allModels, setAllModels] = useState<DeviceItem[]>(DOCX_MODELS);

  // Sync with live Google Sheets catalog
  useEffect(() => {
    fetchLiveDatabase()
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          const apiDevices: DeviceItem[] = [];
          data.forEach(cat => {
            const catType = cat.tipo?.toLowerCase().includes('tablet') 
              ? 'Tablet' 
              : cat.tipo?.toLowerCase().includes('auto') 
                ? 'Automotriz' 
                : 'Celular';
            if (Array.isArray(cat.marcas)) {
              cat.marcas.forEach((m: any) => {
                if (Array.isArray(m.modelos)) {
                  m.modelos.forEach((mod: string) => {
                    const cleanModel = mod.replace(/\.[a-zA-Z0-9]+$/, '').trim();
                    if (cleanModel) {
                      apiDevices.push({
                        brand: m.nombre,
                        category: catType,
                        model: cleanModel,
                      });
                    }
                  });
                }
              });
            }
          });

          if (apiDevices.length > 0) {
            const map = new Map<string, DeviceItem>();
            DOCX_MODELS.forEach(d => map.set(`${d.brand}-${d.model}`.toLowerCase(), d));
            apiDevices.forEach(d => {
              const key = `${d.brand}-${d.model}`.toLowerCase();
              if (!map.has(key)) {
                map.set(key, d);
              }
            });
            setAllModels(Array.from(map.values()));
          }
        }
      })
      .catch(() => {});
  }, []);

  const brands = useMemo(() => {
    return ['Todos', 'Apple', 'Samsung', 'Xiaomi', 'Motorola', 'Huawei', 'Honor', 'Lenovo', 'Automotriz'];
  }, []);

  const filteredModels = useMemo(() => {
    return allModels.filter(item => {
      const matchBrand = selectedBrand === 'Todos' || item.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchSearch = searchQuery.trim() === '' || 
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchSearch;
    });
  }, [allModels, selectedBrand, searchQuery]);

  const handleSelectModel = (item: DeviceItem) => {
    const prefill = {
      id: Date.now().toString(),
      tipo: item.category,
      marca: item.brand,
      modelo: item.model,
      cantidad: 1,
      material: 'Clear'
    };

    const cart = JSON.parse(localStorage.getItem('nanocarbon_order') || '[]');
    cart.push(prefill);
    localStorage.setItem('nanocarbon_order', JSON.stringify(cart));
    
    router.push('/cart');
  };

  return (
    <section
      id="modelos"
      style={{
        position: 'relative',
        padding: '7rem 2rem',
        backgroundColor: '#070709',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="apple-badge" style={{ marginBottom: '1.25rem' }}>
            <span>COMPATIBILIDAD & CORTE LÁSER CNC</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: '#ffffff',
            }}
          >
            Disponibilidad de Modelos
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#86868b', lineHeight: 1.6 }}>
            Patrones calibrados para más de 100 referencias de smartphones, tablets y pantallas de infoentretenimiento.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
          {/* Search Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#141418',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              padding: '0.85rem 1.5rem',
              gap: '0.85rem',
              marginBottom: '1.25rem',
            }}
          >
            <Search size={18} color="#86868b" />
            <input
              type="text"
              placeholder="Buscar por marca o modelo (ej. iPhone 15, Redmi Note 8, Galaxy S24, iPad 7...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '0.95rem',
                width: '100%',
                fontFamily: 'inherit',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ color: '#86868b', fontSize: '0.8rem', fontWeight: 600 }}
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {brands.map(brand => {
              const isSelected = selectedBrand.toLowerCase() === brand.toLowerCase();
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    background: isSelected ? '#f5f5f7' : 'rgba(255, 255, 255, 0.05)',
                    color: isSelected ? '#000000' : '#a1a1a6',
                    border: `1px solid ${isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'}`,
                  }}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            fontSize: '0.85rem',
            color: '#86868b',
          }}
        >
          <span><strong>{filteredModels.length}</strong> referencias disponibles</span>
          <span>Corte milimétrico inmediato</span>
        </div>

        {/* Clean Model Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
            maxHeight: '580px',
            overflowY: 'auto',
            paddingRight: '0.5rem',
          }}
        >
          {filteredModels.map((item, index) => (
            <div
              key={`${item.brand}-${item.model}-${index}`}
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#86868b', textTransform: 'uppercase' }}>
                    {item.brand}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#30d158', fontWeight: 600 }}>
                    Disponible
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {item.model}
                </h4>

                <div style={{ fontSize: '0.78rem', color: '#6e6e73', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {item.category === 'Tablet' ? <Tablet size={14} /> : item.category === 'Automotriz' ? <Car size={14} /> : <Smartphone size={14} />}
                  <span>{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => handleSelectModel(item)}
                style={{
                  marginTop: '1.25rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <span>Solicitar este modelo</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
