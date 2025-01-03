import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MdMenu, MdClose, MdKeyboardArrowUp } from 'react-icons/md';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Studio from './pages/Studio';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="font-medium hover:text-mila-sage transition-colors">
                MILÂ STUDIO SPA
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/sobre" className="text-gray-800 hover:text-mila-sage transition-colors">Sobre</Link>
                <Link to="/servicos" className="text-gray-800 hover:text-mila-sage transition-colors">Serviços</Link>
                <Link to="/studio" className="text-gray-800 hover:text-mila-sage transition-colors">Studio</Link>
              </nav>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <MdClose className="h-6 w-6" />
                ) : (
                  <MdMenu className="h-6 w-6" />
                )}
              </button>
            </div>

            {isMenuOpen && (
              <nav className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/sobre"
                    className="text-gray-800 hover:text-mila-sage transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                  <Link
                    to="/servicos"
                    className="text-gray-800 hover:text-mila-sage transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/studio"
                    className="text-gray-800 hover:text-mila-sage transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Studio
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </header>

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </main>

        <Footer />

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-mila-sage/90 hover:bg-mila-sage text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <MdKeyboardArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
