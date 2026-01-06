import { Phone, Mail, MapPin } from 'lucide-react';
import Faq from '../components/Faq';

const WhatsAppIcon = ({ size = 24, color = "#25D366" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Trusted organizations logos
const trustedLogos = [
    { src: '/worked with/IMG_4123.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4124.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4125.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4126.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4127.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/ההסתדרות.PNG', alt: 'ההסתדרות' }
];

export default function ContactPage() {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="section-title">צור קשר</h1>

                {/* Contact Form - First */}
                <div className="contact-form-section card">
                    <h2>השאירו פרטים ונחזור אליכם</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>שם מלא</label>
                            <input type="text" className="form-input" placeholder="ישראל ישראלי" />
                        </div>
                        <div className="form-group">
                            <label>טלפון</label>
                            <input type="tel" className="form-input" placeholder="050-0000000" />
                        </div>
                        <div className="form-group">
                            <label>סיבת הפנייה <span className="optional-label">(אופציונלי)</span></label>
                            <select className="form-input">
                                <option value="">בחרו נושא...</option>
                                <option>ייעוץ כללי</option>
                                <option>פיזיותרפיה</option>
                                <option>אימון תנועה תפקודית</option>
                                <option>אחר</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-secondary submit-btn">
                            שלח/י
                        </button>
                    </form>
                </div>

                {/* Trusted Organizations - Second */}
                <div className="trusted-section">
                    <h2 className="sub-title">נותנים בנו אמון</h2>
                    <div className="trusted-scroll">
                        <div className="trusted-track">
                            {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                                <div key={idx} className="logo-item">
                                    <img src={logo.src} alt={logo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Details - Third */}
                <div className="contact-info-section card">
                    <h2>פרטי התקשרות</h2>
                    <div className="contact-methods">
                        <div className="method">
                            <Phone size={24} color="var(--color-primary-blue)" />
                            <div>
                                
                                <a href="tel:073-729-66-99">073-729-66-99</a>
                            </div>
                        </div>
                        <div className="method">
                            <WhatsAppIcon size={24} />
                            <div>
                                
                                <a href="https://wa.me/972504776665" target="_blank" rel="noopener noreferrer">050-477-6665</a>
                            </div>
                        </div>
                        <div className="method">
                            <Mail size={24} color="var(--color-primary-blue)" />
                            <div>
                                
                                <a href="mailto:office@improve-movement.co.il">office@improve-movement.co.il</a>
                            </div>
                        </div>
                        <div className="method">
                            <MapPin size={24} color="var(--color-primary-blue)" />
                            <div>
                                <strong>אזור שירות:</strong>
                                <span>כל רחבי הארץ</span>
                            </div>
                        </div>
                    </div>
                    <p className="hours-text">
                        שעות פעילות המוקד: א'-ה' 10:00-17:00
                    </p>
                </div>
            </div>

            <Faq />

            <style>{`
        .page-container {
          padding-top: 1rem;
          padding-bottom: 0;
        }

        .contact-form-section {
          background: white;
          padding: 1.5rem;
          border-radius: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-form-section h2 {
          color: var(--color-accent);
          font-size: 1.3rem;
          margin-bottom: 1.25rem;
          text-align: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 0.4rem;
          font-weight: 500;
          color: var(--color-text-main);
          font-size: 0.95rem;
        }

        .optional-label {
          font-weight: 400;
          color: var(--color-text-muted);
          font-size: 0.8rem;
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          font-family: inherit;
          font-size: 16px;
          background: var(--color-bg-body);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary-blue);
          box-shadow: 0 0 0 3px rgba(38, 66, 166, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 1.1rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 0.75rem;
          margin-top: 0.5rem;
        }

        .trusted-section {
          margin-bottom: 2rem;
        }

        .sub-title {
          text-align: center;
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .trusted-scroll {
          overflow: hidden;
          padding: 1rem 0;
        }

        .trusted-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scrollLogos 25s linear infinite;
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .logo-item {
          flex-shrink: 0;
          background: white;
          padding: 1rem;
          border-radius: 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-item img {
          height: 60px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(30%);
        }

        .contact-info-section {
          background: white;
          padding: 1.5rem;
          border-radius: 1.5rem;
        }

        .contact-info-section h2 {
          color: var(--color-accent);
          font-size: 1.3rem;
          margin-bottom: 1.25rem;
          text-align: center;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .method {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          padding: 0.75rem 1rem;
          background: var(--color-bg-body);
          border-radius: 1rem;
        }

        .method svg {
          flex-shrink: 0;
        }

        .method a, .method span {
          color: var(--color-primary);
          font-weight: 500;
        }

        .hours-text {
          margin-top: 1.25rem;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .page-container {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }

          .contact-form-section {
            padding: 2.5rem;
            border-radius: 2rem;
            max-width: 600px;
            margin: 0 auto 3rem;
          }

          .contact-form-section h2 {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
          }

          .form-group label {
            font-size: 1rem;
          }

          .form-input {
            padding: 1rem;
          }

          .submit-btn {
            padding: 1.25rem;
            font-size: 1.2rem;
          }

          .trusted-section {
            margin-bottom: 3rem;
          }

          .sub-title {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
          }

          .trusted-track {
            gap: 2rem;
          }

          .logo-item {
            padding: 1rem 1.5rem;
            border-radius: 1.25rem;
          }

          .logo-item img {
            height: 80px;
            max-width: 160px;
          }

          .contact-info-section {
            padding: 2.5rem;
            border-radius: 2rem;
            max-width: 700px;
            margin: 0 auto;
          }

          .contact-info-section h2 {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
          }

          .contact-methods {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .method {
            font-size: 1rem;
            padding: 1rem 1.25rem;
          }

          .hours-text {
            margin-top: 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
        </div>
    );
}
