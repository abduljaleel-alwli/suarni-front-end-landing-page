import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto" dir="rtl">
      <Link to="/" className="inline-flex items-center gap-2 text-blue-700 underline mb-6">
        <ArrowLeft size={16} />
        <span>العودة للرئيسية</span>
      </Link>
      
      <h1 className="text-2xl font-bold mb-6 border-b border-black pb-2">شروط الاستخدام لـ "صورني"</h1>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-2">1. قبول الشروط</h2>
          <p>باستخدامك لتطبيق "صورني"، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق عليها، يرجى عدم استخدام التطبيق.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">2. حساب المستخدم</h2>
          <p>أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور، وعن جميع الأنشطة التي تتم من خلال حسابك.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">3. الاستخدام المقبول</h2>
          <p>يجب استخدام التطبيق لأغراض قانونية فقط. يُحظر تماماً نشر محتوى غير لائق، أو انتحال شخصية، أو محاولة اختراق النظام.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">4. الملكية الفكرية</h2>
          <p>جميع حقوق الملكية الفكرية المتعلقة بالتطبيق (بما في ذلك التصميم، النصوص، والبرمجيات) مملوكة لـ "صورني".</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">5. إخلاء المسؤولية</h2>
          <p>نحن نسعى لتقديم أفضل خدمة، ولكننا لا نضمن خلو التطبيق من الأخطاء التقنية أو انقطاع الخدمة المؤقت.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">6. التعديلات</h2>
          <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">7. القانون الحاكم</h2>
          <p>تخضع هذه الشروط وتُفسر وفقاً للقوانين المعمول بها في المملكة العربية السعودية.</p>
        </section>
      </div>
      
      <footer className="mt-10 pt-4 border-t border-black text-xs text-center">
        تاريخ آخر تحديث: مارس 2026
      </footer>
    </div>
  );
};

export default TermsOfService;
