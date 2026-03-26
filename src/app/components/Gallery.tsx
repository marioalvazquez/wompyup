import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hls from 'hls.js';

const videos = [
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-0/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/6f6f7be8-630d-4bdb-9665-3bffc0c6fea3.mp4',
    thumb: '/thumbnails/thumb-0.jpg',
  },
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-1/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/copy_306EBEC0-61DA-470A-A61A-F3E7F53EC76A.mp4',
    thumb: '/thumbnails/thumb-1.jpg',
  },
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-2/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/IMG_4574.mp4',
    thumb: '/thumbnails/thumb-2.jpg',
  },
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-3/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/IMG_3472.mp4',
    thumb: '/thumbnails/thumb-3.jpg',
  },
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-4/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/IMG_3132.mp4',
    thumb: '/thumbnails/thumb-4.jpg',
  },
  {
    hls: 'https://cdn.hoyadonde.com/bn1/hls/video-5/playlist.m3u8',
    src: 'https://cdn.hoyadonde.com/bn1/a7ccd044-1e5c-46b4-bb09-b608f3d3e69f.mp4',
    thumb: '/thumbnails/thumb-5.jpg',
  },
];

export const Gallery = () => {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const prevIdx = (active - 1 + videos.length) % videos.length;
  const nextIdx = (active + 1) % videos.length;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const { hls, src } = videos[active];

    if (Hls.isSupported()) {
      const hlsInstance = new Hls({ startLevel: -1 });
      hlsInstance.loadSource(hls);
      hlsInstance.attachMedia(video);
      hlsRef.current = hlsInstance;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hls;
    } else {
      video.src = src;
    }

    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [active]);

  const goTo = (idx: number) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActive(idx);
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

        {/* ── Mobile: single video + thumbnail strip ── */}
        <motion.div
          className="md:hidden mx-auto rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(233,30,99,0.1)] bg-white p-2"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="relative aspect-[9/16] bg-black rounded-[24px] overflow-hidden">
            <video
              src={videos[active].src}
              poster={videos[active].thumb}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="none"
              key={active}
            />
          </div>

          <div className="flex gap-2 mt-2 px-1 pb-1 overflow-x-auto scrollbar-hide">
            {videos.map((video, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative flex-shrink-0 w-24 aspect-[9/16] rounded-[12px] overflow-hidden border-[3px] transition-all duration-200 ${
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

        {/* ── Tablet/Desktop: vertical carousel ── */}
        <motion.div
          className="hidden md:flex items-center justify-center gap-5"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Prev card */}
          <motion.button
            className="flex-shrink-0 focus:outline-none cursor-pointer"
            style={{ width: 200, opacity: 0.42 }}
            whileHover={{ opacity: 0.68, transition: { duration: 0.2 } }}
            onClick={() => goTo(prevIdx)}
            aria-label="Video anterior"
          >
            <div className="aspect-[9/16] rounded-[20px] overflow-hidden bg-black relative mt-8 shadow-lg">
              <img
                src={videos[prevIdx].thumb}
                alt={`Brincolin ${prevIdx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Active card */}
          <div className="flex-shrink-0" style={{ width: 300 }}>
            <div className="rounded-[28px] overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(233,30,99,0.18)]">
              <div className="aspect-[9/16] rounded-[20px] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  poster={videos[active].thumb}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="none"
                />
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center items-center gap-2 mt-5">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Ir al video ${idx + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    idx === active
                      ? 'w-6 h-2.5 bg-[#E91E63]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next card */}
          <motion.button
            className="flex-shrink-0 focus:outline-none cursor-pointer"
            style={{ width: 200, opacity: 0.42 }}
            whileHover={{ opacity: 0.68, transition: { duration: 0.2 } }}
            onClick={() => goTo(nextIdx)}
            aria-label="Siguiente video"
          >
            <div className="aspect-[9/16] rounded-[20px] overflow-hidden bg-black relative mt-8 shadow-lg">
              <img
                src={videos[nextIdx].thumb}
                alt={`Brincolin ${nextIdx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.button>
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
