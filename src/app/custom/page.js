import Link from 'next/link';

export default function Custom() {
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
      {/* فرم درخواست کاستوم */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
          <div className="text-5xl mb-6">🎨</div>
         <h2 className="text-3xl font-black text-[#1B7A6A] mb-4">درخواست شخصی‌سازی دستگاه</h2>
          <p className="text-gray-600 mb-8">دستگاه خود را دقیقاً همان‌طور که می‌خواهید بسازید. فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند.</p>
          
          <form className="flex flex-col gap-4 text-right">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">نام و نام خانوادگی</label>
              <input type="text" placeholder="نام شما" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">شماره تماس</label>
              <input type="tel" placeholder="مثلاً: ۰۹۱۲۳۴۵۶۷۸۹" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20 font-mono" />
            </div>
                        <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">نوع دستگاه / خدمت</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20">
                <option value="">انتخاب کنید...</option>
                <option value="mobile-repair">تعمیر موبایل</option>
                <option value="laptop">لپ‌تاپ</option>
                <option value="all-in-one">آل این وان (All-in-One)</option>
                <option value="ram-warranty">گارانتی و تعویض رم</option>
                <option value="other">سایر موارد</option>
              </select>
            </div>
                        <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">مدل دقیق دستگاه / قطعه</label>
              <input type="text" placeholder="مثلاً: رم لپ‌تاپ ایسوس DDR4 8GB" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">توضیحات درخواست</label>
              <textarea rows="4" placeholder="دقیقاً چه تغییری می‌خواهید؟" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20"></textarea>
            </div>
            <button type="button" className="w-full bg-[#1B7A6A] hover:bg-[#145f52] text-white font-bold px-8 py-4 rounded-xl text-lg transition mt-2">
              ثبت درخواست
            </button>
          </form>
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