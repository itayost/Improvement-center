import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

// Staff avatar component with fallback
const StaffAvatar = ({ src, name, className }) => {
    const hasImage = src && !src.includes('unsplash');

    if (hasImage) {
        return <img src={src} alt={name} className={className} />;
    }

    return (
        <div className={`${className} avatar-placeholder`}>
            <User size={32} />
        </div>
    );
};

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
        role: 'מאמנת תנועה תפקודית',
        description: 'בעלת תואר פיזיותרפיסטית מקולומביה.',
        img: '/team/raquel.jpeg'
    },
    {
        name: 'יהב בן דוד',
        role: 'פיזיותרפיסטית מוסמכת',
        description: 'בעלת הכשרה לטיפול וסטיבולרי.',
        img: '/team/יהב בן דוד .jpeg'
    },
    {
        name: 'ניצן שלום',
        role: 'מאמנת תנועה תפקודית ודיאטנית קלינית',
        description: '',
        img: '/team/ניצן שלום .jpeg'
    },
    {
        name: 'שחר בק',
        role: 'מאמן תנועה תפקודית',
        description: 'ספורטתרפיסט ומשקם פציעות.',
        img: '/team/שחר בק .jpeg'
    },
    {
        name: 'אדם פלפס',
        role: 'מאמן תנועה תפקודית',
        description: 'טיפוח יציבה ושיווי משקל.',
        img: '/team/אדם פלפס .jpeg'
    },
    {
        name: 'מרגו סולומיאניק',
        role: 'מאמנת תנועה תפקודית',
        description: '',
        img: '/team/מרגו .jpeg'
    },
    {
        name: 'דניאל שפיר',
        role: 'מאמן תנועה תפקודית',
        description: 'משקם נוירולוגי.',
        img: '/team/דניאל שפיר .jpeg'
    },
    {
        name: 'אושרת מאיר',
        role: 'מאמנת תנועה תפקודית ואחות מוסמכת',
        description: 'מס\' רישיון 234603.',
        img: '/team/אושרת מאיר .jpeg'
    },
    {
        name: 'אולגה',
        role: 'מאמנת תנועה תפקודית',
        description: '',
        img: '/team/אולגה .jpeg'
    },
    {
        name: 'אלעד משעני',
        role: 'מאמן תנועה תפקודית',
        description: '',
        img: '/team/אלעד משעני .jpeg'
    },
    {
        name: 'לינוי',
        role: 'מאמנת תנועה תפקודית',
        description: '',
        img: '/team/לינוי .jpeg'
    },
    {
        name: 'קים',
        role: 'מאמנת תנועה תפקודית',
        description: '',
        img: '/team/קים.jpeg'
    },
    {
        name: 'גדי בן שטרית',
        role: 'פיזיותרפיסט מוסמך',
        description: '',
        img: null
    },
    {
        name: 'וג\'ד נסאר',
        role: 'פיזיותרפיסט מוסמך',
        description: 'מס\' רישיון 10110047.',
        img: null
    },
    {
        name: 'ד"ר מיסא סח',
        role: 'רופאה פנימית',
        description: 'מומחית ברפואה פנימית.',
        img: null
    },
    {
        name: 'ד"ר ואיל נסאר',
        role: 'רופא נוירולוג',
        description: 'חלק מהצוות המייעץ.',
        img: null
    },
    {
        name: 'יאיר אהרונוב',
        role: 'מאמן תנועה תפקודית',
        description: '',
        img: null
    },
    {
        name: 'דניאל סנרמן',
        role: 'מאמן תנועה תפקודית',
        description: '',
        img: null
    },
    {
        name: 'מזל מרזוק',
        role: 'מאמנת תנועה תפקודית',
        description: 'מדריכת שיקום מתקדמת.',
        img: null
    },
    {
        name: 'אחמד ביאדסה',
        role: 'פיזיותרפיסט מוסמך',
        description: 'מס\' רישיון 10-151087.',
        img: null
    },
    {
        name: 'מוניס זחאלקה',
        role: 'פיזיותרפיסט מוסמך',
        description: '',
        img: null
    },
    {
        name: 'סנד מסארווה',
        role: 'פיזיותרפיסט מוסמך',
        description: 'בעל הכשרה וסטיבולרית. מס\' רישיון 10-176568.',
        img: null
    },
    {
        name: 'מוחמד חטיב',
        role: 'פיזיותרפיסט מוסמך',
        description: 'מס\' רישיון 10-162135.',
        img: null
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
                            <StaffAvatar src={staff.img} name={staff.name} className="staff-img" />
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
                        <Link to="/contact" className="btn btn-secondary cta-main-btn">
                            צרו קשר עכשיו
                        </Link>
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
        .staff-img.avatar-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          color: #64748b;
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
          background: var(--color-secondary-green-gradient);
          color: white;
        }

        .cta-main-btn {
          padding: 1.1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
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
          .staff-img.avatar-placeholder svg {
            width: 40px;
            height: 40px;
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
