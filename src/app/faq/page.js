'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  { q: 'شرایط گارانتی دستگاه‌ها به چه صورت است؟', a: 'گارانتی دستگاه‌ها ۱۸ ماهه است. گارانتی باتری ۶ ماه می‌باشد و آداپتور شامل گارانتی نمی‌شود (در صورت خرابی، تعویض آن به عهده مشتری است).' },
  { q: 'آیا دستگاه‌های دارای ایراد فیزیکی یا مایع ریختگی مشمول گارانتی می‌شوند؟', a: 'خیر. در صورت وجود ایراد فیزیکی یا مایع ریختگی، دستگاه خارج از گارانتی قرار می‌گیرد و هرگونه هزینه تعمیر و تعویض به عهده مشتری می‌باشد.' },
  { q: 'هزینه ارسال به شعبه‌های دیگر چگونه است؟', a: 'ارسال به شعبه تهران، در صورت ارسال توسط نمایندگی، بدون هزینه است. اما در صورت ارسال توسط مشتری، هزینه ارسال به عهده خود مشتری می‌باشد.' },
  { q: 'مدت زمان تعمیر دستگاه چقدر است؟', a: 'بسته به نوع مشکل، زمان تعمیر متفاوت است. تعمیرات نرم‌افزاری معمولاً ۱ تا ۲ روز کاری و تعمیرات سخت‌افزاری بین ۳ تا ۵ روز کاری زمان می‌برد.' },
  { q: 'آیا قطعات تعویضی گارانتی دارند؟', a: 'بله، قطعات تعویضی دارای گارانتی معتبر هستند و در صورت خرابی، تعویض می‌شوند.' },
  { q: 'آیا برای ارتقاء و شخصی‌سازی دستگاه مشاوره می‌دهید؟', a: 'بله، کارشناسان ما آماده‌ی مشاوره رایگان هستند. کافیست از طریق بخش «درخواست شخصی‌سازی» فرم مربوطه را پر کنید.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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

      <section style={{ padding: '3rem 1rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❓</div>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1rem' }}>سوالات متداول</h2>
          <p style={{ color: '#4b5563' }}>پاسخ سوالات پرتکرار مشتریان</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #eee', overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'right' }}
              >
                <span style={{ fontWeight: 'bold', color: '#1f2937' }}>{faq.q}</span>
                <span style={{ color: '#E8941A', fontSize: '1.2rem', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>▼</span>
              </button>
              {openIndex === index && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#4b5563', lineHeight: '1.7', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
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