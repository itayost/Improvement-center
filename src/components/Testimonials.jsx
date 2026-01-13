import { useRef } from 'react';
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <svg width={size} height={size} viewBox="0 0 24 24">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

// Avatar component with fallback (matching About page style)
const Avatar = ({ name, image }) => {
    if (image) {
        return (
            <div className="avatar">
                <img src={image} alt={name} />
            </div>
        );
    }

    return (
        <div className="avatar avatar-placeholder">
            <User size={24} />
        </div>
    );
};

const testimonials = [
    {
        name: "פרידה אסא",
        text: "אלינה יקרה ואהובה! תודה רבה ועוד מיליון פעם תודה על הטיפול המסור באמנו. מאמנת מקצועית שאין שני לה, בשילוב של סבר פנים יפות, נימוסין והליכות, אדיבות וסבלנות אין קץ. ממפגש למפגש אמי שיתפה יותר ויותר פעולה והשתפר.",
        stars: 5,
        source: 'google',
        image: '/testimonials/socials/Frida.jpeg'
    },
    {
        name: "דורון כהן",
        text: "המלצתי לאבא שלי, לאחר סדרת מפגשים היה שיפור עצום! הקשבה, מקצועיות. ממליץ בחום.",
        stars: 5,
        source: 'google',
        image: '/testimonials/socials/Doron.jpeg'
    },
    {
        name: "עמוס אוסטרייך",
        text: "מאוד מקצועיים, עזרו לאבא שלי עם הביטחון בהליכה. ממליץ בחום.",
        stars: 5,
        source: 'facebook',
        image: '/testimonials/socials/Amos.png'
    },
    {
        name: "Daniel Yn",
        text: "חברה מקצועית מאוד ששמה את טובת הלקוח בראש. כל הכבוד לכם.",
        stars: 5,
        source: 'facebook',
        image: '/testimonials/socials/Daniel Yn.jpeg'
    },
    {
        name: "Shay Azulay",
        text: "השירות מצוין, מקצוענים ממש. ממליץ!",
        stars: 5,
        source: 'facebook',
        image: '/testimonials/socials/Shay Azulay.jpeg'
    },
    {
        name: "טלי עקרי",
        text: "המרכז לשיפור התנועה הוא המקום שישפר את התנועה, האמונה והתקווה של המטופל. אבי בן ה-80 חולה פרקינסון - איתי המטפל מצליח להוציא ממנו דברים שלא הייתי מדמיינת. קימה עצמאית מכיסאו, הליכה קצרה ללא הליכון!",
        stars: 5,
        source: 'google',
        image: '/testimonials/socials/Tali.jpeg'
    },
    {
        name: "ערן פניג",
        text: "אמי מעל גיל 90 ירדה מאד ביכולת התנועה אחרי שפעת. רון עשה עבודה מקצועית מאד, מסורה ומתמידה. חל שיפור ניכר - היא מצליחה לעמוד ולהתהלך בדירה. המקצועיות והיחס האנושי ראויים לציון!",
        stars: 5,
        source: 'google'
    },
    {
        name: "יובל גרניט",
        text: "אבא שלי עבר תהליך מדהים – מאדם שהתקשה לקום מהכיסא, הוא הפך שוב לעצמאי ובטוח בעצמו. איתי ידע בדיוק איך לדבר אליו ולעודד אותו, עם המון רוגע, מקצועיות ולב גדול.",
        stars: 5,
        source: 'google'
    }
];

export default function Testimonials() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 420; // card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">מה הלקוחות מספרים</h2>

                <div className="testimonials-wrapper">
                    <button className="nav-arrow nav-arrow-right" onClick={() => scroll('right')} aria-label="הקודם">
                        <ChevronRight size={28} />
                    </button>

                    <div className="testimonials-grid" ref={scrollRef}>
                        {testimonials.map((item, i) => (
                            <div key={i} className="testimonial-card card">
                                <div className="card-header">
                                    <Avatar name={item.name} image={item.image} />
                                    <div className="author-info">
                                        <span className="author-name">{item.name}</span>
                                        <div className="source-badge">
                                            {item.source === 'facebook' ? (
                                                <>
                                                    <FacebookIcon size={16} />
                                                    <span>ממליץ בפייסבוק</span>
                                                </>
                                            ) : (
                                                <>
                                                    <GoogleIcon size={16} />
                                                    <span>ביקורת מגוגל</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="stars">
                                    {[...Array(item.stars)].map((_, idx) => (
                                        <Star key={idx} size={18} fill="#FFD700" color="#FFD700" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{item.text}"</p>
                            </div>
                        ))}
                    </div>

                    <button className="nav-arrow nav-arrow-left" onClick={() => scroll('left')} aria-label="הבא">
                        <ChevronLeft size={28} />
                    </button>
                </div>
            </div>

            <style>{`
        .testimonials-section {
          padding: 2.5rem 0;
          background: var(--color-bg-light);
          border-radius: 1.25rem;
          overflow: hidden;
        }
        .testimonials-wrapper {
          position: relative;
        }
        .nav-arrow {
          display: none;
        }
        .testimonials-grid {
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
        .testimonials-grid::-webkit-scrollbar {
          display: none;
        }
        .testimonial-card {
          flex: 0 0 85%;
          scroll-snap-align: center;
          background: white;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-card);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          color: #64748b;
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 700;
          color: var(--color-accent);
          font-size: 0.95rem;
        }

        .source-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .stars {
          display: flex;
          gap: 0.2rem;
        }

        .testimonial-text {
          font-size: 0.95rem;
          font-style: italic;
          color: var(--color-text-main);
          line-height: 1.7;
          min-height: auto;
          text-align: right;
        }

        @media (min-width: 768px) {
          .testimonials-section {
            padding: 6rem 0;
            border-radius: 1.5rem;
            overflow: visible;
          }
          .testimonials-wrapper {
            position: relative;
          }
          .nav-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 48px;
            background: white;
            border: none;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            cursor: pointer;
            z-index: 10;
            color: var(--color-accent);
            transition: all 0.2s;
          }
          .nav-arrow:hover {
            background: var(--color-primary);
            color: white;
            transform: translateY(-50%) scale(1.1);
          }
          .nav-arrow-right {
            right: -24px;
          }
          .nav-arrow-left {
            left: -24px;
          }
          .testimonials-grid {
            gap: 1.5rem;
            margin: 0;
            padding: 1rem 0;
          }
          .testimonial-card {
            flex: 0 0 400px;
            padding: 2rem;
            gap: 1.25rem;
            border-radius: 1.25rem;
          }
          .avatar {
            width: 56px;
            height: 56px;
          }
          .avatar-placeholder svg {
            width: 28px;
            height: 28px;
          }
          .author-name {
            font-size: 1rem;
          }
          .testimonial-text {
            font-size: 1rem;
            line-height: 1.8;
          }
        }
      `}</style>
        </section>
    );
}
