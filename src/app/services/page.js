import Link from 'next/link';

export default function Services() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      
      {/* هدر */}
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
          <img src="/logo.jpg" alt="لوگو" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', padding: '3px', objectFit: 'cover' }} />
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

      {/* بخش خدمات */}
      <section style={{ padding: '3rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1rem' }}>خدمات ما</h2>
          <p style={{ color: '#4b5563' }}>با بهترین کیفیت و ضمانت، در خدمت شما هستیم.</p>
        </div>

        {/* گرید ۲ تایی */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
            <h3>تعمیر تخصصی موبایل</h3>
            <p>تعمیر انواع گوشی‌های سامسونگ، اپل و شیائومی. تعویض LCD، باتری، و رفع مشکلات نرم‌افزاری.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
            <h3>تعمیر لپ‌تاپ و کامپیوتر</h3>
            <p>تعمیر مادربرد، نصب ویندوز و نرم‌افزار، ارتقای سخت‌افزار و رفع مشکلات حرارتی.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💾</div>
            <h3>تعویض هارد و رم</h3>
            <p>تعویض و ارتقای هارد (SSD/HDD) و رم کامپیوتر و لپ‌تاپ با گارانتی و ضمانت تعویض.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
            <h3>خدمات گارانتی</h3>
            <p>استعلام، تمدید و ثبت گارانتی دستگاه‌های شما. پیگیری آسان و سریع از طریق همین سایت.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
            <h3>شخصی‌سازی (کاستوم)</h3>
            <p>سفارشی‌سازی سخت‌افزار و ظاهر دستگاه‌ها بر اساس سلیقه و نیاز شما.</p>
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