'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    customerType: 'walk-in',
    customerName: '',
    phone: '',
    deviceType: 'laptop',
    serviceType: 'repair',
    description: '',
    location: 'local'
  });

  useEffect(() => {
    const saved = localStorage.getItem('mehrTickets');
    if (saved) setTickets(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('mehrTickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTicket = {
      id: Date.now(),
      date: new Date().toLocaleDateString('fa-IR'),
      ...formData,
      status: 'در انتظار بررسی'
    };

    setTickets([newTicket, ...tickets]);
    
    setFormData({
      customerType: 'walk-in',
      customerName: '',
      phone: '',
      deviceType: 'laptop',
      serviceType: 'repair',
      description: '',
      location: 'local'
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      <header className="bg-[#1B7A6A] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">سیستم ثبت تعمیرات - مهر سرمستان</h1>
        <Link href="/" className="text-sm border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#1B7A6A] transition">
          بازگشت به خانه
        </Link>
      </header>

      <section className="px-6 py-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
          <h2 className="text-2xl font-bold text-[#1B7A6A] mb-6">ثبت سفارش جدید</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="customerType" value="walk-in" checked={formData.customerType === 'walk-in'} onChange={(e) => setFormData({...formData, customerType: e.target.value})} />
                مشتری متفرقه
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="customerType" value="colleague" checked={formData.customerType === 'colleague'} onChange={(e) => setFormData({...formData, customerType: e.target.value})} />
                همکار / نمایندگی
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="نام مشتری" required value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E8941A] outline-none" />
              <input type="tel" placeholder="شماره تماس" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E8941A] outline-none font-mono" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select value={formData.deviceType} onChange={(e) => setFormData({...formData, deviceType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E8941A] outline-none">
                <option value="laptop">لپ‌تاپ</option>
                <option value="mobile">موبایل</option>
                <option value="all-in-one">آل این وان</option>
                <option value="ram">رم / هارد</option>
              </select>
              <select value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E8941A] outline-none">
                <option value="repair">تعمیر</option>
                <option value="upgrade">ارتقاء / شخصی‌سازی</option>
              </select>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex gap-4">
              <span className="text-sm font-bold text-gray-600">محل انجام:</span>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="location" value="local" checked={formData.location === 'local'} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                همین دفتر
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input type="radio" name="location" value="branch" checked={formData.location === 'branch'} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                ارسال به شعبه
              </label>
            </div>

            <textarea rows="3" placeholder="توضیحات مشکل..." required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E8941A] outline-none"></textarea>

            <button type="submit" className="w-full bg-[#E8941A] hover:bg-[#F5A623] text-white font-bold px-8 py-4 rounded-xl text-lg transition">
              ثبت در سیستم
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">لیست دستگاه‌های موجود</h2>
          
          {tickets.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl text-center text-gray-400 border border-dashed border-gray-300">
              هنوز هیچ دستگاهی ثبت نشده است.
            </div>
          ) : (
            tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white p-5 rounded-xl shadow-sm border-r-4 border-r-[#1B7A6A] border-y border-l border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{ticket.customerName} <span className="text-xs font-normal text-gray-400">({ticket.date})</span></h3>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">{ticket.status}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{ticket.deviceType}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">{ticket.serviceType === 'repair' ? 'تعمیر' : 'ارتقاء'}</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">{ticket.location === 'local' ? 'داخل دفتر' : 'ارسال به شعبه'}</span>
                  <span className="bg-orange-50 text-[#E8941A] px-2 py-1 rounded">{ticket.customerType === 'walk-in' ? 'مشتری' : 'همکار'}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </section>
    </main>
  );
}