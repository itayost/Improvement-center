import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">

                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="המרכז לשיפור התנועה" className="footer-logo-img" />
                        <span className="footer-logo-text">המרכז לשיפור התנועה</span>
                    </Link>
                    <p className="footer-desc">
                        הבית שלכם לבריאות ואיכות חיים בגיל השלישי.
                        אנחנו כאן כדי לעזור לכם לחזור לעצמאות מלאה.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>קישורים מהירים</h3>
                    <ul className="footer-links">
                        <li><Link to="/">דף הבית</Link></li>
                        <li><Link to="/about">אודות</Link></li>
                        <li><Link to="/services">שירותים</Link></li>
                        <li><Link to="/blog">בלוג</Link></li>
                        <li><Link to="/contact">צור קשר</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>צור קשר</h3>
                    <ul className="contact-list">
                        <li>
                            <Phone size={18} />
                            <a href="tel:073-729-66-99" style={{color: '#e2e8f0'}} onClick={() => trackPhoneClick('footer')}>073-729-66-99</a>
                        </li>
                        <li>
                            <WhatsAppIcon size={18} />
                            <a href="https://wa.me/972504776665" style={{color: '#e2e8f0'}} onClick={() => trackWhatsAppClick('footer')}>050-477-6665 (WhatsApp)</a>
                        </li>
                        <li>
                            <Mail size={18} />
                            <a href="mailto:office@improve-movement.co.il" style={{color: '#e2e8f0'}}>office@improve-movement.co.il</a>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>שירות בכל רחבי הארץ</span>
                        </li>
                    </ul>
                    <p style={{fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.5rem'}}>א'-ה' 10:00-17:00</p>
                    <div className="social-links">
                        <a href="https://facebook.com/improvmovement" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook /></a>
                        <a href="https://instagram.com/improvemovment" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram /></a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© 2026 כל הזכויות שמורות למרכז לשיפור התנועה</p>
                    <p className="privacy-link"><Link to="/privacy-policy">מדיניות פרטיות</Link></p>
                    <p className="credit">בנייה ועיצוב: <a href="https://www.itayost.com/" target="_blank" rel="noopener noreferrer">ItayOst</a></p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-accent);
          color: white;
          padding-top: 2rem;
          border-radius: 1.5rem 1.5rem 0 0;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 2rem;
          text-align: center;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .footer-logo-img {
          height: 35px;
        }
        .footer-logo-text {
          font-weight: 700;
          font-size: 1rem;
        }
        .footer-desc {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .footer-col h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem 1.5rem;
        }
        .footer-links li {
          margin-bottom: 0;
        }
        .footer-links a {
          color: #e2e8f0;
          transition: color 0.2s;
          font-size: 0.9rem;
        }
        .footer-links a:hover {
          color: var(--color-primary);
        }
        .contact-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e2e8f0;
          font-size: 0.85rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }
        .social-icon:hover {
          background: var(--color-primary);
        }
        .footer-bottom {
          background: rgba(0,0,0,0.2);
          padding: 1rem 0;
          text-align: center;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .privacy-link {
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
        .privacy-link a {
          color: #cbd5e1;
          transition: color 0.2s;
        }
        .privacy-link a:hover {
          color: var(--color-primary);
        }
        .credit {
          margin-top: 0.5rem;
          font-size: 0.75rem;
        }
        .credit a {
          color: var(--color-primary);
          transition: opacity 0.2s;
        }
        .credit a:hover {
          opacity: 0.8;
        }

        @media (min-width: 768px) {
          .footer {
            padding-top: 4rem;
            border-radius: 2rem 2rem 0 0;
            margin-bottom: 0;
          }
          .footer-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
            padding-bottom: 3rem;
            text-align: right;
          }
          .footer-logo {
            justify-content: flex-start;
            margin-bottom: 1rem;
          }
          .footer-logo-img {
            height: 40px;
          }
          .footer-logo-text {
            font-size: 1.2rem;
          }
          .footer-desc {
            font-size: 1rem;
          }
          .footer-col h3 {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
          }
          .footer-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }
          .footer-links li {
            margin-bottom: 0.8rem;
          }
          .footer-links a {
            font-size: 1rem;
          }
          .contact-list {
            align-items: flex-start;
            gap: 0.8rem;
          }
          .contact-list li {
            gap: 0.8rem;
            font-size: 0.95rem;
          }
          .social-links {
            justify-content: flex-start;
            gap: 1rem;
            margin-top: 1.5rem;
          }
          .social-icon {
            width: 40px;
            height: 40px;
          }
          .footer-bottom {
            padding: 1.5rem 0;
            font-size: 0.9rem;
          }
        }
      `}</style>
        </footer>
    );
}
