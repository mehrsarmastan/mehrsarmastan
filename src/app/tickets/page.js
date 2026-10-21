'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Tickets() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    customerType: 'walk-in', customerName: '', phone: '', deviceType: 'laptop', serviceType: 'repair', description: '', location: 'local'
  });

  useEffect(() => {
    if (localStorage.getItem('ticketAuth') === 'true') {
      setIsAuthenticated(true);
    }
    const saved = localStorage.getItem('mehrTickets');
    if (saved) setTickets(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('mehrTickets', JSON.stringify(tickets));
    }
  }, [tickets, isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mehr123') {
      setIsAuthenticated(true);
      localStorage.setItem('ticketAuth', 'true');
    } else {
      alert('رمز عبور اشتباه است');
    }
  };

  if (!isAuthenticated) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb', direction: 'rtl' }}>
        <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', width: '300px' }}>
          <h1 style={{ color: '#1B7A6A', marginBottom: '1.5rem' }}>ورود به سیستم تعمیرات</h1>
          <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', marginBottom: '1rem', boxSizing: 'border-box' }} />
          <button type="submit" style={{ width: '100%', backgroundColor: '#1B7A6A', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>ورود</button>
        </form>
      </main>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = { id: Date.now(), date: new Date().toLocaleDateString('fa-IR'), ...formData, status: 'در انتظار بررسی' };
    setTickets([newTicket, ...tickets]);
    setFormData({ customerType: 'walk-in', customerName: '', phone: '', deviceType: 'laptop', serviceType: 'repair', description: '', location: 'local' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ticketAuth');
  };

  const inputStyle = { width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box', marginBottom: '1rem' };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: '1.2rem' }}>سیستم تعمیرات - مهر سرمستان</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>بازگشت</Link>
          <button onClick={handleLogout} style={{ backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>خروج</button>
        </div>
      </header>

      <section style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#1B7A6A', marginBottom: '1.5rem' }}>ثبت سفارش جدید</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="customerType" checked={formData.customerType === 'walk-in'} onChange={() => setFormData({...formData, customerType: 'walk-in'})} /> مشتری متفرقه
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="customerType" checked={formData.customerType === 'colleague'} onChange={() => setFormData({...formData, customerType: 'colleague'})} /> همکار / نمایندگی
              </label>
            </div>

            <input type="text" placeholder="نام مشتری" required value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} style={inputStyle} />
            <input type="tel" placeholder="شماره تماس" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <select value={formData.deviceType} onChange={(e) => setFormData({...formData, deviceType: e.target.value})} style={inputStyle}>
                <option value="laptop">لپ‌تاپ</option>
                <option value="mobile">موبایل</option>
                <option value="all-in-one">آل این وان</option>
                <option value="ram">رم / هارد</option>
              </select>
              <select value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})} style={inputStyle}>
                <option value="repair">تعمیر</option>
                <option value="upgrade">ارتقاء / شخصی‌سازی</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="location" checked={formData.location === 'local'} onChange={() => setFormData({...formData, location: 'local'})} /> داخل دفتر
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="location" checked={formData.location === 'branch'} onChange={() => setFormData({...formData, location: 'branch'})} /> ارسال به شعبه
              </label>
            </div>

            <textarea rows="3" placeholder="توضیحات مشکل..." required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={inputStyle}></textarea>

            <button type="submit" style={{ width: '100%', backgroundColor: '#E8941A', color: 'white', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>ثبت در سیستم</button>
          </form>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>دستگاه‌های موجود</h2>
          {tickets.length === 0 ? (
            <div style={{ backgroundColor: 'white', padding: '2rem', textAlign: 'center', borderRadius: '1rem', color: '#9ca3af', border: '1px dashed #d1d5db' }}>هنوز دستگاهی ثبت نشده است.</div>
          ) : (
            tickets.map(ticket => (
              <div key={ticket.id} style={{ backgroundColor: 'white', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderRight: '4px solid #1B7A6A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{ticket.customerName}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{ticket.date}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>{ticket.description}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}