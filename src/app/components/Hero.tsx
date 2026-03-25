import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const, delay } },
});

const accents = [
  'Renta de brincolines',
  'Diversión garantizada',
  'Seguridad y precio',
];

const TYPEWRITER_SPEED = 55; // ms per char
const HOLD_DURATION = 3200;  // ms to hold before cycling

function useTypewriter(text: string) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, TYPEWRITER_SPEED);
    return () => clearInterval(id);
  }, [text]);

  return displayed;
}

const checklistItems = [
  'Desinfectados antes de cada evento',
  'Entrega y recogida puntual garantizada',
  'Anclajes de alta resistencia certificados',
  'Más de 20 modelos distintos de brincolines',
];

export const Hero = () => {
  const [accentIndex, setAccentIndex] = useState(0);
  const accent = accents[accentIndex];
  const typedAccent = useTypewriter(accent);

  useEffect(() => {
    const duration = accent.length * TYPEWRITER_SPEED + HOLD_DURATION;
    const id = setTimeout(() => {
      setAccentIndex((i) => (i + 1) % accents.length);
    }, duration);
    return () => clearTimeout(id);
  }, [accentIndex, accent.length]);

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] min-h-[92vh] md:h-[calc(100vh-5rem)] flex items-center">

      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#00CED1]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-[#E91E63]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #008080 1.5px, transparent 0)', backgroundSize: '32px 32px' }}
        />
      </div>

      {/* Container — NOT relative so the image can anchor to the section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-10 pb-6 md:pt-4 md:pb-4 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 w-full">

          {/* ── Left: text content ── */}
          <div className="lg:w-[50%] text-center lg:text-left z-10 space-y-7 md:space-y-4 lg:space-y-5 pt-4 md:pt-0 lg:pt-4">

            {/* Badge */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFEB3B]/25 text-[#008080] font-['Inter'] font-semibold text-sm"
            >
              <Star className="w-4 h-4 text-[#FFEB3B] fill-current shrink-0" />
              La opción #1 en renta de brincolines en Aguascalientes
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-4xl lg:text-4xl xl:text-5xl font-['Varela_Round'] font-extrabold text-[#008080] tracking-tight leading-[1.1]">
              Somos tu mejor opción en
              <br />
              <span className="block min-h-[106px] md:min-h-[80px] lg:min-h-[80px] xl:min-h-[106px]">
                <span className="relative inline-block text-[#E91E63]">
                  {typedAccent}
                  <span className="animate-pulse opacity-60">|</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#FFEB3B" strokeWidth="3.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </span>
            </h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-sm lg:text-base text-[#546E7A] max-w-lg mx-auto lg:mx-0 font-['Inter'] leading-relaxed"
            >
              Renta de brincolines limpios, seguros y puntuales para fiestas increíbles.{' '}
              <span className="font-semibold text-[#008080]">Renta rápida y fácil.</span>
            </motion.p>

            {/* Checklist */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
              className="flex flex-col gap-2 md:gap-1.5 text-sm md:text-xs lg:text-sm font-medium text-[#546E7A] items-center lg:items-start"
            >
              {checklistItems.map((item) => (
                <motion.li key={item} variants={fadeUp(0)} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00CED1] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              variants={fadeUp(0.55)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-0"
            >
              <a
                href="https://wa.me/524493970110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-4 md:py-3 rounded-[32px] font-['Varela_Round'] text-lg md:text-base font-bold shadow-[0_8px_30px_rgb(233,30,99,0.35)] transition-all hover:scale-105 hover:shadow-[0_12px_40px_rgb(233,30,99,0.45)]"
              >
                ¡Quiero apartar mi brincolín!
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-start gap-4 text-sm text-[#546E7A] font-medium"
            >
              <div className="flex -space-x-3">
                {[11, 12, 13, 14].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F8F9FA] bg-gray-200 overflow-hidden shadow-sm">
                    <ImageWithFallback src={`https://i.pravatar.cc/100?img=${i}`} alt={`Cliente ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span>Más de <strong className="text-[#008080]">500+</strong> familias felices</span>
            </motion.div>
          </div>

          {/* ── Right: bounce house image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-[52%] relative flex justify-end items-end z-0 md:absolute md:right-0 md:bottom-0 md:w-[52%] md:h-[70vh]"
          >
            {/* Floating 5-star badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute top-8 left-0 lg:-left-6 bg-white px-4 py-3 rounded-[20px] shadow-xl flex items-center gap-3 z-20"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-3"
              >
                <div className="bg-[#FFEB3B] p-2.5 rounded-full shrink-0">
                  <Star className="w-5 h-5 text-[#E91E63] fill-current" />
                </div>
                <div className="leading-tight">
                  <p className="font-['Varela_Round'] font-bold text-[#008080] text-sm">Calificación</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#FFEB3B] fill-current" />)}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Teal arc */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#00CED1]/15 to-transparent rounded-tl-[80px]" />

            {/* Bounce house with subtle float */}
            <motion.img
              src="/wompy.png"
              alt="Brincolin Wompy Up"
              className="relative w-full md:w-auto md:h-full md:max-w-none max-w-[640px] object-contain object-right-bottom drop-shadow-2xl select-none"
              draggable={false}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
