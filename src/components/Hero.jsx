import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Carousel slides configuration
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070",
    badge: {
      text: "מקום ראשון בגוגל בכמות ואיכות הביקורות",
      stars: true
    }
  },
  {
    image: "/hero/תמונה 2.png",
    badge: null
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070",
    badge: {
      text: "מקום ראשון בפייסבוק בכמות ואיכות הביקורות",
      stars: true
    }
  },
  {
    image: "/hero/תמונה 4.png",
    badge: null
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
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
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Floating trust badge */}
      {heroSlides[currentSlide].badge && (
        <div className="hero-badge">
          <span className="badge-stars">★★★★★</span>
          <span className="badge-text">{heroSlides[currentSlide].badge.text}</span>
        </div>
      )}

      {/* Content area */}
      <div className="container hero-container">
        <div className="hero-card">
          <h1 className="hero-title">
            <span className="title-line">מרגישים ירידה בתפקוד?</span>
            <span className="title-line">חווים קושי בפעולות יום יומיות פשוטות?</span>
            <span className="title-line highlight">חוסר שיווי משקל או קשיי הליכה?</span>
          </h1>
          <p className="hero-subtitle">
            אימוני תנועה תפקודית עד הבית וליווי תהליך אישי, בצורה רציפה שמטרתו להחזיר ביטחון, עצמאות ואיכות חיים.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary hero-cta">
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

        /* Compact floating badge */
        .hero-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 0.4rem 0.75rem;
          border-radius: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 10;
          animation: badgeFadeIn 0.5s ease-out;
        }

        @keyframes badgeFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .badge-stars {
          color: #FFB800;
          font-size: 0.7rem;
          letter-spacing: -1px;
        }

        .badge-text {
          font-size: 0.6rem;
          font-weight: 600;
          color: var(--color-accent);
          line-height: 1.2;
          max-width: 100px;
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
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--color-accent);
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .title-line {
          display: block;
          margin-bottom: 0.15rem;
        }

        .highlight {
          color: var(--color-primary-blue);
          font-weight: 600;
        }

        .hero-subtitle {
          font-size: 0.85rem;
          color: var(--color-text-main);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
        }

        .hero-cta {
          width: 100%;
          justify-content: center;
          padding: 0.9rem 1.5rem;
          border-radius: 0.75rem;
          font-size: 1rem;
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
            background-position: center 20%;
          }
          .hero-overlay {
            background: rgba(0,0,0,0.35);
          }
          .hero-badge {
            top: 2rem;
            left: 2rem;
            padding: 0.75rem 1.25rem;
            border-radius: 1rem;
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
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
            font-size: 1.8rem;
            line-height: 1.35;
            margin-bottom: 1.5rem;
          }
          .title-line {
            margin-bottom: 0.35rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          .hero-cta {
            width: auto;
            padding: 1.1rem 2.5rem;
            font-size: 1.15rem;
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
