import React from 'react';

const LOGO = '/assets/images/logo.jpg';

export default function Footer({ t, lang }) {
    return (
        <footer className="footer">
            <div className="footer-inner">

                {/* Centered brand logo */}
                <div className="footer-logo-section">
                    <div className="footer-logo-wrap">
                        <div className="footer-logo-ring footer-ring-1" aria-hidden="true" />
                        <div className="footer-logo-ring footer-ring-2" aria-hidden="true" />
                        <img
                            src={LOGO}
                            alt="Mamatha Cleaning & Contracting Logo"
                            className="footer-logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="footer-logo-fallback-img" style={{ display: 'none' }}>
                            🧹
                        </div>
                    </div>
                    <div className="footer-brand-text">
                        <div className="footer-name">MAMATHA CLEANING & CONTRACTING</div>
                        <div className="footer-sub" style={{ fontFamily: 'var(--font-ar)' }}>
                            ماماثا للتنظيف والمقاولات
                        </div>
                    </div>
                </div>

                <p className="footer-tagline">{t.footer_tagline}</p>

                <div className="footer-divider" />

                {/* Thank You */}
                <div className="footer-thanks">
                    <div className="footer-thanks-en">{t.footer_thanks}</div>
                    <div className="footer-thanks-ar">{t.footer_thanks_ar}</div>
                </div>

                <div className="footer-divider" />

                {/* Contact row */}
                <div className="footer-contacts">
                    <span className="footer-contact-item">📍 Doha, Qatar</span>
                    <span className="footer-sep">|</span>
                    <span className="footer-contact-item">
                        📞 <a href="tel:+97472148292">+974 7214 8292</a>
                    </span>
                    <span className="footer-sep">|</span>
                    <span className="footer-contact-item">
                        ✉️ <a href="mailto:infoqa.mamatha@gmail.com">infoqa.mamatha@gmail.com</a>
                    </span>
                    <span className="footer-sep">|</span>
                    <span className="footer-contact-item">
                        🌐 <a href="mailto:www.infoqa.mamatha@gmail.com">www.infoqa.mamatha@gmail.com</a>
                    </span>
                </div>

                <div className="footer-rights">{t.footer_rights}</div>
            </div>
        </footer>
    );
}
