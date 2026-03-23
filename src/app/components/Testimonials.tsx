import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const DESKTOP_PAGE_SIZE = 3;
const MOBILE_PAGE_SIZE = 1;

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    fetch('/reviews.json')
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const size = isSmall ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE;
  const totalPages = Math.ceil(reviews.length / size);
  const slice = reviews.slice(page * size, page * size + size);

  const go = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + totalPages) % totalPages);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

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

        {reviews.length > 0 && (
          <>
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {slice.map((r, i) => (
                    <div
                      key={i}
                      className="bg-[#F8F9FA] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#E91E63]/20 relative group"
                    >
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E91E63]/10 transform group-hover:scale-110 transition-transform" />

                      <div className="flex gap-1 mb-6">
                        {[...Array(r.rating)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-[#FFEB3B] fill-current" />
                        ))}
                      </div>

                      <p className="text-[#546E7A] font-medium text-lg italic mb-8 relative z-10 font-['Inter']">
                        "{r.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={r.profile_photo_url}
                          alt={r.author_name}
                          className="w-14 h-14 rounded-full border-2 border-[#00CED1] object-cover shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-['Varela_Round'] font-bold text-[#008080]">{r.author_name}</h4>
                          <span className="text-sm text-[#546E7A]">{r.relative_time_description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full bg-[#008080] text-white flex items-center justify-center hover:bg-[#00CED1] transition-colors disabled:opacity-30"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? 'bg-[#008080]' : 'bg-[#008080]/25'}`}
                    aria-label={`Página ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full bg-[#008080] text-white flex items-center justify-center hover:bg-[#00CED1] transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
