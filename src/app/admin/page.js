'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// دیتابیس اولیه
const initialInventory = [
  { id: 1, name: 'رم لپ‌تاپ DDR4 8GB', quantity: 15, unit: 'عدد' },
  { id: 2, name: 'هارد SSD 512GB', quantity: 8, unit: 'عدد' },
  { id: 3, name: 'خمیر سیلیکون', quantity: 25, unit: 'عدد' },
  { id: 4, name: 'باتری لپ‌تاپ ایسوس', quantity: 5, unit: 'عدد' },
];

export default function Admin() {
  const [inventory, setInventory] = useState(initialInventory);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');

  // خوندن از حافظه
  useEffect(() => {
    const savedInventory = localStorage.getItem('mehrInventory');
    if (savedInventory) {
      setInventory(JSON.parse(savedInventory));
    }
  }, []);

  // ذخیره در حافظه
  useEffect(() => {
    localStorage.setItem('mehrInventory', JSON.stringify(inventory));
  }, [inventory]);

  // تغییر موجودی (+۱ یا -۱)
  const updateQuantity = (id, amount) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return { ...item, quantity: newQty < 0 ? 0 : newQty };
      }
      return item;
    }));
  };

  // اضافه کردن قطعه جدید
  const addNewItem = (e) => {
    e.preventDefault();
    if (!newItemName || !newItemQty) return;

    const newItem = {
      id: Date.now(), // آیدی یکتا
      name: newItemName,
      quantity: parseInt(newItemQty),
      unit: 'عدد'
    };

    setInventory([...inventory, newItem]);
    setNewItemName(''); // خالی کردن فرم
    setNewItemQty('');
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      <header className="bg-[#1B7A6A] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">پنل مدیریت انبار - مهر سرمستان</h1>
        <Link href="/" className="text-sm border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#1B7A6A] transition">
          بازگشت به سایت
        </Link>
      </header>

      <section className="px-6 py-10 max-w-5xl mx-auto space-y-8">
        
        {/* فرم اضافه کردن قطعه جدید */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">افزودن قطعه جدید به انبار</h2>
          <form onSubmit={addNewItem} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm text-gray-600 mb-1">نام قطعه</label>
              <input 
                type="text" 
                value={newItemName} 
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="مثلاً: کابل شارژ تایپ سی" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E8941A]"
              />
            </div>
            <div className="w-full md:w-32">
              <label className="block text-sm text-gray-600 mb-1">تعداد اولیه</label>
              <input 
                type="number" 
                value={newItemQty} 
                onChange={(e) => setNewItemQty(e.target.value)}
                placeholder="۱۰" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E8941A]"
              />
            </div>
            <button type="submit" className="bg-[#E8941A] hover:bg-[#F5A623] text-white font-bold px-6 py-2 rounded-lg transition w-full md:w-auto">
              افزودن
            </button>
          </form>
        </div>

        {/* جدول موجودی */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1B7A6A] text-white py-4 px-6">
            <h2 className="text-lg font-bold">لیست موجودی فعلی</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {inventory.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-center p-6 hover:bg-gray-50 transition gap-4">
                <div className="w-full md:w-auto text-center md:text-right">
                  <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">موجودی: <span className="font-bold text-[#1B7A6A]">{item.quantity}</span> {item.unit}</p>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity === 0}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                      item.quantity === 0 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                  >
                    کم کردن (-۱)
                  </button>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-4 py-2 rounded-lg text-sm font-bold bg-green-50 text-green-700 hover:bg-green-100 transition"
                  >
                    افزودن (+۱)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => {
              if(confirm('آیا مطمئنید می‌خواهید موجودی را به حالت اول برگردانید؟')) {
                localStorage.removeItem('mehrInventory');
                setInventory(initialInventory);
              }
            }}
            className="text-sm text-gray-400 hover:text-red-500 underline transition"
          >
            بازگردانی به حالت اولیه
          </button>
        </div>

      </section>
    </main>
  );
}