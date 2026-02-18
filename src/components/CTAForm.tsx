import { useState, FormEvent } from 'react';

export function CTAForm() {
  const [formData, setFormData] = useState({ name: '', telegram: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let clean = digits;
    if (clean.startsWith('7')) clean = clean.slice(1);
    if (clean.startsWith('8')) clean = clean.slice(1);

    let formatted = '+7';
    if (clean.length > 0) formatted += ' (' + clean.slice(0, 3);
    if (clean.length >= 3) formatted += ') ' + clean.slice(3, 6);
    if (clean.length >= 6) formatted += '-' + clean.slice(6, 8);
    if (clean.length >= 8) formatted += '-' + clean.slice(8, 10);

    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.telegram.trim() || !formData.telegram.startsWith('@') || formData.telegram.length < 2) {
      newErrors.telegram = true;
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (formData.phone.trim() && phoneDigits.length < 11) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    // TODO: Replace with actual endpoint
    console.log('CTA Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: false }));
  };

  if (submitted) {
    return (
      <div className="cta-form-card reveal reveal-delay-2">
        <div className="cta-form-success visible">
          <div className="cta-form-success-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="cta-form-success-title">Заявка отправлена!</div>
          <p className="cta-form-success-text">Перезвоним в{'\u00A0'}течение часа.<br />Если не{'\u00A0'}дозвонимся — напишем в{'\u00A0'}Telegram.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cta-form-card reveal reveal-delay-2">
      <form onSubmit={handleSubmit} noValidate>
        <div className="cta-form-field">
          <label htmlFor="applyName">Имя</label>
          <input
            type="text"
            id="applyName"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Как тебя зовут?"
            autoComplete="given-name"
            className={errors.name ? 'is-invalid' : formData.name ? 'is-valid' : ''}
          />
        </div>
        <div className="cta-form-field">
          <label htmlFor="applyTg">Telegram *</label>
          <input
            type="text"
            id="applyTg"
            value={formData.telegram}
            onChange={(e) => handleInputChange('telegram', e.target.value)}
            placeholder="@username"
            autoComplete="off"
            className={errors.telegram ? 'is-invalid' : formData.telegram && formData.telegram.startsWith('@') ? 'is-valid' : ''}
          />
        </div>
        <div className="cta-form-field">
          <label htmlFor="applyPhone">Номер телефона</label>
          <input
            type="tel"
            id="applyPhone"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onFocus={() => { if (!formData.phone) handlePhoneChange(''); }}
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            className={errors.phone ? 'is-invalid' : formData.phone && formData.phone.replace(/\D/g, '').length >= 11 ? 'is-valid' : ''}
          />
        </div>
        <button type="submit" className="btn btn--accent cta-form-submit">
          Записаться — это бесплатно <span className="btn-dot"></span>
        </button>
        <p className="cta-form-disclaimer">Нажимая кнопку, вы{'\u00A0'}даёте согласие на{'\u00A0'}обработку персональных данных</p>
      </form>
    </div>
  );
}
