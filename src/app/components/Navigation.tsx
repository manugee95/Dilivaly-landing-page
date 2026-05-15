import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#07120A]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 h-[80px] flex items-center justify-between">
        <div className="flex items-center">
          <a href="/"><img
            src="/dilivaly-logo.png"
            alt="DILIVALY"
            className="h-16 sm:h-20 w-auto"
          /></a>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection('how-it-works')} className="font-body text-white/75 hover:text-[#00C805] transition-colors">
            How It Works
          </button>
          <button onClick={() => scrollToSection('vendors')} className="font-body text-white/75 hover:text-[#00C805] transition-colors">
            For Vendors
          </button>
          <button onClick={() => scrollToSection('agents')} className="font-body text-white/75 hover:text-[#00C805] transition-colors">
            For Agents
          </button>
          <button onClick={() => scrollToSection('security')} className="font-body text-white/75 hover:text-[#00C805] transition-colors">
            Security
          </button>
          <button onClick={() => scrollToSection('faq')} className="font-body text-white/75 hover:text-[#00C805] transition-colors">
            FAQ
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-white/75 hover:text-white transition-colors px-4 py-2">
            Log In
          </button>
          <button className="font-body bg-[#00C805] text-[#07120A] px-6 py-2 rounded-full font-semibold hover:bg-[#00d906] transition-colors">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#07120A]/95 backdrop-blur-md border-t border-[#00C805]/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-4 p-6">
            <button onClick={() => scrollToSection('how-it-works')} className="font-body text-white/75 text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection('vendors')} className="font-body text-white/75 text-left">
              For Vendors
            </button>
            <button onClick={() => scrollToSection('agents')} className="font-body text-white/75 text-left">
              For Agents
            </button>
            <button onClick={() => scrollToSection('security')} className="font-body text-white/75 text-left">
              Security
            </button>
            <button onClick={() => scrollToSection('faq')} className="font-body text-white/75 text-left">
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-[#00C805]/20">
              <button className="font-body text-white/75 text-left">Log In</button>
              <button className="font-body bg-[#00C805] text-[#07120A] px-6 py-2 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
