import Link from 'next/link';

export default function About() {
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

      <section style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1.5rem', textAlign: 'center' }}>درباره مهر سرمستان</h2>
          <div style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              دفتر گارانتی و خدمات پس از فروش <strong>مهر سرمستان</strong> (شعبه اصفهان) با سال‌ها تجربه در زمینه تعمیرات تخصصی موبایل، لپ‌تاپ و کامپیوتر، همواره در تلاش است تا بهترین خدمات را با ضمانت و کیفیت بالا به مشتریان عزیز ارائه دهد.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              ما با بهره‌گیری از کارشناسان مجرب و قطعات اصلی، آماده‌ی ارائه خدمات گارانتی، تعویض قطعات (رم، هارد، باتری) و همچنین شخصی‌سازی و ارتقاء دستگاه‌های شما هستیم.
            </p>
            <p>
              هدف ما جلب رضایت شما و ایجاد اعتماد پایدار است. تیم مهر سرمستان همواره در کنار شماست تا دستگاه‌هایتان همیشه سالم و به‌روز بمانند.
            </p>
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