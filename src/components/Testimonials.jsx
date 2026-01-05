import React from 'react';
import { Star } from 'lucide-react';

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
