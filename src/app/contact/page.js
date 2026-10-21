import Link from 'next/link';

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

      <section style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
          <h2 style={{ fontSize: '1.8rem', color: '#1B7A6A', marginBottom: '1rem' }}>تماس با ما</h2>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>سوال یا درخواستی دارید؟ فرم زیر را پر کنید یا با ما تماس بگیرید.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'right' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>نام و نام خانوادگی</label>
              <input type="text" placeholder="نام شما" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>شماره تماس</label>
              <input type="tel" placeholder="مثلاً: ۰۹۱۲۳۴۵۶۷۸۹" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>پیام شما</label>
              <textarea rows="4" placeholder="متن پیام..." style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', boxSizing: 'border-box' }}></textarea>
            </div>
            <button type="button" style={{ width: '100%', backgroundColor: '#1B7A6A', color: 'white', fontWeight: 'bold', padding: '1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              ارسال پیام
            </button>
          </form>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb', textAlign: 'right' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#1B7A6A', marginBottom: '1rem', textAlign: 'center' }}>اطلاعات تماس ما</h3>
            <p style={{ marginBottom: '1rem' }}><strong>آدرس:</strong> اصفهان، خیابان طالقانی، بازار بزرگ طالقانی، طبقه دوم، واحد ۱۶۰</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>تلفن‌های تماس (سیستم ویپ):</strong></p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}><span>داخلی واحد پذیرش:</span> <span style={{ fontFamily: 'monospace' }} dir="ltr">021-4328 (255-256)</span></li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}><span>داخلی واحد پذیرش:</span> <span style={{ fontFamily: 'monospace' }} dir="ltr">021-4328 (253-254)</span></li>
              <li style={{ padding: '0.5rem 0', display: 'flex', justifyContent: 'space-between' }}><span>داخلی بخش فنی:</span> <span style={{ fontFamily: 'monospace' }} dir="ltr">021-4328 (257-258)</span></li>
            </ul>
          </div>
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