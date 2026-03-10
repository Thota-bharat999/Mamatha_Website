import React from 'react';

const LOGO = '/assets/images/logo.jpg';

export default function Hero({ t }) {
    const scrollToContact = () => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        const el = document.querySelector('#about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const particles = [
        { size: 8, top: '15%', left: '10%', delay: '0s', duration: '7s' },
        { size: 5, top: '70%', left: '5%', delay: '1s', duration: '9s' },
        { size: 12, top: '30%', left: '85%', delay: '2s', duration: '8s' },
        { size: 6, top: '80%', left: '80%', delay: '0.5s', duration: '6s' },
        { size: 4, top: '50%', left: '92%', delay: '1.5s', duration: '10s' },
        { size: 10, top: '10%', left: '60%', delay: '3s', duration: '7.5s' },
    ];

    return (
        <section className="hero" id="hero">
            <div className="hero-particles" aria-hidden="true">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            width: p.size,
                            height: p.size,
                            top: p.top,
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            <div className="hero-inner">
                {/* LEFT: Text content */}
                <div className="hero-left">
                    <span className="hero-badge">⭐ {t.hero_location}</span>

                    <h1 className="hero-name">
                        MAMATHA<br />
                        <span>CLEANING &</span><br />
                        CONTRACTING
                    </h1>

                    <div className="hero-company-sub">Excellence in Every Clean</div>
                    <div className="hero-divider" />
                    <p className="hero-tagline">{t.hero_tagline}</p>

                    <div className="hero-contacts">
                        <div className="hero-contact-item">
                            <span className="icon">📍</span>
                            <span>{t.hero_location}</span>
                        </div>
                        <div className="hero-contact-item">
                            <span className="icon">📞</span>
                            <a href={`tel:${t.hero_phone}`}>{t.hero_phone}</a>
                        </div>
                        <div className="hero-contact-item">
                            <span className="icon">✉️</span>
                            <a href={`mailto:${t.hero_email}`}>{t.hero_email}</a>
                        </div>
                        <div className="hero-contact-item">
                            <span className="icon">🌐</span>
                            <a href={`mailto:${t.hero_website}`}>{t.hero_website}</a>
                        </div>
                    </div>

                    <div className="hero-cta-row">
                        <button className="btn-primary" onClick={scrollToContact}>
                            {t.hero_cta}
                        </button>
                        <button className="btn-outline" onClick={scrollToAbout}>
                            {t.nav_about} →
                        </button>
                    </div>
                </div>

                {/* RIGHT: Animated circular logo */}
                <div className="hero-right">
                    <div className="hero-logo-scene">
                        {/* Outermost subtle pulse glow */}
                        <div className="hero-ring hero-ring-pulse" aria-hidden="true" />
                        {/* Outer fast dashed ring */}
                        <div className="hero-ring hero-ring-outer" aria-hidden="true" />
                        {/* Inner slow solid ring (counter-clockwise) */}
                        <div className="hero-ring hero-ring-inner" aria-hidden="true" />
                        {/* Gold glow halo */}
                        <div className="hero-ring hero-ring-glow" aria-hidden="true" />
                        {/* Real logo in circle */}
                        <img
                            src={LOGO}
                            alt="Mamatha Cleaning & Contracting"
                            className="hero-logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback */}
                        <div className="hero-logo-fallback" style={{ display: 'none' }}>
                            <div className="logo-ar-text">ماماثا</div>
                            <div className="logo-icon">🏙️</div>
                            <div className="logo-en-name">MAMATHA</div>
                            <div className="logo-en-sub">CLEANING & CONTRACTING</div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="hero-badges-row">
                        {['50+ Projects', '24/7 Support', 'Qatar Licensed'].map((badge) => (
                            <span key={badge} className="hero-badge-pill">{badge}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
