import Link from 'next/link';

export default function Contact() {
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

      {/* فرم تماس */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
          <div className="text-5xl mb-6">📞</div>
          <h2 className="text-3xl font-black text-[#1B7A6A] mb-4">تماس با ما</h2>
          <p className="text-gray-600 mb-8">سوال یا درخواستی دارید؟ فرم زیر را پر کنید یا با ما تماس بگیرید.</p>
          
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
              <label className="block text-sm font-bold text-gray-700 mb-2">پیام شما</label>
              <textarea rows="4" placeholder="متن پیام..." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20"></textarea>
            </div>
            <button type="button" className="w-full bg-[#1B7A6A] hover:bg-[#145f52] text-white font-bold px-8 py-4 rounded-xl text-lg transition mt-2">
              ارسال پیام
            </button>
          </form>

          {/* اطلاعات تماس - فقط یک بار */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#1B7A6A]">اطلاعات تماس ما</h3>
            </div>

            <div className="text-right mb-6 bg-gray-50 p-4 rounded-xl">
              <p className="text-sm font-bold text-gray-700 mb-1">📍 آدرس دفتر اصفهان:</p>
              <p className="text-gray-600">اصفهان، خیابان طالقانی، بازار بزرگ طالقانی، طبقه دوم، واحد ۱۶۰</p>
            </div>
            
            <p className="text-sm font-bold text-gray-700 mb-2 text-right">📞 تلفن‌های تماس (سیستم ویپ):</p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              
              <div className="flex justify-between flex-row-reverse py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition">
                <span className="font-bold text-[#1B7A6A] font-mono" dir="ltr">021-4328 (255-256)</span>
                <span className="text-gray-700">داخلی واحد پذیرش</span>
              </div>
              
              <div className="flex justify-between flex-row-reverse py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition">
                <span className="font-bold text-[#1B7A6A] font-mono" dir="ltr">021-4328 (253-254)</span>
                <span className="text-gray-700">داخلی واحد پذیرش</span>
              </div>
              
              <div className="flex justify-between flex-row-reverse py-3 px-4 hover:bg-gray-50 transition">
                <span className="font-bold text-[#1B7A6A] font-mono" dir="ltr">021-4328 (257-258)</span>
                <span className="text-gray-700">داخلی بخش فنی</span>
              </div>

            </div>
            
            <p className="text-xs text-gray-400 text-center">*(پس از تماس با شماره اصلی، کد داخلی مورد نظر خود را وارد کنید)*</p>
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