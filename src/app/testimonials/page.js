import Link from 'next/link';

const reviews = [
  { name: 'علی رضایی', job: 'مشتری متفرقه', text: 'تعمیر لپ‌تاپم رو خیلی سریع و با کیفیت انجام دادن. واقعاً حرفه‌ای هستن.', stars: 5 },
  { name: 'سارا محمدی', job: 'مشتری متفرقه', text: 'برای تعویض رم و هارد مراجعه کردم، قیمت منصفانه و کار تمیز. ممنون از تیم مهر سرمستان.', stars: 5 },
  { name: 'شرکت آریا سیستم', job: 'همکار / نمایندگی', text: 'همکاری با این مجموعه برای ما همیشه رضایت‌بخش بوده. پشتیبانی و گارانتیشون عالیه.', stars: 4 },
];

export default function Testimonials() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl' }}>
      <header style={{ backgroundColor: '#1B7A6A', color: 'white', padding: '1rem 2rem', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>خانه</Link>
          <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>خدمات</Link>
          <Link href="/warranty" style={{ color: 'white', textDecoration: 'none' }}>گارانتی</Link>
          <Link href="/branches" style={{ color: 'white', textDecoration: 'none' }}>شعبات</Link>
          <Link href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>نمونه کارها</Link>
          <Link href="/testimonials" style={{ color: 'white', textDecoration: 'none' }}>نظرات مشتریان</Link>
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

      <section style={{ padding: '3rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
          <h2 style={{ fontSize: '2rem', color: '#1B7A6A', marginBottom: '1rem' }}>نظرات مشتریان</h2>
          <p style={{ color: '#4b5563' }}>آنچه مشتریان درباره ما می‌گویند</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', border: '1px solid #eee', position: 'relative' }}>
              <div style={{ fontSize: '2rem', color: '#E8941A', marginBottom: '1rem' }}>
                {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
              </div>
              <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '1.5rem' }}>"{review.text}"</p>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <strong style={{ display: 'block', color: '#1f2937' }}>{review.name}</strong>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{review.job}</span>
              </div>
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