import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Team member images
const placeholderImg = 'https://images.unsplash.com/photo-1559839734-2b71ea86b543?auto=format&fit=crop&q=80&w=150&h=150';

// Trusted organizations logos
const trustedLogos = [
    { src: '/worked with/IMG_4123.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4124.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4125.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4126.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4127.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/ההסתדרות.PNG', alt: 'ההסתדרות' }
];

const staffMembers = [
    {
        name: 'מידד גולן',
        role: 'מייסד ומנכ"ל',
        description: 'מאמן מוסמך לגיל השלישי ומרצה בכיר במכללת ההסתדרות. מייסד המרכז לשיפור התנועה ופעילים+.',
        img: '/team/meydad.jpeg',
        featured: true
    },
    {
        name: 'רקל שרף',
        role: 'פיזיותרפיסטית ומאמנת',
        description: 'מאמנת אישית לגיל השלישי ופיזיותרפיסטית מאוניברסיטת קולומביה.',
        img: '/team/raquel.jpeg'
    },
    {
        name: 'ניצן שלום',
        role: 'דיאטנית קלינית ומאמנת כושר',
        description: 'דיאטנית קלינית, מאמנת כושר וסטודנטית לרפואה.',
        img: '/team/ניצן שלום .jpeg'
    },
    {
        name: 'שחר בק',
        role: 'ספורטתרפיסט ומאמן אישי',
        description: 'מומחה בספורטתרפיה ואימון אישי.',
        img: '/team/שחר בק .jpeg'
    },
    {
        name: 'קים',
        role: 'מאמנת תנועה תפקודית',
        description: 'מתמחה באימון תנועה תפקודית לגיל השלישי.',
        img: '/team/קים.jpeg'
    },
    {
        name: 'מרגו',
        role: 'מאמנת תנועה תפקודית',
        description: 'מאמנת מנוסה בעבודה עם מבוגרים.',
        img: '/team/מרגו .jpeg'
    },
    {
        name: 'יהב בן דוד',
        role: 'מאמן תנועה תפקודית',
        description: 'מתמחה בשיפור תנועה ויציבות.',
        img: '/team/יהב בן דוד .jpeg'
    },
    {
        name: 'לינוי',
        role: 'מאמנת תנועה תפקודית',
        description: 'מאמנת מסורה לשיפור איכות החיים.',
        img: '/team/לינוי .jpeg'
    }
];

