import Link from 'next/link';
  export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      {/* هدر سایت - با کلاس flex-row-reverse تا لوگو سمت راست و منو سمت چپ بره */}
            {/* هدر مخصوص صفحه استعلام - لوگو وسط، دکمه سمت چپ */}
            {/* هدر سایت */}
            {/* هدر سایت */}
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
          <a href="#branches" className="hover:text-[#F5A623] transition">شعبات</a>
          <Link href="/contact" className="hover:text-[#F5A623] transition">تماس با ما</Link>
        </nav>
      </header>
            {/* بخش اصلی بالای سایت */}
      <section className="px-6 py-20 text-center bg-white border-b border-gray-200">
        <span className="bg-[#E8941A]/10 text-[#E8941A] px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
          دفتر گارانتی و خدمات پس از فروش مهر سرمستان
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#1B7A6A] mb-6 leading-tight">
          مرکز خدمات و گارانتی <br />
          <span className="text-[#E8941A]">شعبه اصفهان</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          تعمیرات، استعلام و تمدید گارانتی، و خدمات کاستوم دستگاه‌های شما. 
          ما در کنار شما هستیم تا دستگاه‌هایتان همیشه سالم بمانند.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/warranty" className="bg-[#E8941A] hover:bg-[#F5A623] text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg shadow-orange-200 inline-block text-center">
            استعلام گارانتی دستگاه
          </Link>
          <Link href="/services" className="bg-white border-2 border-[#1B7A6A] text-[#1B7A6A] hover:bg-[#1B7A6A] hover:text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block text-center">
            مشاهده خدمات
          </Link>
        </div>
      </section>
      {/* سه کارت اصلی */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-green-50 text-[#1B7A6A] rounded-xl flex items-center justify-center text-3xl mb-6">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">دفتر گارانتی</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">استعلام وضعیت گارانتی، دستگاه‌های تحت پوشش، و پیگیری گارانتی‌های منقضی شده.</p>
            <Link href="/warranty" className="text-[#E8941A] font-bold text-sm hover:underline">استعلام کنید ←</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-orange-50 text-[#E8941A] rounded-xl flex items-center justify-center text-3xl mb-6">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">شخصی‌سازی دستگاه</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">درخواست شخصی‌سازی و کاستوم دستگاه‌های خود. ثبت سفارش و پیگیری آنلاین.</p>
           <Link href="/custom" className="text-[#E8941A] font-bold text-sm hover:underline">درخواست شخصی‌سازی ←</Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-green-50 text-[#1B7A6A] rounded-xl flex items-center justify-center text-3xl mb-6">🏢</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">پشتیبانی و تماس</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">ارتباط با پشتیبانی، ثبت درخواست تعمیر و سوالات متداول مشتریان.</p>
            <Link href="/contact" className="text-[#E8941A] font-bold text-sm hover:underline">تماس با ما ←</Link>
          
          </div>

        </div>
      </section>

      {/* بخش شعب و نمایندگی‌ها */}
            {/* بخش شعب و نمایندگی‌ها */}
      <section id="branches" className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B7A6A] mb-4">شعب و نمایندگی‌های مهر سرمستان</h2>
            <p className="text-gray-600">برای دریافت خدمات، نزدیک‌ترین شعبه به خود را انتخاب کنید.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* تهران */}
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-transparent hover:border-[#1B7A6A] transition cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition">🏙️</div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">تهران (مرکزی)</h4>
              <p className="text-xs text-[#E8941A] font-bold mb-3">دفتر اصلی</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">ضلع شمالی میدان ولیعصر، خیابان فخاری، پلاک ۱۶، ساختمان مهر</p>
              <a href="https://www.google.com/maps/search/تهران+میدان+ولیعصر+خیابان+فخاری" target="_blank" rel="noopener noreferrer" className="text-[#1B7A6A] text-sm font-bold hover:underline">مشاهده روی نقشه ←</a>
            </div>

            {/* اصفهان */}
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-transparent hover:border-[#1B7A6A] transition cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition">🕌</div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">اصفهان</h4>
              <p className="text-xs text-[#E8941A] font-bold mb-3">شعبه اصفهان</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">خیابان طالقانی، بازار بزرگ طالقانی، طبقه دوم، واحد ۱۶۰</p>
              <a href="https://www.google.com/maps/search/اصفهان+خیابان+طالقانی+بازار+بزرگ+طالقانی" target="_blank" rel="noopener noreferrer" className="text-[#1B7A6A] text-sm font-bold hover:underline">مشاهده روی نقشه ←</a>
            </div>

            {/* شیراز */}
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-transparent hover:border-[#1B7A6A] transition cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition">🌷</div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">شیراز</h4>
              <p className="text-xs text-[#E8941A] font-bold mb-3">نمایندگی رسمی</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">خیابان فلسطین، تقاطع معدل و فلسطین، ساختمان ۱۱۰، طبقه ۴، واحد ۸</p>
              <a href="https://www.google.com/maps/search/شیراز+خیابان+فلسطین+تقاطع+معدل" target="_blank" rel="noopener noreferrer" className="text-[#1B7A6A] text-sm font-bold hover:underline">مشاهده روی نقشه ←</a>
            </div>

            {/* مشهد */}
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-transparent hover:border-[#1B7A6A] transition cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition">🕋</div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">مشهد</h4>
              <p className="text-xs text-[#E8941A] font-bold mb-3">نمایندگی رسمی</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">بلوار شهید صادقی، بین صادقی ۱۷ و ۱۹، مجتمع تجاری کامپیوتر تابان واحد ۳۳</p>
              <a href="https://www.google.com/maps/search/مشهد+بلوار+شهید+صادقی+مجتمع+تابان" target="_blank" rel="noopener noreferrer" className="text-[#1B7A6A] text-sm font-bold hover:underline">مشاهده روی نقشه ←</a>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-[#1B7A6A] text-white text-center py-8">
        <p className="text-sm opacity-80">© ۱۴۰۴ شرکت خدماتی و تجاری مهر سرمستان - تمامی حقوق محفوظ است.</p>
                <div className="mt-4 pt-4 border-t border-[#ffffff30] text-xs flex justify-center gap-4">
          <Link href="/admin" className="hover:text-[#F5A623] transition text-white/70">پنل مدیریت انبار</Link>
          <span className="text-white/30">|</span>
          <Link href="/tickets" className="hover:text-[#F5A623] transition text-white/70">سیستم تعمیرات</Link>
        </div>
      </footer>

    </main>
  );
}