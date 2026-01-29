import React, { useState, useEffect } from 'react';
import { Phone, Home, Info, Briefcase, MessageCircle, FileText, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { trackPhoneClick } from '../utils/analytics';

// Navigation items for both desktop and mobile
const NAV_ITEMS = [
  { path: '/', label: 'דף הבית', mobileLabel: 'בית', Icon: Home },
  { path: '/services', label: 'שירותים', mobileLabel: 'שירותים', Icon: Briefcase },
  { path: '/blog', label: 'בלוג', mobileLabel: 'בלוג', Icon: FileText, matchPrefix: true },
  { path: '/about', label: 'אודות', mobileLabel: 'אודות', Icon: Info },
  { path: '/contact', label: 'צור קשר', mobileLabel: 'צור קשר', Icon: MessageCircle }
];

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Helper to check if nav item is active
  const isActive = (item) => {
    if (item.matchPrefix) {
      return currentPath === item.path || currentPath.startsWith(item.path + '/');
    }
    return currentPath === item.path;
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          {/* Mobile Hamburger Button */}
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="תפריט ניווט"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
            {NAV_ITEMS.map(item => (
              <Link key={item.path} to={item.path} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA / Phone */}
          <div className="header-actions">
            <a href="tel:073-729-66-99" className="phone-btn" onClick={() => trackPhoneClick('header')}>
              <Phone size={20} />
              <span>073-729-66-99</span>
            </a>
          </div>
        </div>

        {/* Mobile Slide-Down Menu - inside header so they stick together */}
        <nav
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          aria-label="ניווט ראשי"
        >
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-item ${isActive(item) ? 'active' : ''}`}
            >
              <item.Icon size={22} />
              <span>{item.mobileLabel}</span>
            </Link>
          ))}
        </nav>
      </header>

      <style>{`
        .header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
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

        /* Mobile Hamburger Button */
        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-main);
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .hamburger-btn:hover {
          background: var(--color-bg-body);
          color: var(--color-primary);
        }

        /* Mobile Slide-Down Menu */
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: white;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .mobile-menu.open {
          max-height: 350px;
        }
        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          color: var(--color-text-main);
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s;
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-menu-item:last-child {
          border-bottom: none;
        }
        .mobile-menu-item.active {
          background: var(--color-bg-body);
          color: var(--color-primary);
        }

        /* Only apply hover on devices that support it (not touch) */
        @media (hover: hover) {
          .mobile-menu-item:hover {
            background: var(--color-bg-body);
            color: var(--color-primary);
          }
        }

        @media (min-width: 768px) {
          .hamburger-btn {
            display: none;
          }
          .mobile-menu {
            display: none;
          }
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
        }
      `}</style>
    </>
  );
}
