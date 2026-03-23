import { Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#FFEB3B]" />,
    bg: 'bg-[#FFEB3B]/10',
    title: 'Higiene Total',
    desc: 'Desinfectamos cada unidad antes de tu evento para que los niños jueguen seguros y tranquilos.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#00CED1]" />,
    bg: 'bg-[#00CED1]/10',
    title: 'Puntualidad Ninja',
    desc: 'Entrega y recogida puntual garantizada. Tu fiesta empieza a tiempo, siempre.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#E91E63]" />,
    bg: 'bg-[#E91E63]/10',
    title: 'Seguridad',
    desc: 'Materiales premium y anclajes de alta resistencia certificados para máxima tranquilidad.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.15 },
  }),
};

export const Features = () => {
  return (
    <section id="beneficios" className="bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 -top-8 h-16 bg-white" style={{ clipPath: 'ellipse(50% 100% at 50% 100%)' }} />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #008080 1.5px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Boy — absolute background bottom-right */}
      <motion.img
        src="/boy.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[90%] w-auto object-contain object-bottom select-none pointer-events-none hidden lg:block"
        draggable={false}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-['Varela_Round'] font-extrabold text-[#008080]">
            ¿Por qué <span className="text-[#E91E63]">Wompy Up</span>?
          </h2>
          <p className="text-lg text-[#546E7A] font-medium max-w-2xl mx-auto">
            Nos tomamos la diversión muy en serio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-5 bg-white/80 backdrop-blur-sm rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,128,128,0.2)] border-2 border-transparent hover:border-[#00CED1]/20 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-['Varela_Round'] font-bold text-[#008080] mb-1">{feature.title}</h3>
                <p className="text-[#546E7A] font-['Inter'] leading-relaxed text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
