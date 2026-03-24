import React from 'react';
import { Menu, X } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA] border-b border-[#00CED1]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Wompy Up" className="h-14 w-auto object-contain" />
          </div>

          {/* Mobile: centered phone CTA */}
          <a
            href="https://wa.me/524493970110"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center gap-2.5 text-[#008080]"
          >
            <span className="w-[26px] h-[26px] shrink-0"><WhatsAppIcon /></span>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[12.5px] text-[#546E7A] font-normal font-['Inter']">Renta ahora</span>
              <span className="text-[17.5px] font-bold tracking-wide font-['Inter']">449 397 01 10</span>
            </span>
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#experiencia" className="text-[#546E7A] hover:text-[#E91E63] font-medium transition-colors">Experiencia</a>
            <a href="#beneficios" className="text-[#546E7A] hover:text-[#E91E63] font-medium transition-colors">Beneficios</a>
            <a href="#testimonios" className="text-[#546E7A] hover:text-[#E91E63] font-medium transition-colors">Testimonios</a>
            <a
              href="https://wa.me/524493970110"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E91E63] hover:bg-[#D81B60] text-white px-6 py-3 rounded-[24px] font-['Varela_Round'] font-bold shadow-[0_4px_14px_0_rgba(233,30,99,0.39)] transition-transform hover:-translate-y-0.5"
            >
              Reservar
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#008080]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F8F9FA] shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <a href="#experiencia" className="block text-[#546E7A] font-medium text-lg">Experiencia</a>
            <a href="#beneficios" className="block text-[#546E7A] font-medium text-lg">Beneficios</a>
            <a href="#testimonios" className="block text-[#546E7A] font-medium text-lg">Testimonios</a>
            <a
              href="https://wa.me/524493970110"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E91E63] text-white px-8 py-3 rounded-[24px] font-['Varela_Round'] font-bold inline-block mt-4 w-full text-center"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
