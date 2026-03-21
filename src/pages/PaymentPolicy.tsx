import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, ShieldCheck, RefreshCw } from 'lucide-react';

const PaymentPolicy = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto" dir="rtl">
      <Link to="/" className="inline-flex items-center gap-2 text-blue-700 underline mb-6">
        <ArrowLeft size={16} />
        <span>العودة للرئيسية</span>
      </Link>
      
      <h1 className="text-2xl font-bold mb-6 border-b border-black pb-2">ضمان حقوقك وسياسة الدفع لـ "صورني"</h1>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section className="bg-gray-50 p-3 border border-black mb-4">
          <p className="font-bold">في "صورني"، نضمن حقوقك المالية تماماً. أموالك في أمان حتى يتم تنفيذ الخدمة المتفق عليها واستلامها بنجاح.</p>
        </section>

        <section className="flex gap-3 items-start">
          <CreditCard className="mt-1 flex-shrink-0" size={20} />
          <div>
            <h2 className="font-bold text-lg mb-2">1. كيف يتم الدفع؟</h2>
            <p>عند قيامك بطلب خدمة أو استئجار معدة، يقوم تطبيق "صورني" بحجز المبلغ من حسابك. يبقى هذا المبلغ في "عهدة" التطبيق ولا يتم تحويله لمقدم الخدمة إلا بعد تأكيدك لاستلام الخدمة أو انتهاء مدة التأجير المتفق عليها دون مشاكل.</p>
          </div>
        </section>

        <section className="flex gap-3 items-start">
          <ShieldCheck className="mt-1 flex-shrink-0" size={20} />
          <div>
            <h2 className="font-bold text-lg mb-2">2. أمان المعاملات المالية</h2>
            <p>نستخدم بوابات دفع مشفرة ومعتمدة (مثل مدى، فيزا، Apple Pay) لضمان حماية بياناتك البنكية. جميع المعاملات تتم وفق أعلى معايير الأمان الرقمي.</p>
          </div>
        </section>

        <section className="flex gap-3 items-start">
          <RefreshCw className="mt-1 flex-shrink-0" size={20} />
          <div>
            <h2 className="font-bold text-lg mb-2">3. كيف يضمن "صورني" حقوقك؟</h2>
            <p className="mb-4">تطبيق "صورني" يضمن لك حقك المالي بشكل كامل فلا داعي لأي قلق. كن مطمئناً عند طلب خدمات جديدة أو تأجير المعدات، حيث يقوم التطبيق بدور الوسيط بين العميل وبين مقدم الخدمة ويحمي حقوق الطرفين المالية في حال الالتزام بشروطنا وبنود الضمان وتوضيح الاتفاق تماماً.</p>
            
            <div className="bg-gray-50 p-4 border border-black space-y-4">
              <h3 className="font-bold border-b border-black pb-1">للعميل (صاحب الطلب):</h3>
              <ul className="list-disc list-inside space-y-2 text-xs">
                <li>قم بكتابة تفاصيل طلبك بشكل مفصل موضحاً كل النقاط المطلوب من المحترف القيام بها.</li>
                <li>إذا كان عرض المحترف مختلفاً في المدة أو الميزانية عما عرضته أنت وقمت باختياره، سيكون عرضه هو الساري.</li>
                <li>أي معلومات حساسة تعطيها للمحترف (كلمات مرور، أرقام شخصية) تكون على مسؤوليتك الشخصية.</li>
                <li>عند حصول مشكلة، حاول حلها ودياً طالما لم تستلم الطلب نهائياً، فالمحترف لم يتسلم ماله بعد.</li>
                <li>بمجرد "استلام الطلب"، فهذا يعني أنك حصلت على ما أردت تماماً، ولا يمكن إلغاء الطلب أو طلب استرجاع بعد ذلك.</li>
                <li>في حال عدم تجاوب المحترف في المدة المحددة، يمكنك إلغاء العمل معه عبر الدعم الفني.</li>
                <li>لا تستخدم التحويل الخارجي؛ "صورني" لن يحميك في حال تم أي تواصل أو دفع خارج التطبيق.</li>
              </ul>

              <h3 className="font-bold border-b border-black pb-1 mt-4">لمقدم الخدمة (المحترف):</h3>
              <ul className="list-disc list-inside space-y-2 text-xs">
                <li>التواصل الخارجي ممنوع ويعني فقدانك لضمان وحماية "صورني" مباشرة وقد يعرض حسابك للإغلاق.</li>
                <li>يجب أن يكون عرضك واضح التفاصيل ومتعلقاً بالطلب، وقدم ميزانية ووقتاً مناسباً لك تماماً.</li>
                <li>استفسر من العميل بدقة عن تفاصيل العمل قبل البدء ووضح له ما ستقوم بعمله.</li>
                <li>بمجرد قبول العميل لعرضك، يتم حجز المبلغ في التطبيق، وسيصلك المبلغ عند تأكيد الاستلام من قبل العميل.</li>
                <li>تقديم عروض على خدمات لا تتقنها أو التأخر المتعمد في التنفيذ يؤدي لتقييم سلبي وقد يغلق حسابك.</li>
              </ul>
            </div>

            <p className="mt-4 text-xs italic">في حال اللجوء للدعم الفني للفصل في مشكلة ما، على الطرفين الالتزام بقبول الحكم الصادر.</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">4. رسوم الخدمة</h2>
          <p>يتقاضى تطبيق "صورني" رسوم خدمة بسيطة مقابل الربط بين الأطراف وتأمين المعاملات. يتم توضيح هذه الرسوم بوضوح قبل إتمام عملية الدفع.</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">5. النزاعات المالية</h2>
          <p>في حال وجود أي خلاف مالي، يلتزم التطبيق بالتحقيق في الأمر والوصول إلى حل عادل بناءً على الأدلة المقدمة من الطرفين (المستأجر والمؤجر، أو العميل والمحترف).</p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">6. التواصل مع قسم المالية</h2>
          <p>لأي استفسارات تتعلق بالمدفوعات أو طلبات الاسترجاع، يرجى مراسلتنا على: <span className="font-bold">info@suarni.com</span></p>
        </section>

        <p className="text-xs text-gray-500 mt-8">هذه البنود يتم تحديثها بشكل مستمر.</p>
      </div>
      
      <footer className="mt-10 pt-4 border-t border-black text-xs text-center">
        تاريخ آخر تحديث: مارس 2026
      </footer>
    </div>
  );
};

export default PaymentPolicy;
