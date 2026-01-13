import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function BlogListPage() {
    return (
        <>
            <Helmet>
                <title>מאמרים וטיפים - המרכז לשיפור התנועה</title>
                <meta name="description" content="מאמרים וטיפים מקצועיים לשיפור תנועה, שיווי משקל ואיכות חיים בגיל השלישי. טיפים למניעת נפילות, חיזוק שרירים ועוד." />
                <meta property="og:title" content="מאמרים וטיפים - המרכז לשיפור התנועה" />
                <meta property="og:description" content="מאמרים וטיפים מקצועיים לשיפור תנועה, שיווי משקל ואיכות חיים בגיל השלישי." />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className="blog-list-section">
                <div className="container">
                    <h1 className="section-title">מאמרים וטיפים</h1>
                    <p className="blog-subtitle">
                        מידע מקצועי ומעשי לשיפור התנועה ואיכות החיים בגיל השלישי
                    </p>

                    <div className="blog-grid">
                        {articles.map((article) => (
                            <Link
                                key={article.slug}
                                to={`/blog/${article.slug}`}
                                className="blog-card card"
                            >
                                <h2 className="blog-card-title">{article.title}</h2>
                                <p className="blog-card-excerpt">{article.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="read-time">
                                        <Clock size={14} />
                                        {article.readTime}
                                    </span>
                                    <span className="read-more">קרא עוד</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .blog-list-section {
                    padding: 2rem 0 4rem;
                }

                .blog-subtitle {
                    text-align: center;
                    color: var(--color-text-muted);
                    font-size: 1rem;
                    margin-bottom: 2rem;
                    margin-top: -0.5rem;
                }

                .blog-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .blog-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1.25rem;
                    box-shadow: var(--shadow-card);
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .blog-card:hover {
                    transform: translateY(-3px);
                    box-shadow: var(--shadow-hover);
                }

                .blog-card-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    line-height: 1.4;
                }

                .blog-card-excerpt {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .blog-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.5rem;
                    padding-top: 0.75rem;
                    border-top: 1px solid var(--color-border);
                }

                .read-time {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.8rem;
                    color: var(--color-text-muted);
                }

                .read-more {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-primary-blue);
                }

                @media (min-width: 768px) {
                    .blog-list-section {
                        padding: 4rem 0 6rem;
                    }

                    .blog-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 3rem;
                    }

                    .blog-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1.5rem;
                    }

                    .blog-card {
                        padding: 2rem;
                        border-radius: 1.5rem;
                        gap: 1rem;
                    }

                    .blog-card-title {
                        font-size: 1.25rem;
                    }

                    .blog-card-excerpt {
                        font-size: 0.95rem;
                    }

                    .read-time {
                        font-size: 0.85rem;
                    }

                    .read-more {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
}
