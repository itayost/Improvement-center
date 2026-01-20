import { useState } from 'react';
import { trackFormSubmit } from '../utils/analytics';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    city: formData.city || ''
                })
            });

            const data = await response.json();

            if (data.err === '0') {
                setStatus('success');
                setFormData({ name: '', phone: '', city: '' });
                trackFormSubmit();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="contact-form-section">
            <div className="container">
                <h2 className="section-title">השאירו פרטים ונחזור אליכם</h2>

                <div className="form-card card">
                    {status === 'success' ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>הפרטים נשלחו בהצלחה!</h3>
                            <p>נחזור אליכם בהקדם</p>
                            <button
                                className="btn btn-secondary submit-btn"
                                onClick={() => setStatus('idle')}
                            >
                                שליחת פנייה נוספת
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>שם מלא</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="ישראל ישראלי"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>טלפון</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    placeholder="050-0000000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>עיר מגורים</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-input"
                                    placeholder="לדוגמה: תל אביב"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            {status === 'error' && (
                                <p className="error-message">אירעה שגיאה, אנא נסו שוב</p>
                            )}
                            <button
                                type="submit"
                                className="btn btn-secondary submit-btn"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'שולח...' : 'שלח/י'}
                            </button>
                        </form>
                    )}
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

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background: var(--color-secondary-green);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
        }

        .success-message h3 {
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .success-message p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .error-message {
          color: #dc2626;
          font-size: 0.9rem;
          text-align: center;
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
