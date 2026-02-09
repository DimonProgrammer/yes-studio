import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, Clock, TrendingUp, ChevronDown, MapPin, Phone, MessageCircle, Check, Gift, Sparkles, BookOpen, Camera, Award, Banknote, Globe, Heart, UserCheck, Search, Lock, Play, Star, Quote } from 'lucide-react';
import { photos } from './src/photos';

/* ═══════════════════════════════════════════════════════
   YES STUDIO — Neon Luxe Landing
   Visual: Film grain, glow lines, glass cards, corner brackets
   CRO: Stats, urgency, sticky CTA, benefit-first copy
   ═══════════════════════════════════════════════════════ */

function LogoSVG({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 40" fill="none" className={className}>
      <g className="fill-gold">
        <path d="M30.6337 18.9208C25.3389 18.4107 21.1493 14.2231 20.6398 8.93282L19.78 0L18.9202 8.93282C18.4107 14.224 14.2211 18.4116 8.92635 18.9208L0 19.78L8.92635 20.6392C14.2211 21.1493 18.4107 25.3369 18.9202 30.6273L19.78 39.56L20.6398 30.6273C21.1493 25.336 25.3389 21.1485 30.6337 20.6392L39.56 19.78L30.6337 18.9208Z"/>
        <path d="M59.7836 23.16L49.3036 5.72001H56.3436L63.0236 17L69.6636 5.72001H76.6636L66.0636 23.32V34.28H59.7836V23.16Z"/>
        <path d="M77.4233 5.72001H98.7833V11H83.7033V17.12H97.5433V22H83.7033V29H99.1033V34.28H77.4233V5.72001Z"/>
        <path d="M106.001 24.8C106.001 25.76 106.174 26.5733 106.521 27.24C106.867 27.9067 107.321 28.4533 107.881 28.88C108.467 29.28 109.147 29.5867 109.921 29.8C110.694 29.9867 111.494 30.08 112.321 30.08C112.881 30.08 113.481 30.04 114.121 29.96C114.761 29.8533 115.361 29.6667 115.921 29.4C116.481 29.1333 116.947 28.7733 117.321 28.32C117.694 27.84 117.881 27.24 117.881 26.52C117.881 25.7467 117.627 25.12 117.121 24.64C116.641 24.16 116.001 23.76 115.201 23.44C114.401 23.12 113.494 22.84 112.481 22.6C111.467 22.36 110.441 22.0933 109.401 21.8C108.334 21.5333 107.294 21.2133 106.281 20.84C105.267 20.44 104.361 19.9333 103.561 19.32C102.761 18.7067 102.107 17.9467 101.601 17.04C101.121 16.1067 100.881 14.9867 100.881 13.68C100.881 12.2133 101.187 10.9467 101.801 9.88001C102.441 8.78668 103.267 7.88001 104.281 7.16001C105.294 6.44001 106.441 5.90668 107.721 5.56001C109.001 5.21335 110.281 5.04001 111.561 5.04001C113.054 5.04001 114.481 5.21335 115.841 5.56001C117.227 5.88001 118.454 6.41334 119.521 7.16001C120.587 7.90668 121.427 8.86668 122.041 10.04C122.681 11.1867 123.001 12.5867 123.001 14.24H116.921C116.867 13.3867 116.681 12.68 116.361 12.12C116.067 11.56 115.667 11.12 115.161 10.8C114.654 10.48 114.067 10.2533 113.401 10.12C112.761 9.98668 112.054 9.92001 111.281 9.92001C110.774 9.92001 110.267 9.97335 109.761 10.08C109.254 10.1867 108.787 10.3733 108.361 10.64C107.961 10.9067 107.627 11.24 107.361 11.64C107.094 12.04 106.961 12.5467 106.961 13.16C106.961 13.72 107.067 14.1733 107.281 14.52C107.494 14.8667 107.907 15.1867 108.521 15.48C109.161 15.7733 110.027 16.0667 111.121 16.36C112.241 16.6533 113.694 17.0267 115.481 17.48C116.014 17.5867 116.747 17.7867 117.681 18.08C118.641 18.3467 119.587 18.7867 120.521 19.4C121.454 20.0133 122.254 20.84 122.921 21.88C123.614 22.8933 123.961 24.2 123.961 25.8C123.961 27.1067 123.707 28.32 123.201 29.44C122.694 30.56 121.934 31.5333 120.921 32.36C119.934 33.16 118.694 33.7867 117.201 34.24C115.734 34.6933 114.027 34.92 112.081 34.92C110.507 34.92 108.974 34.72 107.481 34.32C106.014 33.9467 104.707 33.3467 103.561 32.52C102.441 31.6933 101.547 30.64 100.881 29.36C100.214 28.08 99.8941 26.56 99.9208 24.8H106.001Z"/>
      </g>
      <g className="fill-silk">
        <path d="M130.541 34.9146L132.834 24.6173H133.53C133.434 25.6136 133.387 26.4393 133.387 27.0944C133.387 28.9642 133.98 30.4859 135.168 31.6596C136.369 32.8333 137.931 33.4202 139.856 33.4202C141.644 33.4202 143.002 32.8743 143.93 31.7824C144.858 30.677 145.322 29.4077 145.322 27.9747C145.322 27.0466 145.11 26.2005 144.687 25.4362C144.046 24.3034 142.333 22.3108 139.549 19.4584C138.198 18.0936 137.331 17.0768 136.949 16.4081C136.321 15.3026 136.007 14.1425 136.007 12.9279C136.007 10.9899 136.73 9.33166 138.177 7.95322C139.624 6.57478 141.48 5.88556 143.745 5.88556C144.51 5.88556 145.233 5.96062 145.915 6.11075C146.338 6.19264 147.11 6.4656 148.229 6.92963C149.02 7.24353 149.457 7.41413 149.539 7.44142C149.73 7.48237 149.942 7.50284 150.174 7.50284C150.569 7.50284 150.911 7.40048 151.197 7.19576C151.484 6.99104 151.818 6.55431 152.2 5.88556H152.978L150.849 15.0979H150.153C150.208 14.279 150.235 13.6171 150.235 13.1121C150.235 11.4607 149.689 10.1096 148.597 9.0587C147.505 8.00781 146.066 7.48237 144.278 7.48237C142.858 7.48237 141.705 7.89863 140.818 8.73115C139.931 9.56367 139.487 10.5258 139.487 11.6177C139.487 12.573 139.767 13.4874 140.327 14.3609C140.9 15.2207 142.203 16.6333 144.237 18.5986C146.284 20.5502 147.608 22.0788 148.208 23.1843C148.809 24.2761 149.109 25.443 149.109 26.685C149.109 28.0907 148.734 29.4555 147.983 30.7793C147.246 32.0895 146.182 33.1063 144.789 33.8296C143.397 34.553 141.876 34.9146 140.224 34.9146C139.405 34.9146 138.641 34.8396 137.931 34.6894C137.222 34.5393 136.089 34.1708 134.533 33.584C134.001 33.3793 133.557 33.2769 133.202 33.2769C132.397 33.2769 131.769 33.8228 131.319 34.9146H130.541Z"/>
        <path d="M155.612 6.52019H176.698L174.426 13.8901H173.648C173.907 12.8119 174.037 11.8497 174.037 11.0035C174.037 10.0072 173.73 9.25659 173.116 8.75162C172.652 8.36948 171.457 8.17841 169.533 8.17841H167.343L161.856 27.2991C161.16 29.7011 160.812 31.1819 160.812 31.7415C160.812 32.2601 161.03 32.69 161.467 33.0312C161.904 33.3588 162.675 33.5226 163.78 33.5226H164.722L164.477 34.28H152.398L152.623 33.5226H153.156C154.22 33.5226 155.039 33.352 155.612 33.0108C156.008 32.7787 156.363 32.3625 156.677 31.762C157.004 31.1478 157.455 29.8581 158.028 27.8928L163.78 8.17841H162.122C160.525 8.17841 159.236 8.38313 158.253 8.79256C157.284 9.202 156.499 9.79568 155.899 10.5736C155.298 11.3515 154.807 12.457 154.425 13.8901H153.667L155.612 6.52019Z"/>
        <path d="M176.548 6.52019H188.278L188.053 7.27765C186.852 7.30494 185.992 7.42095 185.474 7.62567C184.969 7.81674 184.532 8.16476 184.164 8.66973C183.809 9.1747 183.433 10.1096 183.038 11.4744L180.192 21.3009C179.687 23.0478 179.387 24.1942 179.291 24.7401C179.128 25.6136 179.046 26.4256 179.046 27.1763C179.046 28.8277 179.66 30.2266 180.888 31.373C182.116 32.5058 183.761 33.0722 185.822 33.0722C187.173 33.0722 188.381 32.8197 189.445 32.3147C190.51 31.7961 191.417 31.0796 192.168 30.1652C192.932 29.2371 193.628 27.9883 194.256 26.4188C194.884 24.8357 195.437 23.2389 195.914 21.6284L198.371 13.1531C198.985 11.0376 199.292 9.6592 199.292 9.01775C199.292 8.56737 199.081 8.18523 198.658 7.87133C198.248 7.54378 197.409 7.34589 196.14 7.27765L196.365 6.52019H205.188L204.963 7.27765C203.926 7.27765 203.175 7.38001 202.711 7.58472C202.261 7.77579 201.865 8.13064 201.524 8.64926C201.183 9.15423 200.8 10.1437 200.377 11.6177L197.368 21.915C196.399 25.2588 195.485 27.729 194.625 29.3258C193.765 30.909 192.516 32.2397 190.878 33.3178C189.254 34.3824 187.234 34.9146 184.819 34.9146C182.035 34.9146 179.789 34.1299 178.083 32.5604C176.377 30.9772 175.525 29.1689 175.525 27.1353C175.525 26.3301 175.6 25.4703 175.75 24.5559C175.859 23.9554 176.125 22.9181 176.548 21.4442L179.291 12.0066C179.673 10.6419 179.865 9.63873 179.865 8.99728C179.865 8.49231 179.667 8.10334 179.271 7.83039C178.889 7.54378 177.913 7.35953 176.343 7.27765L176.548 6.52019Z"/>
        <path d="M205.755 7.27765L206 6.52019H214.865C218.618 6.52019 221.395 6.9501 223.197 7.80992C225.012 8.66973 226.458 10.0277 227.537 11.8838C228.615 13.7263 229.154 15.7052 229.154 17.8206C229.154 19.6358 228.84 21.4032 228.212 23.1229C227.598 24.8288 226.895 26.2005 226.104 27.2377C225.326 28.2613 224.125 29.3941 222.501 30.636C220.876 31.878 219.116 32.7992 217.219 33.3997C215.322 33.9866 212.954 34.28 210.115 34.28H198.364L198.63 33.5226C199.709 33.4953 200.432 33.3997 200.8 33.236C201.346 33.0039 201.749 32.69 202.008 32.2942C202.404 31.721 202.848 30.5678 203.339 28.8345L208.252 12.0476C208.634 10.7237 208.825 9.6865 208.825 8.93587C208.825 8.4036 208.648 7.99416 208.293 7.70756C207.938 7.42095 207.242 7.27765 206.205 7.27765H205.755ZM213.022 8.05558L207.003 28.8345C206.553 30.3904 206.328 31.3525 206.328 31.721C206.328 31.9394 206.396 32.1509 206.533 32.3557C206.683 32.5604 206.881 32.6969 207.126 32.7651C207.481 32.8879 208.054 32.9493 208.846 32.9493C210.989 32.9493 212.974 32.731 214.803 32.2942C216.646 31.8439 218.154 31.1819 219.327 30.3085C220.992 29.0392 222.323 27.2923 223.319 25.0677C224.316 22.8431 224.814 20.3114 224.814 17.4726C224.814 14.2654 224.05 11.8838 222.521 10.328C220.992 8.75844 218.761 7.97369 215.827 7.97369C215.103 7.97369 214.169 8.00099 213.022 8.05558Z"/>
        <path d="M238.503 33.5226L238.278 34.28H226.854L227.141 33.5226C228.287 33.4953 229.045 33.3997 229.413 33.236C230.014 33.0039 230.457 32.6832 230.744 32.2738C231.194 31.6323 231.658 30.4859 232.136 28.8345L236.967 12.0885C237.377 10.6964 237.581 9.64556 237.581 8.93587C237.581 8.58102 237.493 8.28077 237.315 8.03511C237.138 7.78944 236.865 7.6052 236.496 7.48237C236.142 7.34589 235.439 7.27765 234.388 7.27765L234.634 6.52019H245.361L245.136 7.27765C244.262 7.264 243.614 7.35953 243.191 7.56425C242.577 7.83721 242.106 8.22618 241.778 8.73115C241.464 9.23612 241.055 10.3552 240.55 12.0885L235.739 28.8345C235.302 30.3767 235.084 31.3594 235.084 31.7824C235.084 32.1236 235.166 32.4171 235.33 32.6627C235.507 32.8948 235.78 33.079 236.148 33.2155C236.531 33.3383 237.315 33.4407 238.503 33.5226Z"/>
        <path d="M261.035 5.88556C262.878 5.88556 264.509 6.28817 265.928 7.0934C267.348 7.88498 268.46 9.06552 269.265 10.635C270.07 12.1909 270.473 13.8082 270.473 15.4869C270.473 18.4621 269.606 21.5875 267.873 24.863C266.153 28.1248 263.901 30.6156 261.117 32.3352C258.333 34.0548 255.453 34.9146 252.478 34.9146C250.335 34.9146 248.541 34.4438 247.094 33.5021C245.661 32.5467 244.597 31.2911 243.9 29.7353C243.218 28.1794 242.877 26.6713 242.877 25.211C242.877 22.6179 243.498 20.0589 244.74 17.534C245.995 14.9955 247.49 12.8801 249.223 11.1878C250.956 9.48178 252.806 8.17158 254.771 7.25717C256.736 6.34277 258.824 5.88556 261.035 5.88556ZM260.339 7.19576C258.975 7.19576 257.637 7.53696 256.327 8.21935C255.03 8.8881 253.741 9.99358 252.458 11.5358C251.175 13.0644 250.022 15.0706 248.998 17.5545C247.742 20.6116 247.115 23.4982 247.115 26.2141C247.115 28.1521 247.613 29.8717 248.609 31.373C249.605 32.8606 251.134 33.6044 253.195 33.6044C254.437 33.6044 255.651 33.2974 256.839 32.6832C258.04 32.0691 259.288 31.0182 260.585 29.5305C262.209 27.6608 263.574 25.2792 264.679 22.3859C265.785 19.4789 266.338 16.7698 266.338 14.2585C266.338 12.4024 265.839 10.7647 264.843 9.3453C263.847 7.91227 262.346 7.19576 260.339 7.19576Z"/>
      </g>
    </svg>
  );
}

