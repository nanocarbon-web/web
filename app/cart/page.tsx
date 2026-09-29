'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import styles from './page.module.css';

interface AutoData {
  marca?: string;
  modelo?: string;
  ano?: string;
  version?: string;
  tipoPantalla?: string;
}

interface CartItem {
  id: string;
  tipo: string;
  marca: string;
  modelo: string;
  cantidad: number;
  material: string;
  autoData?: AutoData;
}

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalProductos, setTotalProductos] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [clienteNombre, setClienteNombre] = useState('');
  const [clienteTelefono, setClienteTelefono] = useState('');
  const [clienteCiudad, setClienteCiudad] = useState('');
  const [notas, setNotas] = useState('');

  useEffect(() => {
    const savedOrder = localStorage.getItem('nanocarbon_order');
    if (savedOrder) {
      const parsed = JSON.parse(savedOrder);
      setCart(parsed);
      calcularTotal(parsed);
    }
  }, []);

  const calcularTotal = (items: CartItem[]) => {
    const t = items.reduce((acc, item) => acc + item.cantidad, 0);
    setTotalProductos(t);
  };

  const eliminarItem = (id: string) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    calcularTotal(newCart);
    localStorage.setItem('nanocarbon_order', JSON.stringify(newCart));
  };

  // Función genérica para editar cualquier campo de un item del carrito
  const editarItem = (id: string, campo: keyof CartItem, valor: string | number) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, [campo]: valor };
      }
      return item;
    });
    setCart(newCart);
    calcularTotal(newCart);
    localStorage.setItem('nanocarbon_order', JSON.stringify(newCart));
  };

  const enviarWhatsApp = async () => {
    setIsSending(true);
    try {
      // 1. Guardar automáticamente en Supabase
      try {
        await supabase.from('pedidos').insert([
          {
            cliente_nombre: clienteNombre.trim() || 'Cliente Web',
            cliente_telefono: clienteTelefono.trim() || '',
            cliente_ciudad: clienteCiudad.trim() || '',
            items: cart,
            total: totalProductos,
            notas: notas.trim() || '',
            estado: 'pendiente'
          }
        ]);
      } catch (err) {
        console.warn('Error guardando en Supabase:', err);
      }

      // 2. Preparar mensaje para WhatsApp (+57 315 851 2091)
      let text = '⚡ *NUEVO PEDIDO NANOCARBÓN®*\n\n';
      if (clienteNombre.trim()) text += `👤 *Cliente / Negocio:* ${clienteNombre.trim()}\n`;
      if (clienteCiudad.trim()) text += `📍 *Ciudad:* ${clienteCiudad.trim()}\n`;
      if (clienteTelefono.trim()) text += `📞 *Teléfono:* ${clienteTelefono.trim()}\n`;
      text += `\n📦 *Productos (${totalProductos} unidades):*\n`;
      cart.forEach((item) => {
        if (item.tipo === 'Automotriz' && item.autoData) {
          text += `• 🚗 *Vehículo:* ${item.autoData.marca || item.marca} ${item.autoData.modelo || item.modelo}\n`;
          if (item.autoData.ano) text += `   - Año: ${item.autoData.ano}\n`;
          if (item.autoData.version) text += `   - Versión: ${item.autoData.version}\n`;
          if (item.autoData.tipoPantalla) text += `   - Pantalla: ${item.autoData.tipoPantalla}\n`;
          text += `   - Cantidad: ${item.cantidad} und | Acabado: ${item.material}\n\n`;
        } else {
          text += `• ${item.tipo} | ${item.marca} ${item.modelo} | ${item.cantidad} und | Acabado ${item.material}\n`;
        }
      });
      if (notas.trim()) text += `\n📝 *Notas:* ${notas.trim()}\n`;

      const phone = '3158512091';
      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/57${phone}?text=${encodedText}`;
      
      localStorage.removeItem('nanocarbon_order');
      window.open(url, '_blank');
      setCart([]);
      setTotalProductos(0);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.emptyState}>
          <h2>Tu pedido está vacío</h2>
          <p>No tienes productos agregados aún.</p>
          <button className="btn btn-primary" onClick={() => router.push('/order')} style={{ marginTop: '2rem' }}>
            Ir a agregar productos
          </button>
          <button className="btn btn-secondary" onClick={() => router.push('/')} style={{ marginTop: '0.75rem' }}>
            Volver al Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <button className={styles.backBtn} onClick={() => router.push('/')}>
        &larr; Volver al inicio
      </button>

      <div className={styles.header}>
        <h2 className={styles.title}>Resumen del Pedido</h2>
      </div>

      <div className={styles.itemList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>

            {/* Nombre del dispositivo */}
            <div className={styles.itemDetails}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className={styles.itemName}>{item.marca} {item.modelo}</span>
                <span className={styles.itemBadge}>{item.tipo}</span>
              </div>
              {item.autoData && (
                <div style={{
                  marginTop: '0.45rem',
                  fontSize: '0.8rem',
                  color: '#a1a1a6',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {item.autoData.ano && <span>📅 <strong>Año:</strong> {item.autoData.ano}</span>}
                  {item.autoData.version && <span>🏷️ <strong>Versión:</strong> {item.autoData.version}</span>}
                  {item.autoData.tipoPantalla && <span>📺 <strong>Pantalla:</strong> {item.autoData.tipoPantalla}</span>}
                </div>
              )}
            </div>

            {/* Controles editables */}
            <div className={styles.itemControls}>

              {/* Selector de Material */}
              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>Material</label>
                <select
                  className={styles.controlSelect}
                  value={item.material}
                  onChange={(e) => editarItem(item.id, 'material', e.target.value)}
                >
                  <option value="Clear">Clear</option>
                  <option value="Mate">Mate</option>
                  {item.tipo !== 'Automotriz' && (
                    <option value="AntiEspía">AntiEspía</option>
                  )}
                </select>
              </div>

              {/* Input de Cantidad */}
              <div className={styles.controlGroup}>
                <label className={styles.controlLabel}>Cantidad</label>
                <input
                  type="number"
                  className={styles.controlInput}
                  min="1"
                  max="500"
                  value={item.cantidad}
                  onChange={(e) => editarItem(item.id, 'cantidad', parseInt(e.target.value) || 1)}
                />
              </div>

              {/* Botón Eliminar */}
              <button className={styles.deleteBtn} onClick={() => eliminarItem(item.id)}>
                ✕
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Datos del Cliente */}
      <div className={styles.clientForm}>
        <div className={styles.formTitle}>Datos de Entrega / Contacto</div>
        <div className={styles.formGrid}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Nombre o Nombre del Negocio"
            value={clienteNombre}
            onChange={(e) => setClienteNombre(e.target.value)}
          />
          <input
            type="text"
            className={styles.formInput}
            placeholder="Ciudad / Municipio"
            value={clienteCiudad}
            onChange={(e) => setClienteCiudad(e.target.value)}
          />
        </div>
        <div className={styles.formGrid}>
          <input
            type="tel"
            className={styles.formInput}
            placeholder="Teléfono / WhatsApp de contacto"
            value={clienteTelefono}
            onChange={(e) => setClienteTelefono(e.target.value)}
          />
          <input
            type="text"
            className={styles.formInput}
            placeholder="Notas u observaciones (opcional)"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.summary}>
        <span>Total unidades requeridas:</span>
        <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>{totalProductos}</span>
      </div>

      <div className={styles.actions}>
        <button className="btn btn-secondary" onClick={() => router.push('/order')}>
          + Agregar más productos
        </button>
        <button
          className={`btn ${styles.wppBtn}`}
          onClick={enviarWhatsApp}
          disabled={isSending}
        >
          {isSending ? 'Procesando...' : '📱 Enviar pedido por WhatsApp'}
        </button>
      </div>
    </div>
  );
}
