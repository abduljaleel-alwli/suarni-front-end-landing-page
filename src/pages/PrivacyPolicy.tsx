import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto" dir="rtl">
      <Link to="/" className="inline-flex items-center gap-2 text-blue-700 underline mb-6">
        <ArrowLeft size={16} />
        <span>العودة للرئيسية</span>
      </Link>
      
      <h1 className="text-2xl font-bold mb-6 border-b border-black pb-2">سياسة الخصوصية لـ "صورني"</h1>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-2">1. مقدمة</h2>
          <p>نحن في "صورني" نولي أهمية قصوى لخصوصيتك. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لتطبيقنا وموقعنا الإلكتروني.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">2. المعلومات التي نجمعها</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>المعلومات الشخصية:</strong> مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند التسجيل.</li>
            <li><strong>بيانات الموقع:</strong> نطلب الوصول إلى موقعك الجغرافي لربطك بالمحترفين والمعدات القريبة منك.</li>
            <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية تفاعلك مع التطبيق لتحسين تجربتك.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">3. كيف نستخدم معلوماتك</h2>
          <p>نستخدم البيانات لتقديم خدماتنا، وتسهيل عمليات الحجز، وتحسين جودة التطبيق، والتواصل معك بشأن التحديثات أو العروض.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">4. مشاركة البيانات</h2>
          <p>لا نقوم ببيع بياناتك الشخصية. قد نشارك بعض المعلومات مع شركاء الخدمة (مثل مزودي الدفع أو الخرائط) فقط بالقدر الضروري لتقديم الخدمة.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">5. حماية البيانات</h2>
          <p>نطبق معايير أمنية تقنية وإدارية لحماية معلوماتك من الوصول غير المصرح به أو الفقدان.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">6. حقوقك</h2>
          <p>لديك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب حذفها في أي وقت من خلال إعدادات الحساب أو التواصل معنا.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">7. التواصل معنا</h2>
          <p>إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني: info@suarni.com</p>
        </section>
      </div>
      
      <footer className="mt-10 pt-4 border-t border-black text-xs text-center">
        تاريخ آخر تحديث: مارس 2026
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
