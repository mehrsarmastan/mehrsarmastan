import Link from 'next/link';

export default function Branches() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      
      {/* هدر */}
            {/* هدر */}
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

      {/* بخش شعب */}
      <section style={{ padding: '3rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1rem' }}>شعب و نمایندگی‌ها</h2>
          <p style={{ color: '#4b5563' }}>برای دریافت خدمات، نزدیک‌ترین شعبه به خود را انتخاب کنید.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏙️</div>
            <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>تهران (مرکزی)</h3>
            <p style={{ fontSize: '0.8rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>دفتر اصلی</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>ضلع شمالی میدان ولیعصر، خیابان فخاری، پلاک ۱۶، ساختمان مهر</p>
            <a href="https://www.google.com/maps/search/تهران+میدان+ولیعصر+خیابان+فخاری" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none' }}>مشاهده روی نقشه ←</a>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🕌</div>
            <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>اصفهان</h3>
            <p style={{ fontSize: '0.8rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>شعبه اصفهان</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>خیابان طالقانی، بازار بزرگ طالقانی، طبقه دوم، واحد ۱۶۰</p>
            <a href="https://www.google.com/maps/search/اصفهان+خیابان+طالقانی+بازار+بزرگ+طالقانی" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none' }}>مشاهده روی نقشه ←</a>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌷</div>
            <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>شیراز</h3>
            <p style={{ fontSize: '0.8rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>نمایندگی رسمی</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>خیابان فلسطین، تقاطع معدل و فلسطین، ساختمان ۱۱۰، طبقه ۴، واحد ۸</p>
            <a href="https://www.google.com/maps/search/شیراز+خیابان+فلسطین+تقاطع+معدل" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none' }}>مشاهده روی نقشه ←</a>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🕋</div>
            <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>مشهد</h3>
            <p style={{ fontSize: '0.8rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>نمایندگی رسمی</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>بلوار شهید صادقی، بین صادقی ۱۷ و ۱۹، مجتمع تابان واحد ۳۳</p>
            <a href="https://www.google.com/maps/search/مشهد+بلوار+شهید+صادقی+مجتمع+تابان" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none' }}>مشاهده روی نقشه ←</a>
          </div>

        </div>
      </section>

      {/* فوتر */}
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