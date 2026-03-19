import React, { useState } from 'react';
import { 
  Camera, 
  Video, 
  Mic2, 
  Lightbulb, 
  Clapperboard, 
  PenTool, 
  Scissors, 
  MapPin, 
  Menu,
  X,
  Apple,
  Play
} from 'lucide-react';

// --- Constants ---
const SPECIALTIES = [
  { id: '1', title: 'التصوير الفوتوغرافي', icon: <Camera size={16} />, description: 'توثيق اللحظات بأعلى جودة فنية.' },
  { id: '2', title: 'التصوير السينمائي', icon: <Video size={16} />, description: 'صناعة أفلام تحكي قصصاً لا تُنسى.' },
  { id: '3', title: 'المونتاج والتحرير', icon: <Scissors size={16} />, description: 'بناء القصة من خلال التحرير الإبداعي.' },
  { id: '4', title: 'هندسة الصوت', icon: <Mic2 size={16} />, description: 'تجربة سمعية غامرة ونقية.' },
  { id: '5', title: 'الإضاءة السينمائية', icon: <Lightbulb size={16} />, description: 'رسم المشهد بالضوء والظلال.' },
  { id: '6', title: 'الإخراج الفني', icon: <Clapperboard size={16} />, description: 'رؤية إبداعية تقود العمل للنجاح.' },
  { id: '7', title: 'كتابة السيناريو', icon: <PenTool size={16} />, description: 'تحويل الأفكار إلى نصوص سينمائية.' },
  { id: '8', title: 'المكياج السينمائي', icon: <Scissors size={16} />, description: 'تحويل الشخصيات بلمسات احترافية.' },
];

const DownloadButtons = () => (
  <div className="flex gap-2 justify-center">
    <button className="basic-button flex items-center gap-1">
      <Apple size={16} />
      <span>تحميل للايفون</span>
    </button>
    <button className="basic-button flex items-center gap-1">
      <Play size={16} />
      <span>تحميل للاندرويد</span>
    </button>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'الرئيسية', id: 'hero' },
    { name: 'التخصصات', id: 'specialties' },
    { name: 'تأجير المعدات', id: 'rental' },
    { name: 'الخريطة', id: 'map' },
    { name: 'من نحن', id: 'footer' }
  ];

  return (
    <nav className="border-b border-black p-2">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">صورني</div>
        <div className="hidden md:flex gap-4">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="text-blue-700 underline">{item.name}</a>
          ))}
        </div>
        <button className="md:hidden border border-black p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 mt-2 border-t border-black pt-2">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="text-blue-700 underline" onClick={() => setIsOpen(false)}>{item.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default function App() {
  return (
    <div className="p-2">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="py-10 text-center border-b border-black">
        <h1 className="text-2xl font-bold mb-2">تطبيق صورني - سوق الإعلام المتكامل</h1>
        <p className="mb-4">من الفكرة إلى الشاشة، تطبيق صورني يجمع لك أفضل المحترفين وأحدث المعدات.</p>
        <DownloadButtons />
        <p className="mt-4 text-xs">انضم إلى +50,000 محترف في الوطن العربي</p>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-10 border-b border-black">
        <h2 className="text-xl font-bold mb-6 text-center">كل التخصصات في مكان واحد</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SPECIALTIES.map(item => (
            <div key={item.id} className="p-2 border border-black">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-10 border-b border-black">
        <h2 className="text-xl font-bold mb-4">احجز موقعك بكل دقة</h2>
        <p className="mb-4">تخلص من عناء البحث والتنسيق. حدد موقع التصوير، طلب المحترفين، أو استئجار المعدات الأقرب إليك.</p>
        <ul className="list-disc list-inside mb-6">
          <li>تحديد دقيق لمواقع التصوير والعمل.</li>
          <li>البحث عن أقرب المحترفين المتاحين في منطقتك.</li>
          <li>توفير الوقت والجهد في اللوجستيات.</li>
        </ul>
        <div className="w-full h-40 bg-white border border-black flex items-center justify-center">
          <span>[خريطة هنا]</span>
        </div>
      </section>

      {/* Rental */}
      <section id="rental" className="py-10 border-b border-black">
        <h2 className="text-xl font-bold mb-6 text-center">تأجير المعدات بذكاء</h2>
        <div className="grid grid-cols-1 gap-2 mb-6">
          {[
            { title: "كاميرات احترافية", price: "تبدأ من 200 ر.س" },
            { title: "عدسات سينمائية", price: "تبدأ من 150 ر.س" },
            { title: "معدات إضاءة", price: "تبدأ من 100 ر.س" }
          ].map((item, i) => (
            <div key={i} className="p-2 border border-black text-center">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm mb-2">{item.price}</p>
              <button className="basic-button text-xs">عرض التفاصيل</button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">حمل التطبيق الآن لتصفح آلاف المعدات</p>
          <DownloadButtons />
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-6 text-center">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">صورني</h4>
            <p className="text-xs">المنصة الرائدة في الشرق الأوسط لربط المبدعين وتوفير حلول الإنتاج الإعلامي.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">روابط</h4>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#hero" className="underline">الرئيسية</a>
              <a href="#specialties" className="underline">التخصصات</a>
              <a href="#rental" className="underline">تأجير</a>
              <a href="#map" className="underline">الخريطة</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">حمل التطبيق</h4>
            <DownloadButtons />
          </div>
        </div>
        <div className="text-[10px] border-t border-black pt-4">
          © 2026 صورني. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
