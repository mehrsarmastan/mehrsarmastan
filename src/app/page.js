import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      {/* هدر سایت */}
      <header>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white' }}>
          <div style={{ width: '45px', height: '45px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
  <img src="/logo.jpg" alt="لوگو مهر سرمستان" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
</div>
          <div style={{ textAlign: 'right' }}>
            <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold' }}>مهر سرمستان</h1>
            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>نمایندگی رسمی اصفهان</p>
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

      {/* بخش اصلی بالای سایت */}
      <section className="text-center" style={{ padding: '4rem 1rem', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <span className="text-orange" style={{ display: 'inline-block', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
          دفتر گارانتی و خدمات پس از فروش مهر سرمستان
        </span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1B7A6A', marginBottom: '1.5rem' }}>
          مرکز خدمات و گارانتی <br />
          <span style={{ color: '#E8941A' }}>شعبه اصفهان</span>
        </h2>
        
        <p className="text-center" style={{ color: '#4b5563', marginBottom: '2.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
          تعمیرات، استعلام و تمدید گارانتی، و خدمات کاستوم دستگاه‌های شما. 
          ما در کنار شما هستیم تا دستگاه‌هایتان همیشه سالم بمانند.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/warranty" className="btn-orange" style={{ textDecoration: 'none' }}>
            استعلام گارانتی دستگاه
          </Link>
          <Link href="/services" className="btn-white" style={{ textDecoration: 'none' }}>
            مشاهده خدمات
          </Link>
        </div>
      </section>

      {/* سه کارت اصلی */}
      <section className="cards-grid">
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
          <h3>دفتر گارانتی</h3>
          <p>استعلام وضعیت گارانتی، دستگاه‌های تحت پوشش، و پیگیری گارانتی‌های منقضی شده.</p>
          <Link href="/warranty" style={{ color: '#E8941A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>استعلام کنید ←</Link>
        </div>

        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
          <h3>شخصی‌سازی دستگاه</h3>
          <p>درخواست شخصی‌سازی و کاستوم دستگاه‌های خود. ثبت سفارش و پیگیری آنلاین.</p>
          <Link href="/custom" style={{ color: '#E8941A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>درخواست شخصی‌سازی ←</Link>
        </div>

        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢</div>
          <h3>پشتیبانی و تماس</h3>
          <p>ارتباط با پشتیبانی، ثبت درخواست تعمیر و سوالات متداول مشتریان.</p>
          <Link href="/contact" style={{ color: '#E8941A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>تماس با ما ←</Link>
        </div>
      </section>

      {/* بخش شعب و نمایندگی‌ها */}
      <section id="branches" style={{ backgroundColor: 'white', borderTop: '1px solid #e5e7eb', padding: '3rem 1rem' }}>
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1B7A6A', marginBottom: '1rem' }}>شعب و نمایندگی‌های مهر سرمستان</h2>
          <p style={{ color: '#4b5563' }}>برای دریافت خدمات، نزدیک‌ترین شعبه به خود را انتخاب کنید.</p>
        </div>

        <div className="branches-grid">
          {/* تهران */}
          <div className="branch">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏙️</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>تهران (مرکزی)</h4>
            <p style={{ fontSize: '0.75rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>دفتر اصلی</p>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>ضلع شمالی میدان ولیعصر، خیابان فخاری، پلاک ۱۶، ساختمان مهر</p>
            <a href="https://www.google.com/maps/search/تهران+میدان+ولیعصر+خیابان+فخاری" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>مشاهده روی نقشه ←</a>
          </div>

          {/* اصفهان */}
          <div className="branch">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕌</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>اصفهان</h4>
            <p style={{ fontSize: '0.75rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>شعبه اصفهان</p>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>خیابان طالقانی، بازار بزرگ طالقانی، طبقه دوم، واحد ۱۶۰</p>
            <a href="https://www.google.com/maps/search/اصفهان+خیابان+طالقانی+بازار+بزرگ+طالقانی" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>مشاهده روی نقشه ←</a>
          </div>

          {/* شیراز */}
          <div className="branch">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌷</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>شیراز</h4>
            <p style={{ fontSize: '0.75rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>نمایندگی رسمی</p>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>خیابان فلسطین، تقاطع معدل و فلسطین، ساختمان ۱۱۰، طبقه ۴، واحد ۸</p>
            <a href="https://www.google.com/maps/search/شیراز+خیابان+فلسطین+تقاطع+معدل" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>مشاهده روی نقشه ←</a>
          </div>

          {/* مشهد */}
          <div className="branch">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕋</div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>مشهد</h4>
            <p style={{ fontSize: '0.75rem', color: '#E8941A', fontWeight: 'bold', marginBottom: '0.5rem' }}>نمایندگی رسمی</p>
            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>بلوار شهید صادقی، بین صادقی ۱۷ و ۱۹، مجتمع تجاری کامپیوتر تابان واحد ۳۳</p>
            <a href="https://www.google.com/maps/search/مشهد+بلوار+شهید+صادقی+مجتمع+تابان" target="_blank" rel="noopener noreferrer" style={{ color: '#1B7A6A', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>مشاهده روی نقشه ←</a>
          </div>
        </div>
      </section>

      {/* فوتر */}
            <footer style={{ backgroundColor: '#1B7A6A', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '3rem' }}>
        <p style={{ margin: 0, marginBottom: '1rem', opacity: 0.8 }}>© ۱۴۰۴ شرکت خدماتی و تجاری مهر سرمستان</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem' }}>
          <Link href="/admin/login" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>ورود به پنل مدیریت</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <Link href="/tickets" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>سیستم تعمیرات</Link>
        </div>
      </footer>

    </main>
  );
}