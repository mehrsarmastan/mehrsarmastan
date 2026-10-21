'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const initialInventory = [
  { id: 1, name: 'رم لپ‌تاپ DDR4 8GB', quantity: 15, unit: 'عدد' },
  { id: 2, name: 'هارد SSD 512GB', quantity: 8, unit: 'عدد' },
  { id: 3, name: 'خمیر سیلیکون', quantity: 25, unit: 'عدد' },
  { id: 4, name: 'باتری لپ‌تاپ ایسوس', quantity: 5, unit: 'عدد' },
];

export default function Admin() {
  const [inventory, setInventory] = useState(initialInventory);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');

  useEffect(() => {
    const savedInventory = localStorage.getItem('mehrInventory');
    if (savedInventory) setInventory(JSON.parse(savedInventory));
  }, []);

  useEffect(() => {
    localStorage.setItem('mehrInventory', JSON.stringify(inventory));
  }, [inventory]);

  const updateQuantity = (id, amount) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return { ...item, quantity: newQty < 0 ? 0 : newQty };
      }
      return item;
    }));
  };

  const addNewItem = (e) => {
    e.preventDefault();
    if (!newItemName || !newItemQty) return;
    const newItem = { id: Date.now(), name: newItemName, quantity: parseInt(newItemQty), unit: 'عدد' };
    setInventory([...inventory, newItem]);
    setNewItemName('');
    setNewItemQty('');
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: '1.2rem' }}>پنل مدیریت انبار - مهر سرمستان</h1>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>بازگشت به سایت</Link>
      </header>

      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* فرم افزودن */}
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#1f2937' }}>افزودن قطعه جدید</h2>
          <form onSubmit={addNewItem} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>نام قطعه</label>
              <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="مثلاً: کابل شارژ" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
            </div>
            <div style={{ width: '120px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>تعداد</label>
              <input type="number" value={newItemQty} onChange={(e) => setNewItemQty(e.target.value)} placeholder="10" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#E8941A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>افزودن</button>
          </form>
        </div>

        {/* لیست موجودی */}
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem', fontWeight: 'bold' }}>لیست موجودی فعلی</div>
          {inventory.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1rem', color: '#1f2937' }}>{item.name}</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>موجودی: <span style={{ fontWeight: 'bold', color: '#1B7A6A' }}>{item.quantity}</span> {item.unit}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => updateQuantity(item.id, -1)} style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>کم کردن (-۱)</button>
                <button onClick={() => updateQuantity(item.id, 1)} style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>افزودن (+۱)</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}