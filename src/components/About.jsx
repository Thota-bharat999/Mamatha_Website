import React from 'react';

export default function About({ t }) {
    const stats = [
        { num: '50+', label: t.stat_projects },
        { num: '50+', label: t.stat_specialists },
        { num: '0%', label: t.stat_delay },
        { num: '100%', label: t.stat_satisfaction },
    ];

    return (
        <section className="about-section" id="about">
            <div className="section-inner">
                <div className="about-top fade-in">
                    {/* Left: Text */}
                    <div className="about-left">
                        <div className="section-label">
                            {t.about_subtitle}
                        </div>
                        <h2 className="section-title">{t.about_title}</h2>
                        <div className="gold-underline" />
                        <p className="about-desc">{t.about_desc}</p>

                        {/* Vision & Mission */}
                        <div className="vm-grid" style={{ marginTop: '1.5rem' }}>
                            <div className="vm-card vision">
                                <div className="vm-title">💡 {t.vision_title}</div>
                                <p className="vm-text">{t.vision_text}</p>
                            </div>
                            <div className="vm-card mission">
                                <div className="vm-title">🎯 {t.mission_title}</div>
                                <p className="vm-text">{t.mission_text}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="stats-grid fade-in">
                        {stats.map((s, i) => (
                            <div className="stat-card" key={i}>
                                <div className="stat-number">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlights bar */}
                <div className="highlights-bar fade-in">
                    {t.highlights.map((item, i) => (
                        <React.Fragment key={i}>
                            <span className="highlight-item">{item}</span>
                            {i < t.highlights.length - 1 && (
                                <span className="highlight-sep">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
