import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1555276831-f5996bfbb1cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmljb3JuJTIwcGFydHl8ZW58MXx8fHwxNzc0MjE4MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mega Isla',
      desc: 'Para los pequeños guerreros que buscan aventura extrema'
    },
    {
      src: 'https://images.unsplash.com/photo-1548323678-0644152a2b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMGJpcnRoZGF5JTIwcGFydHl8ZW58MXx8fHwxNzc0MjE4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Barco Pirata',
      desc: '¡Al abordaje! Transforma tu jardín en un océano de aventuras.'
    },
    {
      src: 'https://images.unsplash.com/photo-1751235600651-94bbbeb29567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwanVtcGluZyUyMHRyYW1wb2xpbmV8ZW58MXx8fHwxNzc0MjE4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Casa de Mickey',
      desc: 'Magia y color en un solo lugar. El clásico con resbaladilla que nunca falla.'
    }
  ];

  const settings = {
    dots: true, infinite: true, speed: 500,
    slidesToShow: 1, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 4000, arrows: false,
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
          <Slider {...settings} className="rounded-[24px] overflow-hidden">
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-[9/16] md:aspect-video outline-none">
                <ImageWithFallback src={img.src} alt={img.title} className="w-full h-full object-cover rounded-[24px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#008080]/90 via-[#008080]/20 to-transparent rounded-[24px] flex flex-col justify-end p-8 md:p-12">
                  <span className="inline-block px-4 py-1.5 bg-[#FFEB3B] text-[#008080] font-bold text-sm rounded-full w-max mb-4 uppercase tracking-wider">Destacado</span>
                  <h3 className="text-3xl md:text-5xl font-['Varela_Round'] font-bold text-white mb-2">{img.title}</h3>
                  <p className="text-lg md:text-xl text-white/90 font-medium">{img.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
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
