import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Video, 
  Mic2, 
  Lightbulb, 
  Clapperboard, 
  PenTool, 
  Scissors, 
  MapPin, 
  Search, 
  Star, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  Globe,
  Settings,
  Headphones,
  MonitorPlay,
  Apple,
  Play
} from 'lucide-react';

// --- Types ---
interface Specialty {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: 'red' | 'green' | 'blue';
  description: string;
}

// --- Constants ---
const SPECIALTIES: Specialty[] = [
  { id: '1', title: 'التصوير الفوتوغرافي', icon: <Camera />, color: 'red', description: 'توثيق اللحظات بأعلى جودة فنية.' },
  { id: '2', title: 'التصوير السينمائي', icon: <Video />, color: 'green', description: 'صناعة أفلام تحكي قصصاً لا تُنسى.' },
  { id: '3', title: 'المونتاج والتحرير', icon: <Scissors />, color: 'blue', description: 'بناء القصة من خلال التحرير الإبداعي.' },
  { id: '4', title: 'هندسة الصوت', icon: <Mic2 />, color: 'red', description: 'تجربة سمعية غامرة ونقية.' },
  { id: '5', title: 'الإضاءة السينمائية', icon: <Lightbulb />, color: 'green', description: 'رسم المشهد بالضوء والظلال.' },
  { id: '6', title: 'الإخراج الفني', icon: <Clapperboard />, color: 'blue', description: 'رؤية إبداعية تقود العمل للنجاح.' },
  { id: '7', title: 'كتابة السيناريو', icon: <PenTool />, color: 'red', description: 'تحويل الأفكار إلى نصوص سينمائية.' },
  { id: '8', title: 'المكياج السينمائي', icon: <Scissors />, color: 'green', description: 'تحويل الشخصيات بلمسات احترافية.' },
];

// --- Shared Components ---

const DownloadButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
      <Apple className="w-6 h-6 fill-current" />
      <div className="text-right">
        <div className="text-[10px] leading-none opacity-60">حمل من</div>
        <div className="text-sm font-black leading-none mt-1">App Store</div>
      </div>
    </button>
    <button className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all">
      <Play className="w-6 h-6 fill-current" />
      <div className="text-right">
        <div className="text-[10px] leading-none opacity-60">حمل من</div>
        <div className="text-sm font-black leading-none mt-1">Google Play</div>
      </div>
    </button>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', id: 'hero' },
    { name: 'التخصصات', id: 'specialties' },
    { name: 'تأجير المعدات', id: 'rental' },
    { name: 'الخريطة', id: 'map' },
    { name: 'من نحن', id: 'footer' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-rgb-red via-rgb-green to-rgb-blue rounded-lg flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center font-black text-xl tracking-tighter">
              ص
            </div>
          </div>
          <span className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            صورني
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm font-bold text-white/70 hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <DownloadButtons className="scale-90" />
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-lg font-bold text-white/70 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <DownloadButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rgb-red/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rgb-blue/20 blur-[120px] rounded-full animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rgb-green/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-black tracking-widest uppercase text-white/60">
              تطبيق صورني - الجيل القادم من الإنتاج الإعلامي
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
              سوق <span className="text-rgb-red text-glow-red">الإعلام</span> المتكامل <br />
              في <span className="text-rgb-green text-glow-green">قبضة</span> يدك
            </h1>
            <p className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              من الفكرة إلى الشاشة، تطبيق صورني يجمع لك أفضل المحترفين وأحدث المعدات مع ميزة الحجز الجغرافي الدقيق.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <DownloadButtons />
            <div className="flex items-center gap-4 text-white/40 text-sm font-bold">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="User" />
                ))}
              </div>
              <span>انضم إلى +50,000 محترف في الوطن العربي</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Icons Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[10%]"><Camera className="w-12 h-12 text-rgb-red" /></motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[20%] right-[10%]"><Mic2 className="w-12 h-12 text-rgb-blue" /></motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[60%] left-[15%]"><Lightbulb className="w-10 h-10 text-rgb-green" /></motion.div>
      </div>
    </section>
  );
};

