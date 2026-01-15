export default function PrivacyPolicyPage() {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="section-title">מדיניות פרטיות</h1>

                <div className="policy-content">
                    <p className="intro">
                        המרכז לשיפור התנועה ("אנחנו", "שלנו") מכבד את פרטיות המשתמשים באתר.
                        מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.
                    </p>

                    <section className="policy-section">
                        <h2>איסוף מידע</h2>
                        <p>אנו אוספים מידע שאתם מספקים לנו באופן ישיר, כגון:</p>
                        <ul>
                            <li>שם מלא</li>
                            <li>מספר טלפון</li>
                            <li>עיר מגורים</li>
                            <li>כתובת דוא"ל (במידה ונמסרה)</li>
                        </ul>
                        <p>מידע זה נאסף כאשר אתם ממלאים טופס יצירת קשר באתר או פונים אלינו בדרך אחרת.</p>
                    </section>

                    <section className="policy-section">
                        <h2>שימוש במידע</h2>
                        <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                        <ul>
                            <li>יצירת קשר בעקבות פנייתכם</li>
                            <li>מתן מידע על השירותים שלנו</li>
                            <li>תיאום פגישות והערכות תפקוד</li>
                            <li>שיפור השירות והחוויה באתר</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>שיתוף מידע</h2>
                        <p>
                            אנו לא מוכרים, סוחרים או מעבירים לצדדים שלישיים את המידע האישי שלכם,
                            למעט במקרים הבאים:
                        </p>
                        <ul>
                            <li>לצורך מתן השירות המבוקש (לדוגמה: תיאום עם מטפל באזורכם)</li>
                            <li>כאשר נדרש על פי חוק</li>
                            <li>להגנה על זכויותינו או בטיחות המשתמשים</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>אבטחת מידע</h2>
                        <p>
                            אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה,
                            שימוש או חשיפה בלתי מורשים. עם זאת, אין שיטת העברה באינטרנט או
                            אחסון אלקטרוני בטוחה ב-100%.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>עוגיות (Cookies)</h2>
                        <p>
                            האתר עשוי להשתמש בעוגיות לשיפור חוויית המשתמש. עוגיות הן קבצים קטנים
                            הנשמרים במכשירכם ומאפשרים לנו לזכור העדפות ולנתח את השימוש באתר.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>זכויותיכם</h2>
                        <p>יש לכם את הזכות:</p>
                        <ul>
                            <li>לבקש לעיין במידע שאנו מחזיקים עליכם</li>
                            <li>לבקש לתקן מידע שגוי</li>
                            <li>לבקש למחוק את המידע שלכם</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>יצירת קשר</h2>
                        <p>לשאלות או בקשות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
                        <ul>
                            <li>טלפון: <a href="tel:073-729-66-99">073-729-66-99</a></li>
                            <li>דוא"ל: <a href="mailto:office@improve-movement.co.il">office@improve-movement.co.il</a></li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>עדכון המדיניות</h2>
                        <p>
                            אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים יפורסמו בעמוד זה
                            עם תאריך העדכון האחרון.
                        </p>
                        <p className="update-date">עדכון אחרון: ינואר 2026</p>
                    </section>
                </div>
            </div>

            <style>{`
                .page-container {
                    padding-top: 1rem;
                    padding-bottom: 5rem;
                }

                .policy-content {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .intro {
                    font-size: 1.05rem;
                    color: var(--color-text-main);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                    padding: 1.25rem;
                    background: var(--color-bg-card);
                    border-radius: 1rem;
                    border-right: 4px solid var(--color-primary);
                }

                .policy-section {
                    margin-bottom: 2rem;
                }

                .policy-section h2 {
                    color: var(--color-accent);
                    font-size: 1.25rem;
                    margin-bottom: 0.75rem;
                }

                .policy-section p {
                    color: var(--color-text-main);
                    line-height: 1.7;
                    margin-bottom: 0.75rem;
                }

                .policy-section ul {
                    list-style: disc;
                    padding-right: 1.5rem;
                    margin-bottom: 0.75rem;
                }

                .policy-section li {
                    color: var(--color-text-main);
                    line-height: 1.7;
                    margin-bottom: 0.5rem;
                }

                .policy-section a {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                .policy-section a:hover {
                    opacity: 0.8;
                }

                .update-date {
                    color: var(--color-text-muted);
                    font-style: italic;
                    font-size: 0.9rem;
                }

                @media (min-width: 768px) {
                    .page-container {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }

                    .intro {
                        font-size: 1.1rem;
                        padding: 1.5rem;
                        margin-bottom: 2.5rem;
                    }

                    .policy-section {
                        margin-bottom: 2.5rem;
                    }

                    .policy-section h2 {
                        font-size: 1.4rem;
                        margin-bottom: 1rem;
                    }

                    .policy-section p,
                    .policy-section li {
                        font-size: 1.05rem;
                    }
                }
            `}</style>
        </div>
    );
}
