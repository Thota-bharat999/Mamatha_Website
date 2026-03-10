import React from 'react';

const CHECK_ICONS = ['👔', '🌿', '⚙️', '📞', '📋', '💰', '🛡️', '📊'];

export default function WhyChoose({ t }) {
    return (
        <section className="why-section" id="why">
            <div className="section-inner">
                <div className="why-header fade-in">
                    <div className="section-label section-label-light">
                        <span style={{ color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.2)' }}>
                            {t.why_subtitle}
                        </span>
                    </div>
                    <h2
                        className="section-title section-title-white"
                        style={{ color: '#fff' }}
                    >
                        {t.why_title}
                    </h2>
                    <div
                        className="gold-underline"
                        style={{ background: 'linear-gradient(90deg, var(--gold), var(--orange))' }}
                    />
                </div>

                <div className="features-grid">
                    {t.features.map((feature, i) => (
                        <div className="feature-card fade-in" key={i}>
                            <div className="feature-check">
                                {CHECK_ICONS[i] || '✅'}
                            </div>
                            <span className="feature-text">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