const SpecialtiesSection = () => {
  return (
    <section id="specialties" className="py-32 relative bg-grid-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black mb-6">
              كل التخصصات <br />
              <span className="text-white/40 italic">في مكان واحد</span>
            </h2>
            <p className="text-xl text-white/60 font-medium">
              لا يهم ما هو تخصصك في عالم الميديا، تطبيق صورني قام بتغطية كل شيء لضمان تجربة إنتاج سلسة واحترافية.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-rgb-red rounded-full" />
            <div className="w-12 h-1 bg-rgb-green rounded-full" />
            <div className="w-12 h-1 bg-rgb-blue rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative overflow-hidden`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${
                item.color === 'red' ? 'bg-rgb-red/10 text-rgb-red glow-red' :
                item.color === 'green' ? 'bg-rgb-green/10 text-rgb-green glow-green' :
                'bg-rgb-blue/10 text-rgb-blue glow-blue'
              }`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">{item.description}</p>
              
              {/* RGB Corner Accent */}
              <div className={`absolute -bottom-10 -left-10 w-20 h-20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity ${
                item.color === 'red' ? 'bg-rgb-red' :
                item.color === 'green' ? 'bg-rgb-green' :
                'bg-rgb-blue'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section id="map" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              احجز <span className="text-rgb-blue text-glow-blue">موقعك</span> <br />
              بكل دقة
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">
              تخلص من عناء البحث والتنسيق. من خلال خريطتنا التفاعلية في تطبيق صورني، يمكنك تحديد موقع التصوير، طلب المحترفين، أو استئجار المعدات الأقرب إليك بضغطة زر.
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: <MapPin className="text-rgb-red" />, text: "تحديد دقيق لمواقع التصوير والعمل." },
                { icon: <Search className="text-rgb-green" />, text: "البحث عن أقرب المحترفين المتاحين في منطقتك." },
                { icon: <Zap className="text-rgb-blue" />, text: "توفير الوقت والجهد في اللوجستيات." }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mock Map UI */}
            <div className="aspect-square rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1000/1000')] opacity-30 grayscale contrast-125" />
              
              {/* Map UI Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Animated Map Pins */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 left-1/3 p-3 bg-rgb-red rounded-full shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              >
                <Camera className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/2 right-1/4 p-3 bg-rgb-green rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]"
              >
                <Video className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-1/3 left-1/4 p-3 bg-rgb-blue rounded-full shadow-[0_0_20px_rgba(0,0,255,0.5)]"
              >
                <Mic2 className="w-6 h-6 text-white" />
              </motion.div>

              {/* Search Bar Mockup */}
              <div className="absolute top-8 left-8 right-8 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-white/40" />
                  <span className="text-white/40">ابحث عن موقع تصوير...</span>
                </div>
                <Settings className="w-5 h-5 text-white/40" />
              </div>

              {/* Card Mockup */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white/10 overflow-hidden">
                  <img src="https://picsum.photos/seed/studio/200/200" alt="Studio" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-lg">استوديو الأضواء</h4>
                  <p className="text-white/40 text-sm font-bold">على بعد 2.5 كم • متاح الآن</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-rgb-green text-rgb-green" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RentalSection = () => {
  return (
    <section id="rental" className="py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6">تأجير المعدات <span className="text-rgb-green">بذكاء</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
            لا تشتري معدات باهظة الثمن لمشروع واحد. استأجر أحدث الكاميرات، العدسات، وأدوات الإضاءة من المحترفين القريبين منك عبر تطبيق صورني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "كاميرات احترافية", price: "تبدأ من 200 ر.س", img: "https://picsum.photos/seed/cam/400/300" },
            { title: "عدسات سينمائية", price: "تبدأ من 150 ر.س", img: "https://picsum.photos/seed/lens/400/300" },
            { title: "معدات إضاءة", price: "تبدأ من 100 ر.س", img: "https://picsum.photos/seed/light/400/300" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-black border border-white/10 rounded-[32px] overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold">
                  متاح للإيجار
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-white/40 mb-6 font-bold">{item.price}</p>
                <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white hover:text-black transition-all">
                  عرض التفاصيل
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-white/40 font-bold">حمل التطبيق الآن لتصفح آلاف المعدات</p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-rgb-red via-rgb-green to-rgb-blue rounded-lg flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-black rounded-[5px] flex items-center justify-center font-black text-sm">ص</div>
              </div>
              <span className="text-2xl font-black">صورني</span>
            </div>
            <p className="text-white/40 leading-relaxed font-medium">
              المنصة الرائدة في الشرق الأوسط لربط المبدعين وتوفير حلول الإنتاج الإعلامي المتكاملة عبر تطبيق صورني.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-6">الروابط</h4>
            <ul className="space-y-4 text-white/40 font-bold">
              <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">التخصصات</a></li>
              <li><a href="#rental" className="hover:text-white transition-colors">تأجير المعدات</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">الخريطة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">الدعم</h4>
            <ul className="space-y-4 text-white/40 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6">حمل التطبيق</h4>
            <p className="text-sm text-white/40 mb-6 font-bold">ابدأ رحلتك الإبداعية اليوم مع تطبيق صورني.</p>
            <DownloadButtons className="flex-col !items-start" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-white/20 text-sm font-bold">
          <p>© 2026 صورني. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Globe className="w-5 h-5 cursor-pointer hover:text-white" />
            <ShieldCheck className="w-5 h-5 cursor-pointer hover:text-white" />
            <Headphones className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SpecialtiesSection />
      <MapSection />
      <RentalSection />
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rgb-red/20 via-rgb-green/20 to-rgb-blue/20 opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-[48px] p-12 md:p-20 text-center shadow-2xl">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">هل أنت مستعد <br /> <span className="text-white/40">لبدء مشروعك القادم؟</span></h2>
            <p className="text-2xl text-white/60 mb-12 font-medium">انضم إلى آلاف المبدعين الذين يثقون في تطبيق صورني لتحويل رؤيتهم إلى واقع.</p>
            <div className="flex flex-col items-center justify-center gap-8">
              <DownloadButtons />
              <p className="text-white/20 font-bold">متوفر مجاناً على جميع المتاجر</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
