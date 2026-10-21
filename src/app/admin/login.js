'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // پسورد تستی (بعداً می‌تونیم عوضش کنیم)
    if (password === 'mehr123') {
      window.location.href = '/admin';
    } else {
      setError('رمز عبور اشتباه است.');
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'rtl' }}>
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ color: '#1B7A6A', marginBottom: '1.5rem' }}>ورود به پنل مدیریت</h1>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="رمز عبور" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', marginBottom: '1rem', boxSizing: 'border-box' }}
          />
          {error && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</p>}
          <button type="submit" style={{ width: '100%', backgroundColor: '#1B7A6A', color: 'white', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>ورود</button>
        </form>
        <Link href="/" style={{ display: 'block', marginTop: '1.5rem', color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>بازگشت به سایت</Link>
      </div>
    </main>
  );
}