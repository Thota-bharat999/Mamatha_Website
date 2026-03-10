import React from 'react';

export default function Contact({ t }) {
    const cards = [
        {
            label: t.contact_address_label,
            text: t.contact_address,
            icon: '📍',
        },
        {
            label: t.contact_phone_label,
            text: t.contact_phone,
            icon: '📞',
        },
        {
            label: t.contact_email_label,
            text: t.contact_email,
            icon: '✉️',
            isEmail: true,
        },
        {
            label: t.contact_website_label,
            text: t.contact_website,
            icon: '🌐',
        },
    ];

    return (
        <section className="contact-section" id="contact">
            <div className="section-inner contact-inner">
                <div className="contact-header fade-in">
                    <div
                        className="section-label"
                        style={{ justifyContent: 'center', color: 'var(--gold)' }}
                    >
                        {t.contact_subtitle}
                    </div>
                    <h2 className="section-title section-title-white" style={{ color: '#fff', textAlign: 'center' }}>
                        {t.contact_title}
                    </h2>
                    <div className="gold-underline" style={{ margin: '0.75rem auto' }} />
                </div>

                <div className="contact-grid fade-in">
                    {cards.map((card, i) => (
                        <div className="contact-card" key={i}>
                            <div className="contact-card-icon">{card.icon}</div>
                            <div className="contact-card-body">
                                <div className="contact-card-label">{card.label}</div>
                                {card.isEmail ? (
                                    <div className="contact-card-text">
                                        <a href={`mailto:${card.text}`}>{card.text}</a>
                                    </div>
                                ) : (
                                    <div className="contact-card-text">{card.text}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Placeholder */}
                <div className="map-placeholder fade-in">
                    <div className="map-icon">🗺️</div>
                    <div className="map-text">{t.map_placeholder}</div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
                        P.O. Box XXXXX — Doha, Qatar
                    </div>
                </div>
            </div>
        </section>
    );
}
