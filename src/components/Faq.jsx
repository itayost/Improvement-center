import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "מה קורה במפגש הראשון?",
        answer: "במפגש הראשוני מבצעים מבדק הערכה מקיף הכולל: הערכת כוח שריר, בדיקת שיווי משקל סטטי ודינאמי, בדיקת טווחי תנועה וגמישות, והבנת המצב המנטלי ופחד מנפילה. בהתבסס על הנתונים נבנית תוכנית ליווי אישית."
    },
    {
        question: "מה אחוזי ההצלחה שלכם?",
        answer: "למעלה מ-87% מהלקוחות מעידים שהרגישו התקדמות משמעותית."
    },
    {
        question: "איפה אתם נותנים שירות?",
        answer: "אנחנו פועלים בכל רחבי הארץ! הצוות שלנו מונה למעלה מ-100 אנשי מקצוע בפריסה ארצית, וכל הטיפולים מתבצעים בבית המטופל."
    },
    {
        question: "מי נמצא בצוות שלכם?",
        answer: "צוות רב-מקצועי הכולל: פיזיותרפיסטים, מאמני תנועה תפקודית, ספורטתרפיסטים, אחים ואחיות מוסמכות, דיאטניות ורופאים. כולם עובדים יחד סביב כל מטופל."
    },
    {
        question: "כמה זמן עד שרואים תוצאות?",
        answer: "התוצאות משתנות מאדם לאדם, אך רוב המטופלים מרגישים שיפור כבר אחרי מספר מפגשים. הליווי הרציף באמצעות פלטפורמת פעילים+ מחזק את ההתקדמות גם בין המפגשים."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">שאלות נפוצות</h2>

                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div key={index} className="faq-item card">
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{item.question}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <div className="pt-4 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .faq-section {
          padding: 2.5rem 0;
          padding-bottom: 5rem;
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq-item {
          padding: 0;
          overflow: hidden;
          border-radius: 1rem;
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-accent);
          cursor: pointer;
          text-align: right;
          gap: 0.75rem;
        }
        .faq-question:hover {
          color: var(--color-primary-blue);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          background: #FAFAFA;
          border-top: 1px solid var(--color-border);
        }
        .faq-answer.open {
          max-height: 250px;
        }
        .faq-answer > div {
          padding: 1rem 1.25rem;
          color: var(--color-text-main);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .faq-section {
            padding: 6rem 0;
          }
          .faq-list {
            gap: 1rem;
          }
          .faq-item {
            border-radius: 1.25rem;
          }
          .faq-question {
            padding: 1.5rem 2rem;
            font-size: 1.1rem;
          }
          .faq-answer.open {
            max-height: 200px;
          }
          .faq-answer > div {
            padding: 1.5rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
}
