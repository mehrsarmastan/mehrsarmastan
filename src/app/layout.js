export const metadata = {
  title: "مهر سرمستان - شعبه اصفهان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: Tahoma, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; direction: rtl; max-width: 1200px; margin-left: auto; margin-right: auto; }
          header { background-color: #1B7A6A; color: white; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
          header nav { display: flex; gap: 1.5rem; font-size: 0.875rem; }
          header nav a:hover { color: #F5A623; }
          h2 { color: #1B7A6A; }
          .text-orange { color: #E8941A; }
          .btn-orange { background-color: #E8941A; color: white; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-weight: bold; text-decoration: none; display: inline-block; }
          .btn-white { background-color: white; color: #1B7A6A; border: 2px solid #1B7A6A; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-weight: bold; text-decoration: none; display: inline-block; }
          .card { background-color: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; }
          .card h3 { color: #1f2937; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; }
          .card p { color: #4b5563; font-size: 0.875rem; line-height: 1.5; }
          .grid { display: grid; gap: 1.5rem; }
          .grid-cols-1 { grid-template-columns: 1fr; }
          @media (min-width: 768px) { .grid-cols-2 { grid-template-columns: repeat(2, 1fr); } .grid-cols-3 { grid-template-columns: repeat(3, 1fr); } }
          footer { background-color: #1B7A6A; color: white; text-align: center; padding: 2rem; margin-top: 3rem; }
          input, textarea, select { width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.75rem; margin-bottom: 1rem; font-family: inherit; box-sizing: border-box; }
          .text-center { text-align: center; }
          .max-w-2xl { max-width: 42rem; margin-left: auto; margin-right: auto; }
                    /* استایل کارت‌ها */
          .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; padding: 3rem 2rem; max-width: 1100px; margin: 0 auto; }
          .card { background: white; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid #eee; }
          
          /* استایل شعب */
          .branches-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 0 auto; }
          .branch { background: #f9fafb; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #eee; }
        ` }} />
      </head>
      <body>
        {children}
                {/* دکمه شناور واتساپ */}
        <a 
          href="https://wa.me/989917023927" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1.5rem',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '1rem',
            borderRadius: '9999px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
          title="تماس در واتساپ"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}