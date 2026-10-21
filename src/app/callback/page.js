'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Callback() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setSubmitted(true);
    } else {
      alert('لطفاً یک شماره تماس معتبر وارد کنید.');
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>خانه</Link>
          <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>خدمات</Link>
          <Link href="/warranty" style={{ color: 'white', textDecoration: 'none' }}>گارانتی</Link>
          <Link href="/track" style={{ color: 'white', textDecoration: 'none' }}>پیگیری تعمیر</Link>
          <Link href="/callback" style={{ color: 'white', textDecoration: 'none' }}>درخواست تماس</Link>
          <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>تماس</Link>
        </nav>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
          <img src="/logo.jpg" alt="لوگو" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '3px', objectFit: 'cover' }} />
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ margin: 0, fontSize: '1.1rem' }}>مهر سرمستان</h1>
            <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8 }}>شعبه اصفهان</p>
          </div>
        </Link>
      </header>

      <section style={{ padding: '3rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
        {submitted ? (
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📞</div>
            <h2 style={{ color: '#1B7A6A', marginBottom: '1rem' }}>درخواست شما ثبت شد</h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.</p>
            <Link href="/" style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>بازگشت به خانه</Link>
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
            <h2 style={{ fontSize: '1.8rem', color: '#1B7A6A', marginBottom: '1rem' }}>درخواست تماس فوری</h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>شماره تماس خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="tel" 
                placeholder="مثلاً: ۰۹۱۲۳۴۵۶۷۸۹" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'monospace' }}
              />
              <button type="submit" style={{ width: '100%', backgroundColor: '#E8941A', color: 'white', fontWeight: 'bold', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                درخواست تماس
              </button>
            </form>
          </div>
        )}
      </section>

      <footer style={{ backgroundColor: '#1B7A6A', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '3rem' }}>
        <p style={{ margin: 0, marginBottom: '1rem', opacity: 0.8 }}>© ۱۴۰۴ شرکت خدماتی و تجاری مهر سرمستان</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem' }}>
          <Link href="/admin" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>ورود به پنل مدیریت</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/tickets" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>سیستم تعمیرات</Link>
        </div>
      </footer>
    </main>
  );
}