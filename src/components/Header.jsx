import React, { useState, useEffect } from 'react';
import { Phone, Home, Info, Briefcase, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide/show on mobile (under 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setHeaderHidden(true);
        } else {
          setHeaderHidden(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`header ${headerHidden ? 'header-hidden' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="logo-container">
            <img src={logo} alt="המרכז לשיפור התנועה" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">המרכז לשיפור התנועה</span>
              <span className="logo-subtitle">השינוי שלך מתחיל כאן</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">דף הבית</Link>
            <Link to="/about" className="nav-link">אודות</Link>
            <Link to="/services" className="nav-link">שירותים</Link>
            <Link to="/contact" className="nav-link">צור קשר</Link>
          </nav>

          {/* CTA / Phone */}
          <div className="header-actions">
            <a href="tel:073-729-66-99" className="phone-btn">
              <Phone size={20} />
              <span>073-729-66-99</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <Link to="/" className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}>
          <Home size={22} />
          <span>בית</span>
        </Link>
        <Link to="/services" className={`bottom-nav-item ${currentPath === '/services' ? 'active' : ''}`}>
          <Briefcase size={22} />
          <span>שירותים</span>
        </Link>
        <Link to="/about" className={`bottom-nav-item ${currentPath === '/about' ? 'active' : ''}`}>
          <Info size={22} />
          <span>אודות</span>
        </Link>
        <Link to="/contact" className={`bottom-nav-item ${currentPath === '/contact' ? 'active' : ''}`}>
          <MessageCircle size={22} />
          <span>צור קשר</span>
        </Link>
      </nav>

      <style>{`
        .header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: transform 0.3s ease;
        }
        .header-hidden {
          transform: translateY(-100%);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-img {
          height: 40px;
          object-fit: contain;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-weight: 900;
          font-size: 1rem;
          color: var(--color-accent);
          line-height: 1.1;
        }
        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--color-primary);
        }
        .desktop-nav {
          display: none;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: var(--color-text-main);
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .phone-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: transform 0.2s;
        }
        .phone-btn:hover {
          transform: scale(1.05);
        }
        .phone-btn span {
          display: none;
        }

        /* Mobile Bottom Navigation */
        .mobile-bottom-nav {
          display: flex;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 0.75rem 0;
          padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
          border-radius: 1.5rem 1.5rem 0 0;
        }
        .bottom-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.7rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .bottom-nav-item.active {
          color: var(--color-primary);
        }
        .bottom-nav-item:hover {
          color: var(--color-primary);
        }

        /* Add padding to body for bottom nav */
        @media (max-width: 767px) {
          body {
            padding-bottom: 70px;
          }
        }

        @media (min-width: 768px) {
          .logo-img {
            height: 50px;
          }
          .logo-title {
            font-size: 1.2rem;
          }
          .logo-subtitle {
            font-size: 0.9rem;
          }
          .desktop-nav {
            display: flex;
          }
          .phone-btn span {
            display: inline;
          }
          .mobile-bottom-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
