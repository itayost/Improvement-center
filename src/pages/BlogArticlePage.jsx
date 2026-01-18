import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, ArrowRight } from 'lucide-react';
import { getArticleBySlug } from '../data/articles';
import ArticleCta from '../components/ArticleCta';

export default function BlogArticlePage() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);

    if (!article) {
        return (
            <section className="article-not-found">
                <div className="container">
                    <h1>המאמר לא נמצא</h1>
                    <p>מצטערים, המאמר שחיפשת אינו קיים.</p>
                    <Link to="/blog" className="btn btn-secondary">
                        חזרה למאמרים
                    </Link>
                </div>

                <style>{`
                    .article-not-found {
                        padding: 4rem 0;
                        text-align: center;
                    }
                    .article-not-found h1 {
                        color: var(--color-accent);
                        margin-bottom: 1rem;
                    }
                    .article-not-found p {
                        color: var(--color-text-muted);
                        margin-bottom: 2rem;
                    }
                `}</style>
            </section>
        );
    }

    // Convert content string to paragraphs with proper formatting
    const renderContent = (content) => {
        const paragraphs = content.split('\n\n');
        return paragraphs.map((paragraph, index) => {
            // Check if it's a list (starts with bullet points)
            if (paragraph.includes('\n•') || paragraph.startsWith('•')) {
                const lines = paragraph.split('\n').filter(line => line.trim());
                const listItems = lines.filter(line => line.startsWith('•'));
                const title = lines.find(line => !line.startsWith('•'));

                return (
                    <div key={index} className="content-block">
                        {title && <p className="list-intro">{title}</p>}
                        <ul className="article-list">
                            {listItems.map((item, i) => (
                                <li key={i}>{item.replace('•', '').trim()}</li>
                            ))}
                        </ul>
                    </div>
                );
            }

            // Check if it's a heading (short line ending with specific patterns)
            const isHeading = paragraph.length < 80 && (
                paragraph.endsWith('?') ||
                paragraph.includes(' – ') ||
                /^\d\./.test(paragraph) ||
                paragraph === 'סיכום'
            );

            if (isHeading && !paragraph.includes('\n')) {
                return <h2 key={index} className="article-heading">{paragraph}</h2>;
            }

            // Regular paragraph
            return <p key={index}>{paragraph}</p>;
        });
    };

    return (
        <>
            <Helmet>
                <title>{article.title} - המרכז לשיפור התנועה</title>
                <meta name="description" content={article.excerpt} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:type" content="article" />
                {article.image && <meta property="og:image" content={`https://improve-movement.co.il${article.image}`} />}
            </Helmet>

            <article className="article-page">
                <div className="container">
                    <div className="article-container">
                        <Link to="/blog" className="back-link">
                            <ArrowRight size={18} />
                            חזרה למאמרים
                        </Link>

                        {article.image && (
                            <div className="article-hero">
                                <img src={article.image} alt={article.title} />
                            </div>
                        )}

                        <header className="article-header">
                            <h1 className="article-title">{article.title}</h1>
                            <div className="article-meta">
                                <span className="read-time">
                                    <Clock size={16} />
                                    {article.readTime} קריאה
                                </span>
                            </div>
                        </header>

                        <div className="article-content">
                            {renderContent(article.content)}
                        </div>

                        <ArticleCta />
                    </div>
                </div>
            </article>

            <style>{`
                .article-page {
                    padding: 1.5rem 0 4rem;
                }

                .article-container {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    color: var(--color-primary-blue);
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    margin-bottom: 1.5rem;
                    transition: opacity 0.2s;
                }

                .back-link:hover {
                    opacity: 0.8;
                }

                .article-hero {
                    margin-bottom: 1.5rem;
                    border-radius: 1rem;
                    overflow: hidden;
                }

                .article-hero img {
                    width: 100%;
                    height: auto;
                    max-height: 300px;
                    object-fit: cover;
                    display: block;
                }

                .article-header {
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--color-border);
                }

                .article-title {
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    line-height: 1.3;
                    margin-bottom: 1rem;
                }

                .article-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .read-time {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                }

                .article-content {
                    color: var(--color-text-main);
                    font-size: 1rem;
                    line-height: 1.85;
                }

                .article-content p {
                    margin-bottom: 1.25rem;
                }

                .article-content .content-block {
                    margin-bottom: 1.25rem;
                }

                .article-content .list-intro {
                    margin-bottom: 0.5rem;
                }

                .article-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                .article-list {
                    list-style: none;
                    padding: 0;
                    margin: 0.5rem 0 1.25rem;
                }

                .article-list li {
                    position: relative;
                    padding-right: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-main);
                }

                .article-list li::before {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0.55em;
                    width: 6px;
                    height: 6px;
                    background-color: var(--color-primary-blue);
                    border-radius: 50%;
                }

                @media (min-width: 768px) {
                    .article-page {
                        padding: 2rem 0 6rem;
                    }

                    .back-link {
                        font-size: 0.95rem;
                        margin-bottom: 2rem;
                    }

                    .article-hero {
                        margin-bottom: 2rem;
                        border-radius: 1.25rem;
                    }

                    .article-hero img {
                        max-height: 400px;
                    }

                    .article-header {
                        margin-bottom: 2.5rem;
                        padding-bottom: 2rem;
                    }

                    .article-title {
                        font-size: 2.2rem;
                        margin-bottom: 1.25rem;
                    }

                    .read-time {
                        font-size: 0.95rem;
                    }

                    .article-content {
                        font-size: 1.1rem;
                        line-height: 1.9;
                    }

                    .article-content p {
                        margin-bottom: 1.5rem;
                    }

                    .article-heading {
                        font-size: 1.4rem;
                        margin-top: 2.5rem;
                        margin-bottom: 1.25rem;
                    }

                    .article-list li {
                        padding-right: 1.5rem;
                        margin-bottom: 0.6rem;
                    }
                }
            `}</style>
        </>
    );
}
