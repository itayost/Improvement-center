const trustedLogos = [
    { src: '/worked with/IMG_4123.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4124.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4125.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4126.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/IMG_4127.JPG', alt: 'ארגון שותף' },
    { src: '/worked with/ההסתדרות.PNG', alt: 'ההסתדרות' }
];

export default function TrustedOrganizations() {
    return (
        <section className="trusted-section">
            <div className="container">
                <h2 className="trusted-title">נותנים בנו אמון</h2>
                <div className="trusted-scroll">
                    <div className="trusted-track">
                        {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                            <div key={idx} className="logo-item">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .trusted-section {
                    padding: 2rem 0;
                    background: var(--color-bg-body);
                }

                .trusted-title {
                    text-align: center;
                    font-size: 1.3rem;
                    color: var(--color-accent);
                    margin-bottom: 1rem;
                }

                .trusted-scroll {
                    overflow: hidden;
                    padding: 1rem 0;
                }

                .trusted-track {
                    display: flex;
                    gap: 1.5rem;
                    width: max-content;
                    animation: scrollLogos 25s linear infinite;
                }

                @keyframes scrollLogos {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(50%);
                    }
                }

                .logo-item {
                    flex-shrink: 0;
                    background: white;
                    padding: 1rem;
                    border-radius: 1rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .logo-item img {
                    height: 60px;
                    width: auto;
                    max-width: 120px;
                    object-fit: contain;
                    filter: grayscale(30%);
                }

                @media (min-width: 768px) {
                    .trusted-section {
                        padding: 3rem 0;
                    }

                    .trusted-title {
                        font-size: 1.5rem;
                        margin-bottom: 1.5rem;
                    }

                    .trusted-track {
                        gap: 2rem;
                    }

                    .logo-item {
                        padding: 1.25rem;
                    }

                    .logo-item img {
                        height: 70px;
                        max-width: 140px;
                    }
                }
            `}</style>
        </section>
    );
}
