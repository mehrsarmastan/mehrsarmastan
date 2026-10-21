import Link from 'next/link';

export default function Portfolio() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>خانه</Link>
          <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>خدمات</Link>
          <Link href="/warranty" style={{ color: 'white', textDecoration: 'none' }}>گارانتی</Link>
          <Link href="/branches" style={{ color: 'white', textDecoration: 'none' }}>شعبات</Link>
          <Link href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>نمونه کارها</Link>
          <Link href="/faq" style={{ color: 'white', textDecoration: 'none' }}>سوالات متداول</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>درباره ما</Link>
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

      <section style={{ padding: '3rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1rem' }}>نمونه کارها</h2>
          <p style={{ color: '#4b5563' }}>برخی از خدمات انجام شده در دفتر مهر سرمستان</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #eee' }}>
            <div style={{ height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>عکس تعمیر موبایل</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>تعویض LCD گوشی سامسونگ</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>تعمیر و تعویض نمایشگر با قطعات اصلی و گارانتی.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #eee' }}>
            <div style={{ height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>عکس ارتقای لپ‌تاپ</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>ارتقای رم و هارد لپ‌تاپ</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>افزایش سرعت لپ‌تاپ با تعویض هارد به SSD و ارتقای رم.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #eee' }}>
            <div style={{ height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>عکس تعمیر کامپیوتر</div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>تعمیر مادربرد کامپیوتر</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>عیب‌یابی و تعمیر تخصصی مادربرد کامپیوترهای شخصی.</p>
            </div>
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