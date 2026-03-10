import React, { useState, useEffect } from 'react';
import './index.css';
import translations from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = translations[lang];

  const setLanguage = (newLang) => {
    setLang(newLang);
    // Always keep LTR — only text content changes, never layout direction
    document.documentElement.lang = newLang;
    document.documentElement.dir = 'ltr';
  };

  useEffect(() => {
    // Ensure always LTR on mount
    document.documentElement.dir = 'ltr';
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app" dir="ltr">
      <Navbar t={t} scrolled={scrolled} lang={lang} setLanguage={setLanguage} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <WhyChoose t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} lang={lang} />

      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
