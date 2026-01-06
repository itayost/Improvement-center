import React from 'react';

export default function ContactForm() {
    return (
        <section className="contact-form-section">
            <div className="container">
                <h2 className="section-title">השאירו פרטים ונחזור אליכם</h2>

                <div className="form-card card">
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
            </div>

            <style>{`
        .contact-form-section {
          padding: 2.5rem 0;
          padding-bottom: 5rem;
        }

        .form-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
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

        @media (min-width: 768px) {
          .contact-form-section {
            padding: 6rem 0;
          }

          .form-card {
            padding: 2.5rem;
            border-radius: 2rem;
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
        }
      `}</style>
        </section>
    );
}
