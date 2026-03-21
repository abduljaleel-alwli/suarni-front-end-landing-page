import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto" dir="rtl">
      <Link to="/" className="inline-flex items-center gap-2 text-blue-700 underline mb-6">
        <ArrowLeft size={16} />
        <span>العودة للرئيسية</span>
      </Link>
      
      <h1 className="text-2xl font-bold mb-6 border-b border-black pb-2">اتصل بنا</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-sm">نحن هنا لمساعدتك. إذا كان لديك أي استفسار أو واجهت مشكلة، لا تتردد في التواصل معنا عبر الوسائل التالية:</p>
          
          <div className="flex items-center gap-3">
            <div className="p-2 border border-black">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">البريد الإلكتروني</h3>
              <p className="text-xs">info@suarni.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 border border-black">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">رقم الهاتف</h3>
              <p className="text-xs">+966 50 000 0000</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 border border-black">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">المقر الرئيسي</h3>
              <p className="text-xs">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        <div className="border border-black p-4">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
              <Send className="text-green-600" size={40} />
              <h3 className="font-bold">تم الإرسال بنجاح!</h3>
              <p className="text-xs">سنتواصل معك في أقرب وقت ممكن.</p>
              <button onClick={() => setSubmitted(false)} className="text-blue-700 underline text-xs mt-4">إرسال رسالة أخرى</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-1">الاسم الكامل</label>
                <input required type="text" className="w-full border border-black p-2 text-sm focus:outline-none focus:bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">البريد الإلكتروني</label>
                <input required type="email" className="w-full border border-black p-2 text-sm focus:outline-none focus:bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">الموضوع</label>
                <input required type="text" className="w-full border border-black p-2 text-sm focus:outline-none focus:bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">الرسالة</label>
                <textarea required rows={4} className="w-full border border-black p-2 text-sm focus:outline-none focus:bg-gray-50"></textarea>
              </div>
              <button type="submit" className="w-full basic-button flex items-center justify-center gap-2">
                <span>إرسال</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
      
      <footer className="mt-10 pt-4 border-t border-black text-xs text-center">
        © 2026 صورني. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default ContactUs;