export default function AboutPage() {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="section-title">הסיפור שלנו</h1>

                {/* Midad's Story */}
                <div className="story-section">
                    <div className="story-card card">
                        <div className="story-image">
                            <img src="/team/meydad.jpeg" alt="מידד גולן" />
                        </div>
                        <div className="story-content">
                            <h2>איך הכל התחיל</h2>
                            <p>
                                קוראים לי מידד גולן. את דרכי התחלתי בשנת 2017 כמאמן כושר אישי,
                                ועבדתי לאורך השנים עם מגוון רחב של אוכלוסיות. אבל כבר אז היה לי
                                חיבור מיוחד ועמוק לבני הגיל השלישי.
                            </p>
                            <p>
                                במהלך עבודתי פגשתי אנשים מדהימים – עם רצון אמיתי להישאר עצמאיים,
                                פעילים ובטוחים – אבל גם עם לא מעט פחדים, מגבלות וחוסר אמון בגוף שלהם.
                            </p>
                        </div>
                    </div>

                    <div className="highlight-story card">
                        <h3>הסיפור של אדי</h3>
                        <p>
                            אחד המקרים שהשפיעו עליי יותר מכל היה של מטופל בשם אדי.
                            אדי אובחן עם סוכרת סוג 1, ובעקבות סיבוכים רפואיים התקשה מאוד בהליכה.
                            הוא נזקק להליכון, והמשפחה כבר החלה להיערך להרחבת פתחי הבית –
                            מתוך הבנה שכיסא גלגלים הוא כנראה השלב הבא.
                        </p>
                        <p>
                            במהלך תהליך ליווי של כשלושה חודשים, שכלל עבודה מדויקת, הדרגתית
                            ומותאמת ליכולות שלו – אדי החל להשתפר. לאט-לאט, בביטחון ובקצב הנכון.
                        </p>
                        <p className="highlight-text">
                            <strong>בסיום התהליך – אדי חזר ללכת בכוחות עצמו. בלי הליכון. ואפילו בלי מקל הליכה.</strong>
                        </p>
                        <p>
                            התהליך הזה שינה את החיים של אדי – אבל הוא גם שינה את החיים שלי.
                            שם הבנתי דבר אחד בצורה חדה וברורה: אני חייב לעזור לכמה שיותר
                            בני הגיל השלישי בישראל לשפר את איכות חייהם דרך תנועה נכונה, בטוחה ומקצועית.
                        </p>
                        <p><strong>מתוך ההבנה הזו הקמתי את המרכז לשיפור התנועה.</strong></p>
                    </div>
                </div>

                {/* What Makes Us Unique */}
                <div className="unique-section">
                    <h2 className="sub-title">מה מייחד אותנו?</h2>
                    <div className="unique-grid">
                        <div className="unique-card card">
                            <h4>צוות רב-מקצועי</h4>
                            <p>
                                למעלה מ-100 אנשי מקצוע: מאמנים, פיזיותרפיסטים, ספורטתרפיסטים,
                                דיאטניות, אחיות ורופאים – כולם עובדים יחד סביב כל מטופל.
                            </p>
                        </div>
                        <div className="unique-card card">
                            <h4>שיתוף פעולה שמייצר תוצאות</h4>
                            <p>
                                מאמנים לומדים מפיזיותרפיסטים, פיזיותרפיסטים עובדים בשיתוף עם רופאים.
                                כל הידע מעניק יתרון משמעותי לטובת המטופל.
                            </p>
                        </div>
                        <div className="unique-card card">
                            <h4>ליווי רציף – פעילים+</h4>
                            <p>
                                באמצעות פלטפורמת התרגול הדיגיטלית שלנו, אנו נשארים בקשר רציף
                                עם המטופלים גם מחוץ למפגש הפרונטלי. תרגול מותאם אישית, חיזוק התמדה.
                            </p>
                        </div>
                        <div className="unique-card card">
                            <h4>מערכת ליווי ארוכת טווח</h4>
                            <p>
                                לא טיפול חד-פעמי, אלא מערכת שמחברת בין ידע מקצועי, תרגול,
                                מעקב ויחס אנושי. 87% שיעור הצלחה מוכח.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="sub-title">הצוות שלנו</h2>
                <p className="team-intro">
                    הצוות שלנו מונה למעלה מ-100 אנשי מקצוע ברחבי הארץ. הנה חלק מהם:
                </p>
                <div className="staff-grid">
                    {staffMembers.map((staff, idx) => (
                        <div key={idx} className={`staff-card card ${staff.featured ? 'featured' : ''}`}>
                            <img src={staff.img} alt={staff.name} className="staff-img" />
                            <h3>{staff.name}</h3>
                            <span className="staff-role">{staff.role}</span>
                            <p>{staff.description}</p>
                        </div>
                    ))}
                </div>

                {/* Trusted Organizations Section */}
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

                <div className="cta-section">
                    <h3>רוצים להתחיל?</h3>
                    <p>צרו קשר עוד היום ונתאים לכם תוכנית ליווי אישית</p>
                    <div className="cta-buttons">
                        <a href="https://wa.me/972504776665" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <WhatsAppIcon size={18} />
                            דברו איתנו בוואטסאפ
                        </a>
                        <a href="tel:073-729-66-99" className="btn btn-secondary">
                            073-729-66-99
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .page-container {
          padding-top: 1rem;
          padding-bottom: 5rem;
        }

        .story-section {
          margin-bottom: 2rem;
        }

        .story-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.25rem;
          margin-bottom: 1rem;
          text-align: center;
          border-radius: 1.25rem;
        }

        .story-image img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .story-content h2 {
          color: var(--color-accent);
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
        }

        .story-content p {
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .highlight-story {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 1.25rem;
          border-right: 4px solid var(--color-primary);
          border-radius: 1.25rem;
        }

        .highlight-story h3 {
          color: var(--color-accent);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .highlight-story p {
          line-height: 1.7;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
          font-size: 0.9rem;
        }

        .highlight-text {
          color: var(--color-primary) !important;
          font-size: 0.95rem;
          padding: 0.75rem;
          background: white;
          border-radius: 0.75rem;
        }

        .unique-section {
          margin-bottom: 2rem;
        }

        .unique-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .unique-card {
          padding: 1.25rem;
          text-align: center;
          border-radius: 1.25rem;
        }

        .unique-card h4 {
          color: var(--color-primary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .unique-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .sub-title {
          text-align: center;
          font-size: 1.4rem;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .team-intro {
          text-align: center;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .staff-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .staff-card {
           display: flex;
           flex-direction: column;
           align-items: center;
           text-align: center;
           background: var(--color-bg-card);
           border-radius: 1rem;
           box-shadow: var(--shadow-card);
           padding: 1rem;
        }
        .staff-card.featured {
          grid-column: span 2;
          border: 2px solid var(--color-primary);
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }
        .staff-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 0.75rem;
          border: 2px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .staff-card h3 {
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .staff-role {
          color: var(--color-primary-blue);
          font-weight: 500;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        .staff-card p {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        .trusted-section {
          margin-bottom: 2rem;
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
          height: 70px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          filter: grayscale(30%);
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

        .cta-section p {
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
          background: white;
          color: var(--color-accent);
        }

        @media (min-width: 768px) {
          .page-container {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
          .story-section {
            margin-bottom: 4rem;
          }
          .story-card {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 2rem;
            padding: 2rem;
            margin-bottom: 2rem;
            text-align: right;
            border-radius: 1.5rem;
            align-items: center;
          }
          .story-image img {
            width: 180px;
            height: 180px;
            border-radius: 1rem;
          }
          .story-content h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }
          .story-content p {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .highlight-story {
            padding: 2.5rem;
            border-radius: 1.5rem;
          }
          .highlight-story h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .highlight-story p {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .highlight-text {
            font-size: 1.1rem;
            padding: 1rem;
            border-radius: 1rem;
          }
          .unique-section {
            margin-bottom: 4rem;
          }
          .unique-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .unique-card {
            padding: 2rem;
            border-radius: 1.5rem;
          }
          .unique-card h4 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .unique-card p {
            font-size: 1rem;
          }
          .sub-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .team-intro {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          .staff-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
          }
          .staff-card {
            padding: 1.5rem;
            border-radius: 1.25rem;
          }
          .staff-card.featured {
            grid-column: span 1;
          }
          .staff-img {
            width: 100px;
            height: 100px;
            margin-bottom: 1rem;
            border: 3px solid white;
          }
          .staff-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
          }
          .staff-role {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }
          .staff-card p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          .trusted-section {
            margin-bottom: 4rem;
          }
          .trusted-track {
            gap: 2rem;
          }
          .logo-item {
            padding: 1rem 1.5rem;
            border-radius: 1.25rem;
          }
          .logo-item img {
            height: 90px;
            max-width: 180px;
          }
          .cta-section {
            padding: 3rem;
            border-radius: 2rem;
          }
          .cta-section h3 {
            font-size: 1.8rem;
          }
          .cta-section p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
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
