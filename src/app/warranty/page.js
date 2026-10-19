'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Warranty() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!code) {
      setResult({ type: 'error', text: 'لطفاً کد رهگیری را وارد کنید.' });
      return;
    }
    
    setLoading(true);
    setResult(null);

    try {
      // خوندن اطلاعات از فایل JSON
      const response = await fetch('/warranty-data.json');
      const data = await response.json();
      
      // پیدا کردن دستگاه با کد وارد شده
      const device = data.find(item => item.code === code);

      if (device) {
        if (device.status === 'active') {
          setResult({ 
            type: 'success', 
            text: `✅ دستگاه ${device.model} شما تحت گارانتی است. تاریخ انقضا: ${device.expireDate}` 
          });
        } else {
          setResult({ 
            type: 'warning', 
            text: `⚠️ گارانتی دستگاه ${device.model} شما در تاریخ ${device.expireDate} به پایان رسیده است.` 
          });
        }
      } else {
        setResult({ 
          type: 'error', 
          text: '❌ دستگاه با این کد رهگیری در سیستم گارانتی مهر سرمستان یافت نشد.' 
        });
      }
    } catch (error) {
      setResult({ type: 'error', text: 'خطا در برقراری ارتباط با سرور.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
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

      <section className="px-6 py-20 max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
          <div className="text-5xl mb-6">🛡️</div>
          <h2 className="text-3xl font-black text-[#1B7A6A] mb-4">استعلام وضعیت گارانتی</h2>
          <p className="text-gray-600 mb-8">شماره سریال دستگاه یا کد رهگیری خود را وارد کنید تا وضعیت گارانتی آن را مشاهده کنید.</p>
          
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="مثلاً: 12345678" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#E8941A] focus:ring-2 focus:ring-[#E8941A]/20 text-center text-lg font-mono"
            />
            <button 
              type="button" 
              onClick={handleSearch}
              disabled={loading}
              className={`w-full font-bold px-8 py-4 rounded-xl text-lg transition shadow-lg mt-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E8941A] hover:bg-[#F5A623] text-white shadow-orange-200'
              }`}
            >
              {loading ? 'در حال استعلام...' : 'استعلام گارانتی'}
            </button>
          </form>

          {result && (
            <div className={`mt-6 p-4 rounded-xl text-sm font-bold text-right ${
              result.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 
              result.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' : 
              'bg-green-50 text-green-700 border border-green-100'
            }`}>
              {result.text}
            </div>
          )}

          <p className="text-xs text-gray-400 mt-6">در صورت نداشتن کد رهگیری، با شماره 4328-021 تماس حاصل فرمایید.</p>
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