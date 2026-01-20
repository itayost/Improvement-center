import { CheckCircle, Users, Activity, Heart, Brain, Home, Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

const mainServices = [
    {
        title: 'מבדק הערכה מקיף',
        icon: <Activity size={32} />,
        description: 'המפגש הראשוני – הבסיס לתוכנית ליווי מותאמת אישית',
        details: [
            'הערכת כוח שריר - בדיקה של קבוצות השרירים המרכזיות',
            'בדיקת שיווי משקל סטטי ודינאמי - הערכת יציבות בעמידה ובהליכה',
            'טווחי תנועה וגמישות - בדיקת מפרקים מרכזיים (ירך, ברך, קרסול, כתף)',
            'הבנת המצב המנטלי - תחושת מסוגלות, מוטיבציה ופחד מנפילה',
            'זיהוי גורמי סיכון לנפילות'
        ]
    },
    {
        title: 'שיקום לאחר ניתוח',
        icon: <Heart size={32} />,
        description: 'החזרה לתפקוד מלא אחרי ניתוחים והחלפת מפרקים',
        details: [
            'שיקום לאחר החלפת מפרק ירך',
            'שיקום לאחר שבר בצוואר הירך',
            'שיקום לאחר ניתוחי ברך',
            'חיזוק שרירים והחזרת טווחי תנועה',
            'תרגול הליכה והחזרת ביטחון'
        ]
    },
    {
        title: 'טיפול בכאב ויציבות',
        icon: <Activity size={32} />,
        description: 'הקלה על כאבים ושיפור היציבות בתנועה',
        details: [
            'טיפול בכאבי גב תחתון',
            'טיפול בכאבי כתפיים וברכיים',
            'שיפור שיווי משקל ויציבות',
            'מניעת נפילות והתאמת הסביבה',
            'חיזוק שרירי הליבה'
        ]
    },
    {
        title: 'ליווי קוגניטיבי ומנטלי',
        icon: <Brain size={32} />,
        description: 'תמיכה רגשית וקוגניטיבית לצד השיקום הפיזי',
        details: [
            'התמודדות עם פחד מנפילה',
            'חיזוק הביטחון העצמי',
            'שיפור המוטיבציה וההתמדה',
            'ליווי מותאם לחולי דמנציה',
            'תמיכה במשפחה ובמטפלים'
        ]
    }
];

const teamTypes = [
    { name: 'פיזיותרפיסטים', desc: 'מומחים בשיקום תנועתי ופיזי' },
    { name: 'ספורטתרפיסטים', desc: 'מתמחים בתנועה ואימון פונקציונלי' },
    { name: 'מאמני תנועה תפקודית', desc: 'הכשרה ייעודית לעבודה עם מבוגרים' },
    { name: 'דיאטניות', desc: 'ייעוץ תזונתי מותאם' }
];

export default function ServicesPage() {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="section-title">השירותים שלנו</h1>
                <p className="page-intro">
                    במרכז לשיפור התנועה אנו מציעים מגוון שירותים מקיפים לשיפור איכות החיים,
                    העצמאות והביטחון בתנועה. כל השירותים מתבצעים בבית המטופל, בסביבה המוכרת והבטוחה.
                </p>

                {/* Main Services Grid */}
                <div className="services-grid">
                    {mainServices.map((service, idx) => (
                        <div key={idx} className="service-card card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <ul className="service-details">
                                {service.details.map((detail, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Peilim+ Section */}
                <div className="peilim-section card">
                    <div className="peilim-content">
                        <h2>פעילים+ | ליווי רציף בין המפגשים</h2>
                        <p>
                            אחד ההבדלים המשמעותיים שלנו הוא הליווי בין הביקורים.
                            באמצעות פעילים+, פלטפורמת התרגול הדיגיטלית שלנו, אנו נשארים בקשר רציף
                            עם המטופלים גם מחוץ למפגש הפרונטלי.
                        </p>
                        <ul className="peilim-features">
                            <li><CheckCircle size={20} /> תרגול מותאם אישית בין המפגשים</li>
                            <li><CheckCircle size={20} /> חיזוק ההתמדה והביטחון</li>
                            <li><CheckCircle size={20} /> שמירה על רצף טיפולי</li>
                            <li><CheckCircle size={20} /> תחושת ליווי מתמשכת – "קשר יום יומי"</li>
                        </ul>
                    </div>
                </div>

                {/* Team Types */}
                <div className="team-section">
                    <h2 className="sub-title">הצוות הרב-מקצועי שלנו</h2>
                    <p className="team-intro">
                        למעלה מ-100 אנשי מקצוע בפריסה ארצית, עובדים יחד סביב כל מטופל
                    </p>
                    <div className="team-grid">
                        {teamTypes.map((type, idx) => (
                            <div key={idx} className="team-type-card">
                                <Users size={24} />
                                <h4>{type.name}</h4>
                                <p>{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Home Service Highlight */}
                <div className="home-service card">
                    <Home size={48} />
                    <div>
                        <h3>כל השירותים בבית שלך</h3>
                        <p>
                            אנחנו מגיעים אליך! כל הטיפולים, ההערכות והאימונים מתבצעים בבית המטופל,
                            בסביבה המוכרת, הנוחה והבטוחה.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="cta-section">
                    <h3>רוצים להתחיל?</h3>
                    <p>המפגש הראשון כולל מבדק הערכה מקיף</p>
                    <div className="cta-buttons">
                        <a href="tel:050-477-6665" className="btn btn-secondary cta-call-btn" onClick={() => trackPhoneClick('services_page')}>
                            <Phone size={20} />
                            חייגו עכשיו
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .page-container {
                    padding-top: 1rem;
                    padding-bottom: 5rem;
                }

                .page-intro {
                    text-align: center;
                    margin: 0 auto 2rem;
                    font-size: 1rem;
                    color: var(--color-text-main);
                    line-height: 1.7;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .service-card {
                    padding: 1.25rem;
                    text-align: right;
                    border-radius: 1.25rem;
                }

                .service-icon {
                    color: var(--color-primary);
                    margin-bottom: 0.75rem;
                }

                .service-card h3 {
                    font-size: 1.2rem;
                    color: var(--color-accent);
                    margin-bottom: 0.5rem;
                }

                .service-desc {
                    color: var(--color-text-muted);
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                }

                .service-details {
                    list-style: none;
                    padding: 0;
                }

                .service-details li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-main);
                    font-size: 0.85rem;
                }

                .service-details li svg {
                    color: var(--color-secondary-green);
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .peilim-section {
                    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    border-right: 4px solid var(--color-primary);
                    border-radius: 1.25rem;
                }

                .peilim-content h2 {
                    color: var(--color-accent);
                    margin-bottom: 0.75rem;
                    font-size: 1.2rem;
                }

                .peilim-content > p {
                    color: var(--color-text-main);
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    font-size: 0.95rem;
                }

                .peilim-features {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .peilim-features li {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-text-main);
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                .peilim-features li svg {
                    color: var(--color-primary);
                    flex-shrink: 0;
                }

                .team-section {
                    margin-bottom: 2rem;
                }

                .sub-title {
                    text-align: center;
                    font-size: 1.4rem;
                    color: var(--color-accent);
                    margin-bottom: 0.5rem;
                }

                .team-intro {
                    text-align: center;
                    color: var(--color-text-muted);
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.75rem;
                }

                .team-type-card {
                    background: white;
                    padding: 1rem;
                    border-radius: 1rem;
                    text-align: center;
                    box-shadow: var(--shadow-card);
                }

                .team-type-card svg {
                    color: var(--color-primary);
                    margin-bottom: 0.5rem;
                }

                .team-type-card h4 {
                    color: var(--color-accent);
                    margin-bottom: 0.25rem;
                    font-size: 0.85rem;
                }

                .team-type-card p {
                    color: var(--color-text-muted);
                    font-size: 0.75rem;
                }

                .home-service {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1rem;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                    border-radius: 1.25rem;
                }

                .home-service svg {
                    color: var(--color-accent);
                    flex-shrink: 0;
                }

                .home-service h3 {
                    color: var(--color-accent);
                    margin-bottom: 0.25rem;
                    font-size: 1.2rem;
                }

                .home-service p {
                    color: var(--color-text-main);
                    line-height: 1.6;
                    font-size: 0.9rem;
                }

                .cta-section {
                    text-align: center;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, var(--color-accent) 0%, #1e3a8a 100%);
                    border-radius: 1.5rem;
                    color: white;
                }

                .cta-section h3 {
                    font-size: 1.3rem;
                    margin-bottom: 0.5rem;
                }

                .cta-section > p {
                    margin-bottom: 1rem;
                    opacity: 0.9;
                    font-size: 0.9rem;
                }

                .cta-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .cta-buttons .btn {
                    border-radius: 0.75rem;
                }

                .cta-buttons .btn-secondary {
                    background: var(--color-secondary-green-gradient);
                    color: white;
                }

                .cta-call-btn {
                    padding: 1.1rem 2.5rem;
                    font-size: 1.15rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                @media (min-width: 768px) {
                    .page-container {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                    .page-intro {
                        max-width: 800px;
                        margin: 0 auto 3rem;
                        font-size: 1.2rem;
                    }
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2rem;
                        margin-bottom: 4rem;
                    }
                    .service-card {
                        padding: 2rem;
                        border-radius: 1.5rem;
                    }
                    .service-card h3 {
                        font-size: 1.4rem;
                    }
                    .service-desc {
                        font-size: 1rem;
                        margin-bottom: 1.5rem;
                    }
                    .service-details li {
                        font-size: 0.95rem;
                        gap: 0.75rem;
                        margin-bottom: 0.75rem;
                    }
                    .peilim-section {
                        padding: 3rem;
                        margin-bottom: 4rem;
                        border-radius: 1.5rem;
                    }
                    .peilim-content h2 {
                        font-size: 1.6rem;
                        margin-bottom: 1rem;
                    }
                    .peilim-content > p {
                        font-size: 1rem;
                        margin-bottom: 1.5rem;
                    }
                    .peilim-features {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    .peilim-features li {
                        font-size: 1rem;
                    }
                    .team-section {
                        margin-bottom: 4rem;
                    }
                    .sub-title {
                        font-size: 1.8rem;
                    }
                    .team-intro {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }
                    .team-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    .team-type-card {
                        padding: 1.5rem;
                        border-radius: 1.25rem;
                    }
                    .team-type-card h4 {
                        font-size: 1rem;
                    }
                    .team-type-card p {
                        font-size: 0.85rem;
                    }
                    .home-service {
                        flex-direction: row;
                        text-align: right;
                        gap: 2rem;
                        padding: 2.5rem;
                        margin-bottom: 4rem;
                        border-radius: 1.5rem;
                    }
                    .home-service h3 {
                        font-size: 1.4rem;
                    }
                    .home-service p {
                        font-size: 1rem;
                    }
                    .cta-section {
                        padding: 3rem;
                        border-radius: 2rem;
                    }
                    .cta-section h3 {
                        font-size: 1.8rem;
                    }
                    .cta-section > p {
                        font-size: 1rem;
                        margin-bottom: 1.5rem;
                    }
                    .cta-buttons {
                        flex-direction: row;
                        justify-content: center;
                        gap: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}