function MarkSVG({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M30.6337 18.9208C25.3389 18.4107 21.1493 14.2231 20.6398 8.93282L19.78 0L18.9202 8.93282C18.4107 14.224 14.2211 18.4116 8.92635 18.9208L0 19.78L8.92635 20.6392C14.2211 21.1493 18.4107 25.3369 18.9202 30.6273L19.78 39.56L20.6398 30.6273C21.1493 25.336 25.3389 21.1485 30.6337 20.6392L39.56 19.78L30.6337 18.9208Z"/>
    </svg>
  );
}

function HeritageLogoText({ className = '' }: { className?: string }) {
  return (
    <div className={`logo-heritage hidden items-center gap-2 ${className}`}>
      <MarkSVG className="w-5 h-5 text-gold" />
      <div className="flex flex-col leading-none">
        <span className="heritage-yes">Yes</span>
        <span className="heritage-studio">Studio</span>
      </div>
    </div>
  );
}

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  useEffect(() => {
    if (!inView) return;
    let c = 0;
    const inc = target / 60;
    const t = setInterval(() => {
      c += inc;
      if (c >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(c));
    }, 33);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString('ru-RU')}{suffix}</span>;
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-silk/10">
      <button onClick={onClick} className="w-full flex items-center justify-between py-6 md:py-7 text-left group cursor-pointer">
        <span className="font-display font-bold text-base md:text-lg text-silk group-hover:text-gold transition-colors pr-8">{q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'bg-gold border-gold rotate-180' : 'border-silk/20 group-hover:border-gold/50'}`}>
          <ChevronDown size={16} className={open ? 'text-noir' : 'text-umber'} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="font-body text-base text-umber leading-relaxed pb-7 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeJob, setActiveJob] = useState(0);
  const heroRef = useRef(null);
  const applyRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const { scrollYProgress: pageProgress } = useScroll();
  const applyInView = useInView(applyRef, { margin: '200px' });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const toForm = () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });

  const personalBrand = [
    { icon: Sparkles, title: 'Личный имидж', desc: 'Поможем сформировать уверенный и привлекательный имидж (укладки, мейки, одежда, аксессуары, стиль общения и поведения), который будет гармонировать с твоим характером.' },
    { icon: TrendingUp, title: 'Индивидуальная стратегия', desc: 'Разработаем уникальный план развития твоего личного бренда, который будет состоять из знаний, навыков, сильных качеств, стиля, особых фишек, идей и позиций.' },
    { icon: Gift, title: 'Бонус за первый месяц', desc: 'Ты получишь щедрый бонус к доходу за первые 30 дней работы. Это позволит быстро заработать и почувствовать финансовую свободу!' },
    { icon: Camera, title: 'Создание контента', desc: 'Бесплатно создадим профессиональный, привлекательный и запоминающийся фото и видео контент, который будет резонировать с твоими зрителями.' },
    { icon: BookOpen, title: 'Индивидуальное обучение', desc: 'Каждой модели предоставляется персональный куратор, который обучает всем тонкостям работы и будет сопровождать на всех этапах развития.' },
    { icon: Award, title: 'Карьерный рост', desc: 'Ты будешь участвовать в нашей программе карьерного развития, где есть повышения уровня, участия в специальных акциях и эксклюзивных шоу!' },
  ];

  const conditionItems = [
    { title: 'Работай когда удобно', desc: 'Ты сама выбираешь график. Минимум 4 часа в день. Можно совмещать с учёбой или основной работой.' },
    { title: 'Деньги каждый день', desc: 'Ежедневные или еженедельные выплаты на карту любого банка. Без задержек.' },
    { title: 'Полная конфиденциальность', desc: 'Работа на английских площадках для зарубежной аудитории. Тебя не увидят знакомые.' },
    { title: 'Только NON-NUDE', desc: 'Наши модели не раздеваются. Позитивное онлайн-общение в дружеской атмосфере.' },
    { title: 'Оплачиваемая стажировка', desc: 'Попробуй несколько дней — мы оплатим стажировку, даже если решишь не продолжать.' },
    { title: 'Отпуск каждые 3 месяца', desc: 'Мы заботимся о балансе работы и отдыха. Регулярный оплачиваемый отдых.' },
  ];

  const jobs = [
    {
      title: 'Модель',
      icon: Camera,
      requirements: ['Только девушки', 'Возраст от 18 до 35 лет', 'Выработка часового норматива', 'Опрятный внешний вид'],
      conditions: ['График работы 5/2', 'Студия в центре города', 'Обучение, сопровождение'],
    },
    {
      title: 'Администратор',
      icon: UserCheck,
      requirements: ['Девушка от 20 до 30 лет', 'Стрессоустойчивость, пунктуальность, ответственность, доброжелательность, креативность, оперативность', 'Опыт в вебкам индустрии', 'Опытный пользователь ПК, знание фото и видео-редакторов приветствуется', 'Быстрая обучаемость', 'Знание английского языка приветствуется'],
      conditions: ['Высокий оклад от 70 000 рублей', 'Обучение', 'Комфортные рабочие места с современной техникой', 'Сменный график', 'Поиск моделей не входит в обязанности'],
      responsibilities: ['Обучение новых моделей', 'Наполнение анкет и их раскрутка', 'Анализ работы моделей', 'Контроль и соблюдение правил студии'],
    },
    {
      title: 'Агент',
      icon: Search,
      requirements: ['Поиск и привлечение моделей', 'Доведение соискателей до собеседования в студии', 'Коммуникабельность, ответственность', 'Опыт работы HR в вебкам индустрии станет большим преимуществом'],
      conditions: ['За каждую модель 20 000 рублей', 'При привлечении 5 моделей за месяц — дополнительный бонус 30 000 рублей', 'Свободный график', 'Моментальная выплата после того, как приведенная модель заработает первые деньги'],
    },
  ];

  const testimonials = [
    { name: 'Алина', tenure: '6 месяцев', quote: 'Стало спокойнее — я знаю, что завтра будут деньги. Наконец-то не считаю дни до зарплаты.', photo: photos.testimonials[0] },
    { name: 'Дарья', tenure: '3 месяца', quote: 'Наконец-то понятно, что делать. Куратор объясняет каждый шаг, не чувствуешь себя одной.', photo: photos.testimonials[1] },
    { name: 'Кристина', tenure: '1 год', quote: 'За первый месяц заработала больше, чем за 3 на прошлой работе. Сейчас — свободный график и путешествия.', photo: photos.testimonials[2] },
  ];

  const guarantees = [
    { icon: Shield, title: 'Только NON-NUDE', desc: 'Никакого обнажения. Позитивное онлайн-общение.' },
    { icon: Banknote, title: 'Ежедневные выплаты', desc: 'На карту любого банка, без задержек.' },
    { icon: BookOpen, title: 'Оплачиваемая стажировка', desc: 'Получаешь деньги даже в период обучения.' },
    { icon: Lock, title: 'Конфиденциальность', desc: 'Английские площадки. Тебя не увидят знакомые.' },
    { icon: Clock, title: 'Свободный график', desc: 'Минимум 4 часа. Совмещай с учёбой.' },
    { icon: Heart, title: 'Личный куратор', desc: 'Поддержка и обучение на каждом этапе.' },
  ];

  const transformationData = {
    before: [
      { label: 'Доход', value: '35 000 ₽/мес' },
      { label: 'График', value: '5/2 с 9 до 18' },
      { label: 'Отдых', value: 'Отпуск раз в год' },
      { label: 'Ощущения', value: 'Нет уверенности в завтрашнем дне' },
    ],
    after: [
      { label: 'Доход', value: '180 000 ₽/мес' },
      { label: 'График', value: 'Свободный, от 4ч/день' },
      { label: 'Отдых', value: '3 поездки за полгода' },
      { label: 'Ощущения', value: '«Я наконец-то чувствую, что могу всё»' },
    ],
  };

  const successStories = [
    {
      name: 'Кристина',
      age: 23,
      tenure: '1.5 года',
      before: 'Офис-менеджер, 40 000 ₽/мес',
      after: '250 000 ₽/мес',
      quote: 'Первые 2 недели было страшно. Потом куратор помог разобраться, и уже на 3-й неделе я заработала больше, чем за месяц в офисе.',
      photo: photos.successStories[0],
    },
    {
      name: 'Мария',
      age: 21,
      tenure: '8 месяцев',
      before: 'Студентка, подработки',
      after: '180 000 ₽/мес',
      quote: 'Совмещаю с учёбой на 4 курсе. Свободный график — это то, чего мне не хватало. Теперь могу позволить себе то, о чём раньше мечтала.',
      photo: photos.successStories[1],
    },
    {
      name: 'Анна',
      age: 25,
      tenure: '2 года',
      before: 'Продавец-консультант, 50 000 ₽/мес',
      after: '300 000 ₽/мес',
      quote: 'Пришла, когда студии было 5 лет. Сейчас я — топ-модель. Купила машину, путешествую каждый сезон. Главное — не бояться начать.',
      photo: photos.successStories[2],
    },
  ];

  const faqData = [
    { q: 'Сколько я буду зарабатывать?', a: 'Средняя зарплата — 150 000 ₽. На старте — от 70 000 ₽ при работе от 4 часов. Топ-модели — от 300 000 ₽. Ограничений нет.' },
    { q: 'В чём заключается работа стрим-моделью?', a: 'Онлайн-общение с пользователями на английских площадках. Формат исключительно NON-NUDE — наши модели не раздеваются. Позитивная, дружеская атмосфера в прямом эфире.' },
    { q: 'Нужно ли за что-то платить?', a: 'Нет. Обучение бесплатное. Оборудование предоставляем. Никаких взносов. Более того — мы оплачиваем стажировку.' },
    { q: 'У меня нет опыта, есть ли обучение?', a: 'Да! Персональный куратор обучает всем тонкостям работы и сопровождает на всех этапах развития. Обучение бесплатное.' },
    { q: 'Стриминг — это законно и безопасно?', a: 'Полностью. Студия работает официально. Мы не являемся продавцом интимных услуг — работа носит развлекательный характер.' },
    { q: 'Я не хочу, чтобы меня увидели жители моей страны', a: 'Работа на английских площадках для зарубежной аудитории. Полная конфиденциальность и защита персональных данных.' },
    { q: 'Модельная внешность обязательна?', a: 'Нет. Главное — опрятный вид, коммуникабельность и желание учиться. Мы помогаем сформировать имидж через программу Personal Brand.' },
    { q: 'Нужно ли знать английский язык?', a: 'Нет — установлен автоматический переводчик. Уже через год работы модель свободно разговаривает на любые темы без переводчика.' },
    { q: 'Как происходят выплаты?', a: 'Каждый день или раз в неделю — на выбор. На карту любого банка. Без задержек.' },
    { q: 'Получится ли совмещать с основной работой?', a: 'Да! Ты сама выбираешь график. Минимум 4 часа в день. Многие совмещают с учёбой или другой работой.' },
    { q: 'Что с отпусками?', a: 'Отпуск каждые 3 месяца. Мы заботимся о балансе работы и отдыха наших моделей.' },
    { q: 'Я могу доверять вам свои личные данные?', a: 'Да. Мы гарантируем полную конфиденциальность. Все персональные данные защищены и не передаются третьим лицам.' },
    { q: 'Чем Yes Studio отличается от других студий?', a: 'Мы единственная студия в Москве с программой Personal Brand. Каждой модели создают индивидуальный образ, стиль и стратегию продвижения — это не просто обучение, а полноценная система роста. Средний доход наших моделей — 150 000 ₽.' },
    { q: 'Что если мне не понравится?', a: 'Стажировка длится 3–5 дней и полностью оплачивается. Если решишь не продолжать — заберёшь деньги за отработанное время и уйдёшь. Никаких обязательств, штрафов или контрактов.' },
  ];

  const currentJob = jobs[activeJob];

  return (
    <>
      {/* ═══════════ SCROLL PROGRESS BAR ═══════════ */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[60] origin-left"
        style={{ scaleX: pageProgress }}
      />

      <div className="overflow-x-hidden bg-noir text-silk grain">

        {/* ═══════════ NAV ═══════════ */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-noir/95 backdrop-blur-md border-b border-silk/[0.08]' : 'bg-gradient-to-b from-noir/60 to-transparent'}`}>
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex items-center justify-between h-16 md:h-20">
              <a href="#" className="block">
                <LogoSVG className="logo-default h-5 md:h-6" />
                <HeritageLogoText />
              </a>

              <div className="hidden md:flex items-center gap-8">
                <a href="#why" className="font-body text-sm text-silk/60 hover:text-silk transition-colors">О нас</a>
                <a href="#conditions" className="font-body text-sm text-silk/60 hover:text-silk transition-colors">Условия</a>
                <a href="#jobs" className="font-body text-sm text-silk/60 hover:text-silk transition-colors">Вакансии</a>
                <a href="#faq" className="font-body text-sm text-silk/60 hover:text-silk transition-colors">FAQ</a>
                <a href="tel:+79282348339" className="font-body text-sm text-silk/60 hover:text-silk flex items-center gap-1.5">
                  <Phone size={13} className="text-gold" />
                  +7 (928) 234-83-39
                </a>
                <button onClick={toForm} className="bg-gold hover:bg-gold-dark text-noir px-6 py-2.5 rounded-full font-display font-bold text-xs tracking-[0.1em] uppercase transition-colors cursor-pointer">
                  Оставить заявку
                </button>
              </div>

              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer">
                <div className={`w-5 h-[1.5px] bg-silk transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
                <div className={`w-5 h-[1.5px] bg-silk transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-[1.5px] bg-silk transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-noir border-t border-silk/[0.08] overflow-hidden">
                <div className="px-5 py-6 space-y-4">
                  <a href="#why" onClick={() => setMenuOpen(false)} className="block font-body text-base text-silk/70">О нас</a>
                  <a href="#conditions" onClick={() => setMenuOpen(false)} className="block font-body text-base text-silk/70">Условия</a>
                  <a href="#jobs" onClick={() => setMenuOpen(false)} className="block font-body text-base text-silk/70">Вакансии</a>
                  <a href="#faq" onClick={() => setMenuOpen(false)} className="block font-body text-base text-silk/70">FAQ</a>
                  <button onClick={() => { setMenuOpen(false); toForm(); }} className="w-full bg-gold text-noir py-3 rounded-full font-display font-bold text-xs tracking-[0.1em] uppercase cursor-pointer">Оставить заявку</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>


        {/* ═══════════ HERO ═══════════ */}
        <section ref={heroRef} className="relative min-h-[100svh] flex flex-col lg:flex-row">
          <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-between px-5 md:px-10 lg:px-16 pt-24 md:pt-28 pb-8 lg:pb-14">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <h1 className="font-body text-xs tracking-[0.25em] uppercase text-umber">
                Вебкам студия в Москве — Yes Studio
              </h1>
            </motion.div>

            <div className="my-auto py-8 lg:py-10">
              <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.88] tracking-tight text-silk mb-6"
              >
                ЕДИНСТВЕННАЯ
                <br /><span className="font-serif font-normal text-gold uppercase text-[1.05em]">non-nude</span> СТУДИЯ
                <br />В МОСКВЕ
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
                className="font-body text-lg md:text-xl text-silk/60 leading-relaxed max-w-md mb-8"
              >
                Зарабатывай на общении от <span className="text-silk font-medium">70 000 ₽</span> в месяц — без раздевания, с личным куратором и ежедневными выплатами. Средняя зарплата — <span className="text-gold font-medium">150 000 ₽</span>.
              </motion.p>

              {/* Stats */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-6 md:gap-10 mb-10">
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-silk"><Counter target={7} /></p>
                  <p className="font-body text-xs text-umber tracking-wide uppercase">лет на рынке</p>
                </div>
                <div className="w-px h-8 bg-silk/10" />
                <div>
                  <p className="font-display font-bold text-2xl md:text-3xl text-gold"><Counter target={150} suffix="K ₽" /></p>
                  <p className="font-body text-xs text-umber tracking-wide uppercase">средняя зп</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4">
                <button onClick={toForm} className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-noir px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Начать зарабатывать
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://t.me/studio_yes" target="_blank" rel="noopener"
                  className="group inline-flex items-center justify-center gap-3 border border-silk/20 hover:border-gold/50 text-silk px-8 py-4 font-display font-bold text-sm tracking-[0.1em] uppercase transition-all">
                  <MessageCircle size={16} className="text-gold" />
                  Telegram
                </a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-silk/50">
              <div className="flex items-center gap-1.5"><MapPin size={12} className="text-gold" /><span className="font-body text-xs">г. Москва</span></div>
              <div className="flex items-center gap-1.5"><Shield size={12} className="text-gold" /><span className="font-body text-xs">Только NON-NUDE</span></div>
              <div className="flex items-center gap-1.5"><Clock size={12} className="text-gold" /><span className="font-body text-xs">Выплаты каждый день</span></div>
            </motion.div>
          </div>

          <div className="relative w-full lg:w-[45%] h-[50vh] lg:h-auto overflow-hidden">
            <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
              <img src={photos.hero} alt="Модель Yes Studio" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/80 to-gold/20" />
          </div>
        </section>

        <div className="glow-line" />


        {/* ═══════════ VIDEO BLOCK ═══════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10 md:mb-14">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Наша студия</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk">
                ЗАГЛЯНИ <span className="font-serif font-normal text-gold uppercase">в нашу</span>
                <br />СТУДИЮ
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden corner-brackets group cursor-pointer">
                {/* TODO: заменить на реальный видео-плеер */}
                <img src={photos.videoPoster} alt="Видео о студии Yes Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all group-hover:scale-110">
                    <Play size={32} className="text-noir ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-sm text-silk/40 text-center mt-6 max-w-lg mx-auto italic">
                Видео снято в нашей студии в Ростове, в Москве условия и подход к моделям такие же
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button onClick={toForm} className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-noir px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Хочу так же
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://t.me/studio_yes" target="_blank" rel="noopener"
                  className="group inline-flex items-center justify-center gap-3 border border-silk/20 hover:border-gold/50 text-silk px-8 py-4 font-display font-bold text-sm tracking-[0.1em] uppercase transition-all">
                  <MessageCircle size={16} className="text-gold" />
                  Обсудить работу
                </a>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ PERSONAL BRAND ═══════════ */}
        <section id="why" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
            <MarkSVG className="w-[500px] h-[500px] text-gold opacity-[0.02]" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <Reveal>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Personal Brand</p>
                <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.92] tracking-tight text-silk mb-5">
                  ПОЧЕМУ МЫ <span className="font-serif font-normal text-gold uppercase">лучшие</span>
                  <br />НА РЫНКЕ?
                </h2>
                <p className="font-body text-base md:text-lg text-silk/60 leading-relaxed">
                  В большинстве студий модель просто сажают перед камерой — и дальше сама. Нет образа, нет стратегии, нет поддержки. Результат — 30–40 тысяч и выгорание через пару месяцев.
                  <br /><br />
                  У нас иначе. Для каждой девушки мы создаём Personal Brand: индивидуальный образ, стиль общения, стратегию роста и профессиональный контент. Поэтому средний доход наших моделей — 150 000 ₽, а не 40 000 ₽.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {personalBrand.map((item, i) => {
                const isFeatured = i === 0;
                const isWide = i === 5;
                return (
                  <Reveal key={i} delay={i * 0.05} className={`${isFeatured ? 'lg:row-span-2' : ''} ${isWide ? 'lg:col-span-3' : ''}`}>
                    <div className={`glass-card rounded-2xl overflow-hidden h-full flex flex-col group hover:border-gold/20 transition-all duration-300 ${isWide ? 'lg:flex-row' : ''}`}>
                      <div className={`relative flex items-center justify-center overflow-hidden bg-cocoa
                        ${isFeatured ? 'aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-0' :
                          isWide ? 'aspect-[16/10] lg:aspect-auto lg:w-2/5' : 'aspect-[16/10]'}`}>
                        <item.icon size={isFeatured ? 56 : 40} className="text-gold/20 group-hover:text-gold/35 transition-colors duration-500" strokeWidth={1} />
                        <MarkSVG className="absolute -bottom-6 -right-6 w-24 h-24 text-gold/[0.04]" />
                      </div>
                      <div className={`p-6 ${isFeatured || isWide ? 'lg:p-8' : ''} ${isWide ? 'lg:flex-1' : ''}`}>
                        <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                          <item.icon size={18} className="text-gold" strokeWidth={1.5} />
                        </div>
                        <h3 className={`font-display font-bold text-silk mb-3 leading-tight ${isFeatured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>{item.title}</h3>
                        <p className={`font-body text-silk/50 leading-relaxed ${isFeatured ? 'text-sm' : 'text-sm'}`}>{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>


        {/* ═══════════ ГАРАНТИИ ═══════════ */}
        <section className="bg-gold py-10 md:py-12">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
              {guarantees.map((g, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-noir/15 flex items-center justify-center mx-auto mb-3">
                      <g.icon size={22} className="text-noir" strokeWidth={1.5} />
                    </div>
                    <p className="font-display font-bold text-sm text-noir mb-1">{g.title}</p>
                    <p className="font-body text-xs text-noir/60 leading-relaxed">{g.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <div className="text-center mt-8">
                <button onClick={toForm} className="inline-flex items-center gap-2 bg-noir text-gold px-7 py-3 rounded-full font-display font-bold text-xs tracking-[0.1em] uppercase hover:bg-cocoa transition-colors cursor-pointer">
                  Попробуй с оплачиваемой стажировкой <ArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ═══════════ PHOTO STRIP ═══════════ */}
        <section>
          <div className="grid grid-cols-2 gap-[1px]">
            {photos.strip.map((src, i) => (
              <div key={i} className="aspect-[16/7] overflow-hidden duotone-hover">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>


        {/* ═══════════ TESTIMONIALS (мини) ═══════════ */}
        <section className="bg-cocoa py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Отзывы</p>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[0.92] tracking-tight text-silk">
                ЧТО ГОВОРЯТ <span className="font-serif font-normal text-gold uppercase">наши девушки</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-7 h-full flex flex-col hover:border-gold/20 transition-all duration-300">
                    <Quote size={24} className="text-gold/30 mb-4" />
                    <p className="font-body text-base text-silk/70 leading-relaxed flex-1 mb-6">«{t.quote}»</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-silk/[0.08]">
                      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                        <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-sm text-silk">{t.name}</p>
                        <p className="font-body text-xs text-silk/40">В студии {t.tenure}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="text-center mt-10">
                <button onClick={toForm} className="group inline-flex items-center gap-2 text-gold font-display font-bold text-sm tracking-[0.08em] uppercase hover:gap-3 transition-all cursor-pointer">
                  Присоединяйся к нашей команде <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ КАК УСТРОЕНА РАБОТА — 5 ШАГОВ ═══════════ */}
        <section className="bg-cocoa py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-12 md:mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Процесс</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk">
                КАК УСТРОЕНА
                <br /><span className="font-serif font-normal text-gold uppercase">работа — 5 шагов</span>
              </h2>
            </Reveal>

            <div className="max-w-2xl mx-auto space-y-0">
              {[
                { step: '01', title: 'Заявка', desc: 'Оставляешь заявку на сайте или в Telegram. Перезвоним в течение часа.' },
                { step: '02', title: 'Знакомство', desc: 'Приезжаешь в студию на собеседование. Мы оплатим такси. Без обязательств — просто посмотришь, как всё устроено.' },
                { step: '03', title: 'Стажировка (3–5 дней)', desc: 'Пробуешь работать с куратором. Стажировка оплачивается. Если не понравится — уходишь с деньгами.' },
                { step: '04', title: 'Personal Brand', desc: 'Куратор создаёт твой образ: стиль общения, контент, стратегию развития. Бесплатная фотосессия и видео.' },
                { step: '05', title: 'Работа и доход', desc: 'Свободный график от 4 часов. Ежедневные выплаты на карту. Рост дохода по мере развития бренда.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-5 md:gap-8 group">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <span className="font-display font-bold text-sm text-gold">{item.step}</span>
                      </div>
                      {i < 4 && <div className="w-px h-full min-h-[40px] bg-gold/15" />}
                    </div>
                    <div className="pb-8 md:pb-10">
                      <h3 className="font-display font-bold text-lg text-silk mb-2 leading-tight">{item.title}</h3>
                      <p className="font-body text-sm text-silk/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="text-center mt-4">
                <button onClick={toForm} className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Начать с шага 1 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ УСЛОВИЯ РАБОТЫ ═══════════ */}
        <section id="conditions" className="bg-cocoa py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <Reveal className="lg:sticky lg:top-28">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Условия</p>
                <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.92] tracking-tight text-silk mb-6">
                  О РАБОТЕ <span className="font-serif font-normal text-gold uppercase">в нашей</span>
                  <br />КОМПАНИИ
                </h2>
                <p className="font-display font-medium text-lg text-silk/50 mb-8">Коротко о главном.</p>
                <div className="hidden lg:block mt-2 aspect-[4/3] rounded-2xl overflow-hidden relative corner-brackets duotone-hover">
                  <img src={photos.conditions} alt="Yes Studio офис" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <div className="space-y-5">
                {conditionItems.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-6 md:p-7 flex items-start gap-5 group hover:border-gold/20 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-gold/12 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                        <Check size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg md:text-xl text-silk mb-1.5 leading-tight">{item.title}</p>
                        <p className="font-body text-base text-silk/55 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={conditionItems.length * 0.08}>
                  <button onClick={toForm} className="mt-5 group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                    Узнать подробнее <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Reveal>
              </div>
            </div>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ СТРАХИ И ВОЗРАЖЕНИЯ ═══════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10 md:mb-14">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Честно</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk">
                МЫ ЗНАЕМ, О ЧЁМ
                <br /><span className="font-serif font-normal text-gold uppercase">ты сейчас думаешь</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {[
                { icon: Sparkles, title: '«У меня нет модельной внешности»', text: 'Мы не проводим кастинги по внешности. Куратор помогает создать образ под тебя — укладка, стиль, подача. Внешность второстепенна, главное — общение.' },
                { icon: Shield, title: '«Это что-то стыдное»', text: 'Формат — NON-NUDE. Одежда, позитивное общение, дружеская атмосфера. Площадки — англоязычные, зарубежная аудитория. Тебя не увидят знакомые.' },
                { icon: Lock, title: '«А вдруг обманут»', text: 'Студия работает 7 лет. Выплаты на карту каждый день. Стажировка оплачивается — даже если не останешься.' },
                { icon: Heart, title: '«У меня не получится»', text: 'С первого дня тебя ведёт персональный куратор. Обучение, поддержка, разбор ошибок. Большинство девушек выходят на стабильный доход уже через 2–3 недели.' },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-7 h-full group hover:border-gold/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                      <card.icon size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-silk mb-3 leading-tight">{card.title}</h3>
                    <p className="font-body text-sm text-silk/55 leading-relaxed">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="font-body text-sm text-silk/40 text-center mt-8 max-w-md mx-auto">Так думали все наши девушки, прежде чем прийти к нам.</p>
              <div className="text-center mt-5">
                <button onClick={toForm} className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Попробуй — стажировка оплачивается <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ТРАНСФОРМАЦИЯ ═══════════ */}
        <section className="py-20 md:py-28 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-12 md:mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Результат</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk">
                КАК МЕНЯЕТСЯ <span className="font-serif font-normal text-gold uppercase">жизнь</span>
                <br />НАШИХ МОДЕЛЕЙ
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-stretch max-w-5xl mx-auto">
              {/* До */}
              <Reveal className="lg:col-span-5">
                <div className="glass-card rounded-2xl p-7 md:p-9 h-full border-silk/[0.06]">
                  <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-silk/30 mb-6">До</p>
                  <div className="space-y-5">
                    {transformationData.before.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-silk/20 mt-2.5 shrink-0" />
                        <div>
                          <p className="font-body text-xs text-silk/30 uppercase tracking-wider">{item.label}</p>
                          <p className="font-body text-base text-silk/50">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Стрелка */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <Reveal delay={0.15}>
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <ArrowRight size={28} className="text-gold lg:rotate-0 rotate-90" />
                  </div>
                </Reveal>
              </div>

              {/* После */}
              <Reveal delay={0.2} className="lg:col-span-5">
                <div className="glass-card rounded-2xl p-7 md:p-9 h-full border-gold/20 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/[0.04] rounded-full blur-3xl" />
                  <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold mb-6">Через 6 месяцев</p>
                  <div className="space-y-5">
                    {transformationData.after.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                        <div>
                          <p className="font-body text-xs text-gold/60 uppercase tracking-wider">{item.label}</p>
                          <p className="font-body text-base text-silk font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <p className="font-body text-xs text-silk/30 text-center mt-8 italic">Цифры основаны на реальных результатах моделей Yes Studio.</p>
              <div className="text-center mt-5">
                <button onClick={toForm} className="group inline-flex items-center gap-3 text-gold font-display font-bold text-sm tracking-[0.08em] uppercase hover:gap-4 transition-all cursor-pointer">
                  Начать свою историю <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ИСТОРИИ УСПЕХА ═══════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-12 md:mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Истории</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk">
                РЕАЛЬНЫЕ <span className="font-serif font-normal text-gold uppercase">истории</span>
                <br />НАШИХ МОДЕЛЕЙ
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {successStories.map((story, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-gold/20 transition-all duration-300 group">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={story.photo} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir/80 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <p className="font-display font-bold text-lg text-silk">{story.name}, {story.age} лет</p>
                        <p className="font-body text-xs text-silk/60">В студии {story.tenure}</p>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1">
                          <p className="font-body text-xs text-silk/30 uppercase tracking-wider">Было</p>
                          <p className="font-body text-sm text-silk/50">{story.before}</p>
                        </div>
                        <ArrowRight size={14} className="text-gold shrink-0" />
                        <div className="flex-1">
                          <p className="font-body text-xs text-gold/60 uppercase tracking-wider">Стало</p>
                          <p className="font-display font-bold text-sm text-gold">{story.after}</p>
                        </div>
                      </div>
                      <Quote size={18} className="text-gold/20 mb-2" />
                      <p className="font-body text-sm text-silk/60 leading-relaxed flex-1">«{story.quote}»</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="text-center mt-10">
                <button onClick={toForm} className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-10 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Начать свою историю <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ПРЕИМУЩЕСТВА — Bento Grid ═══════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Преимущества</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk mb-12 md:mb-16">
                ПРЕИМУЩЕСТВА <span className="font-serif font-normal text-gold uppercase">работы</span>
                <br />СТРИМ-МОДЕЛЬЮ
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Reveal className="md:col-span-2 md:row-span-2">
                <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[280px] md:min-h-[380px] relative overflow-hidden group hover:border-gold/15 transition-all">
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gold/[0.03] rounded-full blur-2xl group-hover:bg-gold/[0.06] transition-colors" />
                  <div>
                    <Banknote size={28} className="text-gold mb-6" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-silk mb-3">Высокий доход</h3>
                    <p className="font-body text-sm text-silk/50 leading-relaxed max-w-sm">Заработок от 70 000 рублей в месяц, возможность выйти на 150 000+ рублей. Без ограничений по заработку.</p>
                  </div>
                  <div className="mt-8">
                    <p className="font-display font-bold text-5xl md:text-6xl text-gold/20 leading-none">150K+</p>
                    <p className="font-body text-xs text-silk/30 tracking-wider uppercase mt-1">средняя зарплата</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="glass-card rounded-2xl p-7 h-full min-h-[170px] hover:border-gold/15 transition-all">
                  <Globe size={22} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-lg text-silk mb-2">Коммуникация</h3>
                  <p className="font-body text-sm text-silk/50 leading-relaxed">Работа в формате онлайн-общения на международных площадках. Повышаешь навыки коммуникации и психологии.</p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl overflow-hidden h-full min-h-[170px] relative corner-brackets duotone-hover">
                  <img src={photos.bentoPhoto} alt="Yes Studio" className="w-full h-full object-cover" />
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="glass-card rounded-2xl p-7 h-full min-h-[170px] hover:border-gold/15 transition-all">
                  <BookOpen size={22} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-lg text-silk mb-2">Английский язык</h3>
                  <p className="font-body text-sm text-silk/50 leading-relaxed">Знание английского не обязательно — установлен автоматический переводчик. Через год будешь свободно разговаривать.</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass-card rounded-2xl p-7 h-full min-h-[170px] hover:border-gold/15 transition-all">
                  <Heart size={22} className="text-gold mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-lg text-silk mb-2">Повышение самооценки</h3>
                  <p className="font-body text-sm text-silk/50 leading-relaxed">Бесконечные комплименты, подарки и всевозможные знаки внимания и восхищения со стороны пользователей повышают самооценку всех наших моделей.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ═══════════ REFERRAL ═══════════ */}
        <section className="bg-gold py-12 md:py-14">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-noir/15 flex items-center justify-center shrink-0"><Gift size={28} className="text-noir" /></div>
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-noir mb-1">Платим 100$ за подругу!</h2>
                    <p className="font-body text-sm text-noir/70">Знаешь кому порекомендовать нашу компанию? Мы предлагаем вознаграждение 100$, при условии, что модель заработает 300$ — а так может каждая!</p>
                  </div>
                </div>
                <button onClick={toForm} className="shrink-0 bg-noir text-gold px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase hover:bg-cocoa transition-colors cursor-pointer">Подробнее</button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ═══════════ GALLERY ═══════════ */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]">
            {photos.gallery.map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative overflow-hidden aspect-[3/4] duotone-hover corner-brackets">
                  <img src={src} alt={`Yes Studio ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ТРЕБОВАНИЯ ═══════════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Кого мы ищем</p>
                <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[0.92] tracking-tight text-silk mb-8">
                  МЫ ЖДЁМ ТЕБЯ
                  <br /><span className="font-serif font-normal text-gold uppercase">в нашем коллективе</span>
                </h2>
                <div className="space-y-4">
                  {[
                    'Девушка от 18 до 35 лет с опрятным внешним видом.',
                    'Нацелена на доход от 150 000 рублей в месяц.',
                    'Имеешь желание учиться и развиваться.',
                    'Обладаешь коммуникабельностью, дисциплинированностью и энергичностью.',
                    'Стремишься выстроить долгосрочное сотрудничество.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center mt-0.5 shrink-0"><Check size={12} className="text-gold" /></div>
                      <p className="font-body text-base text-silk/60 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-sm text-gold font-medium">Не уверена? Запишись на оплачиваемую стажировку и попробуй!</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl corner-brackets duotone-hover">
                  <img src={photos.requirements} alt="Модель Yes Studio" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ЕЩЁ НЕ УВЕРЕНА? ═══════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center mb-10">
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[0.92] tracking-tight text-silk">
                ЕЩЁ НЕ УВЕРЕНА?
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { icon: Banknote, title: 'Стажировка оплачивается', desc: 'Попробуй 3–5 дней. Если не понравится — заберёшь деньги и уйдёшь. Без обязательств.' },
                { icon: MapPin, title: 'Такси за наш счёт', desc: 'Мы оплатим дорогу до студии на собеседование. Ничем не рискуешь.' },
                { icon: Star, title: 'Десятки девушек уже с нами', desc: 'Большинство из них тоже сомневались. Прочитай их истории выше.' },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-7 text-center h-full group hover:border-gold/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                      <item.icon size={22} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-base text-silk mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-silk/55 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="text-center mt-8">
                <button onClick={toForm} className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-10 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                  Записаться — это бесплатно <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ CTA FORM ═══════════ */}
        <section id="apply" ref={applyRef} className="relative bg-cocoa py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={photos.ctaBg} alt="" className="w-full h-full object-cover opacity-[0.07]" />
            <div className="absolute inset-0 bg-cocoa/80" />
          </div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
            <MarkSVG className="w-[400px] h-[400px] text-gold opacity-[0.02]" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <p className="font-body text-sm text-gold font-medium">Набор открыт — свободных мест: 5</p>
                </div>
                <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.92] tracking-tight text-silk mb-4">
                  ХОЧЕШЬ, ОТПРАВИМ
                  <br /><span className="font-serif font-normal text-gold uppercase">подробности</span>
                  <br />В ТЕЛЕГРАМ?
                </h2>
                <p className="font-body text-sm text-silk/30 uppercase tracking-widest mb-8">Только девушки 18+</p>
                <p className="font-body text-lg text-silk/50 leading-relaxed max-w-md mb-10">Оставь заявку — перезвоним за час и оплатим такси на собеседование.</p>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: 'Конфиденциально — данные защищены' },
                    { icon: Clock, text: 'Перезвоним в течение 1 часа' },
                    { icon: Banknote, text: 'Оплатим такси на собеседование' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-silk/[0.05] flex items-center justify-center"><item.icon size={14} className="text-gold" /></div>
                      <span className="font-body text-sm text-silk/50">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <form onSubmit={(e) => e.preventDefault()} className="glass-card rounded-2xl p-7 md:p-10 space-y-4">
                  {[
                    { label: 'Имя', placeholder: 'Как тебя зовут?', type: 'text' },
                    { label: 'Telegram *', placeholder: '@username', type: 'text' },
                    { label: 'Номер телефона', placeholder: '+7 (___) ___-__-__', type: 'tel' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="font-body text-xs text-silk/40 tracking-wider uppercase mb-2 block">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full bg-silk/[0.04] border border-silk/[0.1] rounded-xl text-silk px-5 py-3.5 font-body text-sm placeholder:text-silk/25 focus:border-gold focus:outline-none transition-colors" />
                    </div>
                  ))}
                  <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-noir py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-colors flex items-center justify-center gap-3 mt-2 cursor-pointer">
                    Записаться — это бесплатно <ArrowRight size={18} />
                  </button>
                  <p className="font-body text-xs text-silk/25 text-center pt-1">Нажимая кнопку, вы даёте согласие на обработку персональных данных</p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ ВАКАНСИИ ═══════════ */}
        <section id="jobs" className="py-20 md:py-28">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <Reveal className="text-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Вакансии</p>
              <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk mb-10 md:mb-14">
                ОТКРЫТЫЕ <span className="font-serif font-normal text-gold uppercase">позиции</span>
                <br />В НАШЕЙ СТУДИИ
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {jobs.map((job, i) => (
                  <button key={i} onClick={() => setActiveJob(i)}
                    className={`px-5 md:px-7 py-3 font-display font-bold text-xs md:text-sm tracking-[0.08em] uppercase transition-all cursor-pointer rounded-full ${activeJob === i ? 'bg-gold text-noir' : 'border border-silk/15 text-silk/50 hover:border-gold/30 hover:text-silk/80'}`}>
                    {job.title}
                  </button>
                ))}
              </div>
            </Reveal>

            <AnimatePresence mode="wait">
              <motion.div key={activeJob} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card rounded-2xl p-7 md:p-9">
                    <h3 className="font-display font-bold text-lg text-silk mb-5 flex items-center gap-3">
                      <currentJob.icon size={20} className="text-gold" strokeWidth={1.5} />
                      Требования
                    </h3>
                    <div className="space-y-3">
                      {currentJob.requirements.map((text, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-2 shrink-0" />
                          <p className="font-body text-sm text-silk/60 leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass-card rounded-2xl p-7 md:p-9">
                      <h3 className="font-display font-bold text-lg text-silk mb-5">Условия</h3>
                      <div className="space-y-3">
                        {currentJob.conditions.map((text, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <Check size={14} className="text-gold mt-0.5 shrink-0" />
                            <p className="font-body text-sm text-silk/60 leading-relaxed">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {(currentJob as any).responsibilities && (
                      <div className="glass-card rounded-2xl p-7 md:p-9">
                        <h3 className="font-display font-bold text-lg text-silk mb-5">Обязанности</h3>
                        <div className="space-y-3">
                          {(currentJob as any).responsibilities.map((text: string, i: number) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-2 shrink-0" />
                              <p className="font-body text-sm text-silk/60 leading-relaxed">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button onClick={toForm} className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-noir px-10 py-4 rounded-full font-display font-bold text-sm tracking-[0.1em] uppercase transition-all cursor-pointer">
                    Откликнуться на вакансию <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>


        <div className="glow-line" />


        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="relative bg-cocoa py-20 md:py-28 overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none select-none">
            <MarkSVG className="w-[600px] h-[600px] text-gold opacity-[0.015]" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">FAQ</p>
                  <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3rem)] leading-[0.92] tracking-tight text-silk mb-5">
                    ОТВЕТЫ НА
                    <br /><span className="font-serif font-normal text-gold uppercase">частые вопросы</span>
                  </h2>
                  <p className="font-body text-sm text-silk/50 leading-relaxed">Не нашла ответ? <a href="https://t.me/studio_yes" className="text-gold hover:text-gold-dark transition-colors">Напиши в Telegram</a></p>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                {faqData.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} open={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} />
                ))}
              </div>
            </div>
          </div>
        </section>


        <div className="glow-line" />

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="border-t border-silk/[0.08] py-10 md:py-14 pb-24 lg:pb-14">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
              <div className="md:col-span-5">
                <div className="mb-4">
                  <LogoSVG className="logo-default h-5 opacity-60" />
                  <HeritageLogoText className="opacity-60" />
                </div>
                <p className="font-body text-xs text-silk/30 leading-relaxed max-w-sm">
                  Студия Yes не является продавцом интимных услуг, а также не является посредником в их предоставлении. Работа моделей заключается в общении только в онлайн-пространстве и носит развлекательный характер. 18+
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="font-display font-bold text-xs tracking-[0.15em] uppercase text-silk/30 mb-4">Навигация</p>
                <div className="space-y-2.5">
                  {[['О нас', '#why'], ['Условия', '#conditions'], ['Вакансии', '#jobs'], ['FAQ', '#faq']].map(([l, h]) => (
                    <a key={l} href={h} className="block font-body text-sm text-silk/35 hover:text-silk/60 transition-colors">{l}</a>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="font-display font-bold text-xs tracking-[0.15em] uppercase text-silk/30 mb-4">Контакты</p>
                <div className="space-y-2.5">
                  <a href="tel:+79282348339" className="flex items-center gap-2 font-body text-sm text-silk/35 hover:text-silk/60 transition-colors"><Phone size={13} className="text-gold" />+7 (928) 234-83-39</a>
                  <a href="https://t.me/studio_yes" target="_blank" rel="noopener" className="flex items-center gap-2 font-body text-sm text-silk/35 hover:text-silk/60 transition-colors"><MessageCircle size={13} className="text-gold" />Telegram</a>
                  <p className="font-body text-sm text-silk/35 flex items-center gap-2"><MapPin size={13} className="text-gold" />г. Москва</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-silk/[0.08] flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="font-body text-xs text-silk/20">&copy; 2025 Yes Studio. Все права защищены.</p>
              <a href="#" className="font-body text-xs text-silk/20 hover:text-silk/40 transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </footer>
      </div>

      {/* ═══════════ MOBILE STICKY CTA ═══════════ */}
      <AnimatePresence>
        {scrolled && !applyInView && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-noir/95 backdrop-blur-md border-t border-silk/[0.08] px-5 py-3"
          >
            <button onClick={toForm} className="w-full bg-gold text-noir py-3.5 rounded-full font-display font-bold text-xs tracking-[0.1em] uppercase cursor-pointer flex items-center justify-center gap-2">
              Начать зарабатывать <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
