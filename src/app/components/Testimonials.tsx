import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  { name: 'Yahel R.', text: '¡Rentamos el brincolin de unicornio y nos encantó! Entrega a tiempo.', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Verónica R.', text: 'Excelente servicio, personal muy amable y puntual.', img: 'https://i.pravatar.cc/150?img=33' },
  { name: 'Jocelyne G.', text: 'Súper atentos y puntuales, un éxito en mis fiestas.', img: 'https://i.pravatar.cc/150?img=41' },
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CED1]/5 rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-['Varela_Round'] font-extrabold text-[#008080]">
            Familias <span className="text-[#00CED1]">Felices</span>
          </h2>
          <p className="text-xl text-[#546E7A] font-medium max-w-2xl mx-auto">
            Lo que dicen de nosotros en Aguascalientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
              className="bg-[#F8F9FA] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#E91E63]/20 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E91E63]/10 transform group-hover:scale-110 transition-transform" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-[#FFEB3B] fill-current" />)}
              </div>

              <p className="text-[#546E7A] font-medium text-lg italic mb-8 relative z-10 font-['Inter']">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <ImageWithFallback src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#00CED1] object-cover shadow-sm" />
                <div>
                  <h4 className="font-['Varela_Round'] font-bold text-[#008080]">{t.name}</h4>
                  <span className="text-sm text-[#546E7A]">Cliente Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
