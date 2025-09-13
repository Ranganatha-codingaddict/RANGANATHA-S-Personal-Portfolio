import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Internship', href: '#internship' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const SunIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-secondary transition-colors duration-300 focus:outline-none"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [hoveredPath, setHoveredPath] = useState('');

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(`#${entry.target.id}`);
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    return () => {
        sections.forEach(section => {
            if (section) observer.unobserve(section);
        });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    if (isOpen) {
        setIsOpen(false);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-primary">RS</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onHoverStart={() => setHoveredPath(link.href)}
                onHoverEnd={() => setHoveredPath('')}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.href
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-light-secondary hover:text-primary'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {link.name}
                {(activeLink === link.href || hoveredPath === link.href) && (
                    <motion.div
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary"
                        layoutId="underline"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                )}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-dark dark:text-light-secondary focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-light-secondary dark:bg-dark-secondary"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                variants={itemVariants}
                className={`block py-2 px-6 text-gray-600 dark:text-light-secondary hover:bg-primary hover:text-white transition-colors duration-300 ${activeLink === link.href ? 'bg-primary/10' : ''}`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;