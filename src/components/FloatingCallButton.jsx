import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <>
      <a href="tel:050-477-6665" className="floating-call-btn" aria-label="התקשרו אלינו">
        <Phone size={28} />
      </a>
      <style>{`
        .floating-call-btn {
          position: fixed;
          bottom: 5.5rem;
          left: 0.5rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #88C23D, #6BA82E);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(136, 194, 61, 0.4);
          z-index: 1000;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        .floating-call-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(136, 194, 61, 0.5);
        }
        @keyframes pulse {
          0% { box-shadow: 0 4px 15px rgba(136, 194, 61, 0.4); }
          50% { box-shadow: 0 4px 25px rgba(136, 194, 61, 0.6); }
          100% { box-shadow: 0 4px 15px rgba(136, 194, 61, 0.4); }
        }
        @media (min-width: 768px) {
          .floating-call-btn {
            width: 70px;
            height: 70px;
            bottom: 2rem;
            left: 2rem;
          }
        }
      `}</style>
    </>
  );
}
