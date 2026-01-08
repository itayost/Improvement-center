import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', verticalAlign: 'middle', marginLeft: '0.25rem'}}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const topServices = [
  {
    title: 'שירותי תנועה ושיקום עד הבית',
    desc: 'המרכז לשיפור התנועה מעניק שירותי אימון ושיקום עד לבית הלקוח, בליווי צוות רב־מקצועי בהתאמה אישית למצב התפקודי, ליכולת ולמטרות של כל אדם.',
    link: '/contact',
    linkText: 'להשארת פרטים'
  },
  {
    title: 'צוות רב־מקצועי',
    desc: 'פיזיותרפיסטים מוסמכים, מאמני תנועה תפקודית, ספורטתרפיסטים, רופאים ואנשי מקצוע נוספים – הפועלים יחד ליצירת תהליך מותאם אישית לשיפור העצמאות, התנועה ואיכות החיים.',
    link: '/about',
    linkText: 'לצפייה בצוות'
  },
  {
    title: 'הערכת תפקוד עד הבית',
    desc: 'הבנת הרקע, בדיקת כוח שריר, טווחי תנועה, שיווי משקל סטטי ודינאמי, יכולות תפקודיות ומיפוי המצב הקיים והיכולות.',
    link: '/contact',
    linkText: 'לתיאום הערכה'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Top Grid: 3 Cards */}
        <div className="services-top-grid">
          {topServices.map((service, index) => (
            <div key={index} className="assuta-card">
              <h3 className="card-title">{service.title}</h3>
              <div className="card-divider"></div>
              <p className="card-desc">{service.desc}</p>
              <Link to={service.link} className="card-link-btn">
                {service.linkText}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Grid: Split Wide Cards */}
        <div className="services-bottom-grid">
          {/* Text Card */}
          <div className="assuta-card wide-text-card">
            <h3 className="card-title">ליווי דיגיטלי – חלק מהשיטה שלנו</h3>
            <div className="card-divider"></div>
            <p className="card-desc">
              במרכז לשיפור התנועה, השירות לא מסתיים כשאיש המקצוע יוצא מהבית.
              כחלק בלתי נפרד מהשיטה שלנו, כל מתאמן ומתאמנת מקבלים ליווי דיגיטלי אישי – פעילים+
              שנועד לשמור על רצף, ביטחון והתקדמות בין המפגשים.
            </p>
            <p className="card-subtitle">הליווי הדיגיטלי מאפשר:</p>
            <ul className="peilim-list">
              <li>חיזוק והטמעה של מה שנעשה במפגשים הפרונטליים</li>
              <li>תזכורת עדינה לתנועה נכונה ושגרה יומיומית</li>
              <li>הכוונה מקצועית גם בימים ללא אימון</li>
              <li>תחושת מסגרת וליווי – לא לבד בין האימונים</li>
            </ul>
            <p className="card-footer-text">
              המערכת פשוטה, נגישה ומותאמת במיוחד לגיל השלישי,
              ומשלימה את העבודה בבית כחלק מתהליך אחד רציף.
            </p>
            <a href="https://wa.me/972504776665" target="_blank" rel="noopener noreferrer" className="text-link"><WhatsAppIcon size={16} /> התחילו עכשיו</a>
          </div>

          {/* Image Card */}
          <div className="assuta-card-image">
            <img src="/פעילים פלוס.png" alt="פעילים פלוס" />
          </div>
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 1.5rem 0;
        }

        .services-top-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .services-bottom-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .assuta-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: auto;
        }

        .assuta-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .wide-text-card {
          align-items: flex-start;
          text-align: right;
          justify-content: center;
        }
        .wide-text-card .card-divider {
          margin-right: 0;
        }

        .assuta-card-image {
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          height: 200px;
          order: -1;
        }
        .assuta-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .assuta-card-image:hover img {
          transform: scale(1.05);
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 300;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
        }

        .card-divider {
          width: 40px;
          height: 3px;
          background: var(--color-secondary-green);
          margin-bottom: 1rem;
          border-radius: 2px;
        }

        .card-desc {
          color: var(--color-text-main);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-link-btn {
          margin-top: auto;
          padding: 0.75rem 1.5rem;
          background: var(--color-secondary-green-gradient);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 0.75rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-block;
        }
        .card-link-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          color: white;
        }

        .text-link {
          padding: 0.75rem 1.5rem;
          background: var(--color-secondary-green-gradient);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 0.75rem;
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
          align-self: center;
          gap: 0.5rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .text-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          color: white;
        }

        .card-subtitle {
          color: var(--color-accent);
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .peilim-list {
          list-style: disc;
          padding-right: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
          font-size: 0.9rem;
        }
        .peilim-list li {
          margin-bottom: 0.35rem;
          line-height: 1.5;
        }

        .card-footer-text {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
          font-style: italic;
        }

        @media (min-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }
          .services-top-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .services-bottom-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1.5rem;
          }
          .assuta-card {
            border-radius: 1.5rem;
            padding: 2.5rem 2rem;
            min-height: 280px;
          }
          .wide-text-card {
            min-height: 450px;
          }
          .card-subtitle {
            font-size: 1.05rem;
            margin-top: 1rem;
          }
          .peilim-list {
            font-size: 1rem;
            padding-right: 1.5rem;
            margin-bottom: 1rem;
          }
          .peilim-list li {
            margin-bottom: 0.5rem;
          }
          .card-footer-text {
            font-size: 0.95rem;
          }
          .assuta-card-image {
            border-radius: 1.5rem;
            min-height: 350px;
            height: 100%;
            order: 0;
          }
          .assuta-card-image img {
            object-position: top center;
          }
          .card-title {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }
          .card-divider {
            margin-bottom: 1.5rem;
          }
          .card-desc {
            font-size: 1.1rem;
          }
          .text-link {
            margin-top: 1.5rem;
            padding: 0.85rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
