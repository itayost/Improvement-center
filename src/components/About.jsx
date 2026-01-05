import React from 'react';

const aboutImg = "/hero/תמונה 4.png";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">איך זה עובד?</h2>

                <div className="about-card card">
                    <div className="about-image-wrapper">
                        <img src={aboutImg} alt="צוות רב-מקצועי" className="about-img" />
                    </div>
                    <div className="about-content">
                        <h3 className="about-content-title">צוות רב-מקצועי שעובד יחד</h3>
                        <p className="about-text">
                            המרכז לשיפור התנועה פועל באמצעות צוות של למעלה מ-100 אנשי מקצוע ברחבי הארץ.
                            העבודה המשותפת בין פיזיותרפיסטים, מאמני תנועה תפקודית, דיאטניות ורופאים מאפשרת
                            ראייה רחבה והתאמה מדויקת לצרכים האישיים של כל מטופל.
                        </p>
                        <ul className="about-list">
                            <li>מבדק הערכת תפקוד עד הבית - כוח שריר, שיווי משקל, מצב מנטלי</li>
                            <li>תוכנית ליווי אישית עד הבית</li>
                            <li>ליווי רציף גם בין המפגשים באמצעות פעילים+</li>
                        </ul>
                        <a href="/contact" className="btn btn-primary about-cta-btn">
                            לתיאום הערכת תפקוד
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          padding: 2rem 0;
        }
        .about-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 1.25rem;
        }

        .about-image-wrapper {
          height: 200px;
        }
        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-content {
          padding: 1.5rem;
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-content-title {
          font-size: 1.3rem;
          font-weight: 300;
          color: var(--color-accent);
        }

        .about-text {
          color: var(--color-text-main);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .about-list {
          list-style: disc;
          padding-right: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        .about-list li {
          margin-bottom: 0.4rem;
        }

        .about-cta-btn {
          align-self: flex-start;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          width: 100%;
          text-align: center;
        }

        @media (min-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }
          .about-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            border-radius: 1.5rem;
          }
          .about-image-wrapper {
            height: 100%;
            min-height: 400px;
          }
          .about-content {
            padding: 3rem;
            gap: 1.5rem;
          }
          .about-content-title {
            font-size: 1.8rem;
          }
          .about-text {
            font-size: 1.1rem;
          }
          .about-list {
            font-size: 1rem;
            padding-right: 1.5rem;
            margin-bottom: 1rem;
          }
          .about-list li {
            margin-bottom: 0.5rem;
          }
          .about-cta-btn {
            width: auto;
            padding: 1.1rem 2.5rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
        </section>
    );
}
