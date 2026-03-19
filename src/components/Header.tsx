import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', legal: false },
    { name: 'Servicios', href: '#servicios', legal: false },
    { name: 'Casos de Éxito', href: '#casos-exito', legal: false },
    { name: 'Nosotros', href: '#nosotros', legal: false },
    { name: 'Contacto', href: '#contacto', legal: false },
    { name: 'Curso IA', href: '#curso-ia', legal: false },
    { name: 'Términos', href: '#terminos', legal: true },
    { name: 'Privacidad', href: '#privacidad', legal: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/logoAct.png"
              alt="Secuoya"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center ml-10 gap-1">
            {menuItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {item.legal && index > 0 && !menuItems[index - 1].legal && (
                  <span className="text-gray-200 mx-2 select-none text-lg">|</span>
                )}
                <a
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${item.legal
                    ? 'text-gray-400 hover:text-blue-500'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                {item.legal && index > 0 && !menuItems[index - 1].legal && (
                  <div className="border-t border-gray-100 my-2" />
                )}
                <a
                  href={item.href}
                  className={`block hover:bg-gray-50 px-3 py-2 font-medium transition-colors duration-300 rounded-md ${item.legal
                    ? 'text-gray-400 hover:text-blue-500 text-sm'
                    : 'text-gray-700 hover:text-blue-600 text-base'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}