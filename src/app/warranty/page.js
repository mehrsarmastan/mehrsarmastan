'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Warranty() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!code) {
      setResult({ type: 'error', text: 'لطفاً کد رهگیری را وارد کنید.' });
      return;
    }
    
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      // دیتابیس تستی
      if (code === '12345678') {
        setResult({ type: 'success', text: '✅ دستگاه لپ‌تاپ ایسوس شما تحت گارانتی است. تاریخ انقضا: ۱۴۰۵/۰۵/۱۲' });
      } else if (code === '87654321') {
        setResult({ type: 'warning', text: '⚠️ گارانتی دستگاه گوشی سامسونگ شما در تاریخ ۱۴۰۳/۱۱/۰۲ به پایان رسیده است.' });
      } else {
        setResult({ type: 'error', text: '❌ دستگاه با این کد رهگیری در سیستم گارانتی مهر سرمستان یافت نشد.' });
      }
    }, 1000);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
          <img src="/logo.jpg" alt="لوگو" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '3px' }} />
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ margin: 0, fontSize: '1.1rem' }}>مهر سرمستان</h1>
            <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8 }}>شعبه اصفهان</p>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>خانه</Link>
          <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>خدمات</Link>
          <Link href="/warranty" style={{ color: 'white', textDecoration: 'none' }}>گارانتی</Link>
            <Link href="/branches" style={{ color: 'white', textDecoration: 'none' }}>شعبات</Link>
            <Link href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>نمونه کارها</Link>
            <Link href="/testimonials" style={{ color: 'white', textDecoration: 'none' }}>نظرات مشتریان</Link>
            <Link href="/callback" style={{ color: 'white', textDecoration: 'none' }}>درخواست تماس</Link>
          <Link href="/faq" style={{ color: 'white', textDecoration: 'none' }}>سوالات متداول</Link>
<Link href="/feedback" style={{ color: 'white', textDecoration: 'none' }}>نظرسنجی</Link>
<Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>درباره ما</Link>
<Link href="/callback" style={{ color: 'white', textDecoration: 'none' }}>درخواست تماس</Link>
<Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>تماس</Link>
        </nav>
      </header>

      <section style={{ padding: '3rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
          <h2 style={{ fontSize: '1.8rem', color: '#1B7A6A', marginBottom: '1rem' }}>استعلام وضعیت گارانتی</h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>شماره سریال دستگاه یا کد رهگیری خود را وارد کنید.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="مثلاً: 12345678" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box', textAlign: 'center', fontSize: '1.2rem', fontFamily: 'monospace' }}
            />
            <button 
              onClick={handleSearch}
              disabled={loading}
              style={{ width: '100%', backgroundColor: loading ? '#9ca3af' : '#E8941A', color: 'white', fontWeight: 'bold', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'در حال استعلام...' : 'استعلام گارانتی'}
            </button>
          </div>

          {result && (
            <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '0.5rem', textAlign: 'right', fontWeight: 'bold',
              backgroundColor: result.type === 'error' ? '#fef2f2' : result.type === 'warning' ? '#fffbeb' : '#f0fdf4',
              color: result.type === 'error' ? '#dc2626' : result.type === 'warning' ? '#d97706' : '#16a34a'
            }}>
              {result.text}
            </div>
          )}
        </div>
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