import WhatsAppIcon from './icons/WhatsAppIcon';
import { getWhatsAppLink } from '../constants/contact';

export default function ArticleCta() {
    return (
        <div className="article-cta">
            <h3>מעוניינים בהערכת תפקוד אישית?</h3>
            <p>נשמח לתאם מפגש ראשוני בבית, מותאם אישית לצרכים שלכם</p>
            <a
                href={getWhatsAppLink('blog')}
                target="_blank"
                rel="noopener noreferrer"
                className="article-cta-btn"
            >
                <WhatsAppIcon size={20} />
                לתיאום מפגש הערכה
            </a>

            <style>{`
                .article-cta {
                    background-color: var(--color-primary-blue);
                    padding: 2rem;
                    color: white;
                    margin-top: 2.5rem;
                    border-radius: 1.25rem;
                    text-align: center;
                }

                .article-cta h3 {
                    font-size: 1.3rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: white;
                }

                .article-cta p {
                    color: rgba(255, 255, 255, 0.85);
                    font-size: 0.95rem;
                    margin-bottom: 1.25rem;
                }

                .article-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--color-secondary-green-gradient);
                    color: white;
                    padding: 0.85rem 1.75rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .article-cta-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                @media (min-width: 768px) {
                    .article-cta {
                        padding: 2.5rem 3rem;
                        border-radius: 1.5rem;
                        margin-top: 3rem;
                    }

                    .article-cta h3 {
                        font-size: 1.5rem;
                    }

                    .article-cta p {
                        font-size: 1.05rem;
                        margin-bottom: 1.5rem;
                    }

                    .article-cta-btn {
                        padding: 1rem 2rem;
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </div>
    );
}
