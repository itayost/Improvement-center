import React from 'react';
import { Star } from 'lucide-react';

// Google icon component
const GoogleIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
);

const testimonials = [
    {
        name: "טלי עקרי",
        location: "ראשון לציון",
        text: "המרכז לשיפור התנועה הוא המקום שישפר את התנועה, האמונה והתקווה של המטופל. אבי בן ה-80 חולה פרקינסון - איתי המטפל מצליח להוציא ממנו דברים שלא הייתי מדמיינת. קימה עצמאית מכיסאו, הליכה קצרה ללא הליכון!",
        stars: 5
    },
    {
        name: "ערן פניג",
        location: "גבעתיים",
        text: "אמי מעל גיל 90 ירדה מאד ביכולת התנועה אחרי שפעת. רון עשה עבודה מקצועית מאד, מסורה ומתמידה. חל שיפור ניכר - היא מצליחה לעמוד ולהתהלך בדירה. המקצועיות והיחס האנושי ראויים לציון!",
        stars: 5
    },
    {
        name: "יובל גרניט",
        location: "תל אביב",
        text: "אבא שלי עבר תהליך מדהים – מאדם שהתקשה לקום מהכיסא, הוא הפך שוב לעצמאי ובטוח בעצמו. איתי ידע בדיוק איך לדבר אליו ולעודד אותו, עם המון רוגע, מקצועיות ולב גדול.",
        stars: 5
    },
    {
        name: "viki khana",
        location: "קריית אתא",
        text: "יחס אישי, סבלנות והכוונה מדויקת. בזכות הטיפולים הורגש שיפור משמעותי במצבו של אבי. ממליצה מאוד.",
        stars: 5
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">מה הלקוחות מספרים</h2>

                <div className="testimonials-grid">
                    {testimonials.map((item, i) => (
                        <div key={i} className="testimonial-card card">
                            <div className="google-badge">
                                <GoogleIcon size={18} />
                                <span>ביקורת מגוגל</span>
                            </div>
                            <div className="stars">
                                {[...Array(item.stars)].map((_, idx) => (
                                    <Star key={idx} size={18} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{item.name}</span>
                                <span className="author-location">, {item.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-section {
          padding: 2.5rem 0;
          background: var(--color-bg-light);
          border-radius: 1.25rem;
        }
        .testimonials-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .testimonial-card {
          background: white;
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          border-radius: 1rem;
        }

        .google-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
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
        }

        .testimonial-author {
          margin-top: auto;
          font-weight: 700;
          color: var(--color-accent);
          font-size: 0.9rem;
        }

        .author-location {
          font-weight: 300;
          color: var(--color-text-muted);
        }

        @media (min-width: 768px) {
          .testimonials-section {
            padding: 6rem 0;
            border-radius: 1.5rem;
          }
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .testimonial-card {
            padding: 2.5rem;
            gap: 1.5rem;
            border-radius: 1.25rem;
          }
          .testimonial-text {
            font-size: 1.1rem;
            line-height: 1.8;
            min-height: 80px;
          }
          .testimonial-author {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
}
