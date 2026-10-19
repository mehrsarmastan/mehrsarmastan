import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      {/* هدر */}
            <header className="bg-[#1B7A6A] text-white px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
        {/* لوگو و اسم - سمت راست */}
        <Link href="/" className="flex flex-row-reverse items-center gap-3 hover:opacity-90 transition z-10">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-1 shrink-0">
            <img src="/logo.jpg" alt="لوگو مهر سرمستان" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="text-right">
            <h1 className="text-xl font-bold">مهر سرمستان</h1>
            <p className="text-xs opacity-80">نمایندگی رسمی اصفهان</p>
          </div>
        </Link>

        {/* منو - سمت چپ */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#F5A623] transition">خانه</Link>
          <Link href="/services" className="hover:text-[#F5A623] transition">خدمات</Link>
          <Link href="/warranty" className="hover:text-[#F5A623] transition">استعلام گارانتی</Link>
          <a href="/#branches" className="hover:text-[#F5A623] transition">شعبات</a>
          <Link href="/contact" className="hover:text-[#F5A623] transition">تماس با ما</Link>
        </nav>
      </header>
      {/* بخش خدمات */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1B7A6A] mb-4">خدمات ما</h2>
          <p className="text-gray-600 text-lg">با بهترین کیفیت و ضمانت، در خدمت شما هستیم.</p>
        </div>
                <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* کارت ۱: تعمیر موبایل */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">تعمیر تخصصی موبایل</h3>
            <p className="text-gray-600 text-sm leading-relaxed">تعمیر انواع گوشی‌های سامسونگ، اپل و شیائومی. تعویض LCD، باتری، و رفع مشکلات نرم‌افزاری.</p>
          </div>

          {/* کارت ۲: تعمیر لپ‌تاپ و کامپیوتر */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">تعمیر لپ‌تاپ و کامپیوتر</h3>
            <p className="text-gray-600 text-sm leading-relaxed">تعمیر مادربرد، نصب ویندوز و نرم‌افزار، ارتقای سخت‌افزار (رم و هارد) و رفع مشکلات حرارتی.</p>
          </div>

          {/* کارت ۳: خدمات گارانتی */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">خدمات گارانتی</h3>
            <p className="text-gray-600 text-sm leading-relaxed">استعلام، تمدید و ثبت گارانتی دستگاه‌های شما. پیگیری آسان و سریع از طریق همین سایت.</p>
          </div>

          {/* کارت ۴: شخصی‌سازی (کاستوم) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">شخصی‌سازی (کاستوم)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">سفارشی‌سازی سخت‌افزار و ظاهر دستگاه‌ها بر اساس سلیقه و نیاز شما.</p>
          </div>

        </div>
        
      </section>
            {/* فوتر */}
      <footer className="bg-[#1B7A6A] text-white text-center py-8 mt-12">
        <p className="text-sm opacity-80 mb-4">© ۱۴۰۴ شرکت خدماتی و تجاری مهر سرمستان - تمامی حقوق محفوظ است.</p>
        
        <div className="mt-4 pt-4 border-t border-[#ffffff30] text-xs flex justify-center gap-4">
          <Link href="/admin" className="hover:text-[#F5A623] transition text-white/70">پنل مدیریت انبار</Link>
          <span className="text-white/30">|</span>
          <Link href="/tickets" className="hover:text-[#F5A623] transition text-white/70">سیستم تعمیرات</Link>
        </div>
      </footer>
    </main>
  );
}