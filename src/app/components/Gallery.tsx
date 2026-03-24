import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { src: 'https://cdn.hoyadonde.com/bn1/6f6f7be8-630d-4bdb-9665-3bffc0c6fea3.mp4', thumb: '/thumbnails/thumb-0.jpg' },
  { src: 'https://cdn.hoyadonde.com/bn1/copy_306EBEC0-61DA-470A-A61A-F3E7F53EC76A.mp4', thumb: '/thumbnails/thumb-1.jpg' },
  { src: 'https://cdn.hoyadonde.com/bn1/IMG_4574.mp4', thumb: '/thumbnails/thumb-2.jpg' },
  { src: 'https://cdn.hoyadonde.com/bn1/IMG_3472.mp4', thumb: '/thumbnails/thumb-3.jpg' },
  { src: 'https://cdn.hoyadonde.com/bn1/IMG_3132.mp4', thumb: '/thumbnails/thumb-4.jpg' },
  { src: 'https://cdn.hoyadonde.com/bn1/a7ccd044-1e5c-46b4-bb09-b608f3d3e69f.mp4', thumb: '/thumbnails/thumb-5.jpg' },
];

export const Gallery = () => {
  const [active, setActive] = useState(0);
  const mainRef = useRef<HTMLVideoElement>(null);

  const goTo = (idx: number) => {
    if (mainRef.current) {
      mainRef.current.pause();
      mainRef.current.currentTime = 0;
    }
    setActive(idx);
    mainRef.current?.load();
  };

  return (
    <section id="modelos" className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-['Varela_Round'] font-extrabold text-[#008080]">
            Nuestros <span className="text-[#E91E63]">Brincolines</span>
          </h2>
          <p className="text-xl text-[#546E7A] font-medium max-w-2xl mx-auto">
            Modelos premium para todo tipo de fiestas
          </p>
        </motion.div>

        <motion.div
          className="mx-auto rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(233,30,99,0.1)] bg-white p-2"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Main video */}
          <div className="relative aspect-[9/16] md:aspect-video bg-black rounded-[24px] overflow-hidden">
            <video
              key={active}
              ref={mainRef}
              src={videos[active].src}
              poster={videos[active].thumb}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="none"
            />
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-2 px-1 pb-1 overflow-x-auto scrollbar-hide">
            {videos.map((video, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative flex-shrink-0 w-24 md:w-32 aspect-video rounded-[12px] overflow-hidden border-[3px] transition-all duration-200 ${
                  idx === active
                    ? 'border-[#E91E63] scale-[1.04] shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={video.thumb}
                  alt={`Brincolin ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {idx !== active && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#E91E63] ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4 2l10 6-10 6V2z" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <a
            href="https://wa.me/524493970110?text=Hola,%20quisiera%20ver%20el%20catálogo%20de%20brincolines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00CED1] hover:bg-[#00B5B8] text-white px-8 py-4 rounded-[32px] font-['Varela_Round'] text-lg font-bold shadow-lg transition-transform hover:-translate-y-1"
          >
            Conoce Nuestro Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};
