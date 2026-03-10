import React from 'react';

const SERVICE_ICONS = ['🧹', '🏗️', '🏢', '🛋️', '🪟', '🏭'];

// Gradient pairs for each card: [from, to]
const CARD_GRADIENTS = [
    ['#1e88e5', '#1565c0'],
    ['#f2b705', '#d4a104'],
    ['#8e24aa', '#6a1b9a'],
    ['#f57c00', '#e65100'],
    ['#43a047', '#2e7d32'],
    ['#00897b', '#00695c'],
];

export default function Services({ t }) {
    return (
        <section className="services-section" id="services">
            <div className="section-inner">

                {/* Section Header */}
                <div className="services-header fade-in">
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        {t.services_subtitle}
                    </div>
                    <h2 className="section-title">{t.services_title}</h2>
                    <div className="gold-underline" style={{ margin: '0.75rem auto' }} />
                    <p className="services-intro">{t.services_intro || 'Premium cleaning solutions tailored to every need'}</p>
                </div>

                {/* Services Grid — 3 / 2 / 1 */}
                <div className="services-grid">
                    {t.services.map((service, i) => {
                        const [colorFrom, colorTo] = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
                        return (
                            <div
                                key={i}
                                className="service-card fade-in"
                                style={{ '--c-from': colorFrom, '--c-to': colorTo, animationDelay: `${i * 0.08}s` }}
                            >
                                {/* Top accent bar */}
                                <div className="sc-top-bar" />

                                {/* Icon */}
                                <div className="sc-icon-wrap">
                                    <span className="sc-icon">{SERVICE_ICONS[i % SERVICE_ICONS.length]}</span>
                                </div>

                                {/* Content */}
                                <div className="sc-body">
                                    <h3 className="sc-title">{service.title}</h3>
                                    <p className="sc-desc">{service.desc}</p>
                                </div>

                                {/* Learn more arrow */}
                                <div className="sc-footer">
                                    <span className="sc-arrow">→</span>
                                </div>

                                {/* Hover background overlay */}
                                <div className="sc-overlay" aria-hidden="true" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
