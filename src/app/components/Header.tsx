import React from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA] border-b border-[#00CED1]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Wompy Up" className="h-14 w-auto object-contain" />
          </div>

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
