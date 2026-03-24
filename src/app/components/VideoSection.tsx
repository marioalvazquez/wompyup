import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const VIDEO_ID = 'gef2i6x6dos';

export const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="experiencia" className="py-32 bg-[#008080] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-['Varela_Round'] font-extrabold mb-8 tracking-tight text-white"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          La Experiencia <span className="text-[#FFEB3B]">Wompy</span> en Acción
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-16 font-['Inter'] max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          Mira cómo transformamos fiestas normales en aventuras extraordinarias.
        </motion.p>

        <motion.div
          className="relative aspect-video rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 bg-black group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
          onClick={() => setPlaying(true)}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&showinfo=0&controls=1`}
              title="La Experiencia Wompy en Acción"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="La Experiencia Wompy en Acción"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110">
                  <Play fill="#E91E63" className="w-9 h-9 ml-1 text-[#E91E63]" />
                </div>
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <a
            href="https://wa.me/524493970110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#E91E63] hover:bg-[#D81B60] text-white px-10 py-5 rounded-[40px] font-['Varela_Round'] text-xl font-bold shadow-[0_10px_40px_rgba(233,30,99,0.5)] transition-transform hover:scale-105 group"
          >
            <Play fill="currentColor" className="w-6 h-6 group-hover:animate-pulse" />
            Empieza la Diversión
          </a>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00CED1] rounded-full blur-[80px] opacity-50" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#E91E63] rounded-full blur-[100px] opacity-40" />
    </section>
  );
};
