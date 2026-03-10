import React from 'react';

export default function Process({ t }) {
    return (
        <section className="process-section" id="process">
            <div className="section-inner">
                <div className="fade-in" style={{ marginBottom: '1rem' }}>
                    <div className="section-label">{t.process_subtitle}</div>
                    <h2 className="section-title">{t.process_title}</h2>
                    <div className="gold-underline" />
                </div>

                <div className="process-timeline fade-in">
                    {t.steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="process-step">
                                <div className="step-circle">{step.num}</div>
                                <div className="step-card">
                                    <div className="step-title">{step.title}</div>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                            {i < t.steps.length - 1 && (
                                <div className="process-connector" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
