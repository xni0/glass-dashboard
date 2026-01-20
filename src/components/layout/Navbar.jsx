import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      backdrop-blur-xl bg-black/20 
      border-b border-border-gray/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold tracking-wider">
              <span className="text-gray-400">PRUEBA</span>
              <span className="text-[#d4c2e8]">UI</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Inicio</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Perfil</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Ajustes</a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/10 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Abrir menú</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/30 border-b border-border-gray/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-400 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Inicio</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Perfil</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Ajustes</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;