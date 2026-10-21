'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🙏</div>
            <h2 style={{ color: '#1B7A6A', marginBottom: '1rem' }}>از نظر شما سپاسگزاریم!</h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>نظر شما به ما کمک می‌کند تا خدمات بهتری ارائه دهیم.</p>
            <Link href="/" style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', textDecoration: 'none' }}>بازگشت به خانه</Link>
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1B7A6A', marginBottom: '1rem' }}>میزان رضایت شما</h2>
            <p style={{ color: '#4b5563', marginBottom: '2rem' }}>لطفاً به کیفیت خدمات ما امتیاز دهید.</p>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '2.5rem', cursor: 'pointer' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} onClick={() => setRating(star)} style={{ color: star <= rating ? '#E8941A' : '#d1d5db', transition: '0.2s' }}>
                    ★
                  </span>
                ))}
              </div>
              <textarea placeholder="توضیحات (اختیاری)..." rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', marginBottom: '1rem', boxSizing: 'border-box' }}></textarea>
              <button type="submit" style={{ width: '100%', backgroundColor: '#1B7A6A', color: 'white', fontWeight: 'bold', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>ثبت نظر</button>
            </form>
          </div>
        )}
      </section>
      <footer style={{ backgroundColor: '#1B7A6A', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '3rem' }}>
        <p style={{ margin: 0, opacity: 0.8 }}>© ۱۴۰۴ شرکت خدماتی و تجاری مهر سرمستان</p>
      </footer>
    </main>
  );
}