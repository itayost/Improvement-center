import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Google icon component
const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// Facebook icon component
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Carousel slides configuration (images only)
const heroSlides = [
  { image: "/hero/תמונה 1.jpeg", desktopPosition: "center 15%" },
  { image: "/hero/תמונה 2.png", desktopPosition: "center 10%" },
  { image: "/hero/תמונה 4.png", desktopPosition: "center 25%" }
];

// Trust badges that rotate independently
const trustBadges = [
  {
    text: "מקום ראשון בגוגל בכמות ואיכות הביקורות",
    icon: "google"
  },
  {
    text: "מקום ראשון בפייסבוק בכמות ואיכות הביקורות",
    icon: "facebook"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBadge, setCurrentBadge] = useState(0);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate badges every 6 seconds
  useEffect(() => {
    const badgeTimer = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % trustBadges.length);
    }, 6000);
    return () => clearInterval(badgeTimer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Full-screen image carousel */}
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              '--desktop-position': slide.desktopPosition
            }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Floating trust badge - always visible, swapping between Google and Facebook */}
      <div className="hero-badge-container">
        {trustBadges.map((badge, index) => (
          <div
            key={index}
            className={`hero-badge ${index === currentBadge ? 'active' : ''}`}
          >
            <div className="badge-icon">
              {badge.icon === 'google' && <GoogleIcon size={24} />}
              {badge.icon === 'facebook' && <FacebookIcon size={24} />}
            </div>
            <span className="badge-stars">★★★★★</span>
            <span className="badge-text">{badge.text}</span>
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="container hero-container">
        <div className="hero-card">
          <h1 className="hero-title">
            <span className="title-line">חווים קושי בפעולות יום יומיות פשוטות?</span>
            <span className="title-line highlight">חוסר שיווי משקל או קשיי הליכה?</span>
          </h1>
          <h2 className="hero-main-title">אימוני תנועה תפקודית עד הבית!</h2>
          <p className="hero-subtitle">
            פתרון שיקומי לנפילות, חוסר יציבות וקושי בהליכה!
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-secondary hero-cta">
              לקביעת הערכת תפקוד
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 75svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        /* Full-screen carousel */
        .hero-carousel {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.3) 50%,
            rgba(0,0,0,0.6) 100%
          );
          z-index: 1;
        }

        /* Badge container - positions the badge area */
        .hero-badge-container {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          z-index: 10;
          height: 36px;
        }

        /* Stacked badges with fade transition */
        .hero-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 0.5rem 0.75rem;
          border-radius: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(-5px);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          pointer-events: none;
          white-space: nowrap;
        }

        .hero-badge.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .badge-icon svg {
          width: 20px;
          height: 20px;
        }

        .badge-stars {
          color: #FFB800;
          font-size: 0.75rem;
          letter-spacing: -1px;
          flex-shrink: 0;
        }

        .badge-text {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-accent);
          line-height: 1.2;
        }

        /* Content card */
        .hero-container {
          position: relative;
          z-index: 5;
          padding-bottom: 4rem;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.25rem;
          border-radius: 1.25rem;
          box-shadow: 0 -4px 30px rgba(0,0,0,0.1);
        }

        .hero-title {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        .title-line {
          display: block;
          margin-bottom: 0.1rem;
        }

        .highlight {
          color: var(--color-primary-blue);
          font-weight: 500;
        }

        .hero-main-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
        }

        .hero-cta {
          width: 100%;
          justify-content: center;
          padding: 1.1rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1.15rem;
          font-weight: 600;
        }

        /* Dot indicators */
        .hero-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .hero-dot.active {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        /* Desktop */
        @media (min-width: 768px) {
          .hero {
            min-height: 550px;
            justify-content: center;
            padding: 3rem 0;
          }
          .hero-slide {
            background-position: var(--desktop-position, center 20%);
          }
          .hero-overlay {
            background: rgba(0,0,0,0.35);
          }
          .hero-badge-container {
            top: 2rem;
            left: 2rem;
            right: auto;
            height: auto;
          }
          .hero-badge {
            padding: 0.75rem 1.25rem;
            border-radius: 1rem;
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
            white-space: normal;
          }
          .badge-icon svg {
            width: 24px;
            height: 24px;
          }
          .badge-stars {
            font-size: 1.1rem;
            letter-spacing: 0;
          }
          .badge-text {
            font-size: 0.9rem;
            max-width: 200px;
          }
          .hero-container {
            padding-bottom: 0;
          }
          .hero-card {
            padding: 2.5rem 3rem;
            border-radius: 1.5rem;
            max-width: 600px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          }
          .hero-title {
            font-size: 1.4rem;
            line-height: 1.35;
            margin-bottom: 1rem;
          }
          .title-line {
            margin-bottom: 0.25rem;
          }
          .hero-main-title {
            font-size: 2.2rem;
            margin-bottom: 0.75rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }
          .hero-cta {
            width: auto;
            padding: 1.25rem 3rem;
            font-size: 1.3rem;
          }
          .hero-dots {
            bottom: 2rem;
            gap: 0.75rem;
          }
          .hero-dot {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </section>
  );
}
