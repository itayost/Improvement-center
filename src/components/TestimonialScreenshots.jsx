import React, { useState } from 'react';

const screenshots = [
  '/testimonials/1.jpeg',
  '/testimonials/2.jpeg',
  '/testimonials/3.jpeg',
  '/testimonials/4.jpeg',
  '/testimonials/5.jpeg',
  '/testimonials/6.jpeg',
  '/testimonials/7.jpeg',
  '/testimonials/8.jpeg'
];

export default function TestimonialScreenshots() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="screenshots-section">
      <div className="container">
        <h2 className="section-title">מה אומרים עלינו</h2>
        <div className="screenshots-grid">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="screenshot-item"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`ביקורת ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage} alt="ביקורת מוגדלת" />
        </div>
      )}

      <style>{`
        .screenshots-section {
          padding: 2rem 0;
          overflow: hidden;
        }

        .screenshots-grid {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.5rem 0;
          margin: 0 -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .screenshots-grid::-webkit-scrollbar {
          display: none;
        }

        .screenshot-item {
          flex: 0 0 85%;
          scroll-snap-align: center;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .screenshot-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .screenshot-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .lightbox img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 0.5rem;
        }

        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
        }

        @media (min-width: 768px) {
          .screenshots-section {
            padding: 4rem 0;
            overflow: visible;
          }

          .screenshots-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            overflow-x: visible;
            scroll-snap-type: none;
            margin: 0;
            padding: 0;
          }

          .screenshot-item {
            flex: none;
            border-radius: 1.25rem;
          }

          .lightbox-close {
            top: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
