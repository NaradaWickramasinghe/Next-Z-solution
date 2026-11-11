import { Icon } from '../ui/Icon';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICE_OPTIONS, PHONE_DISPLAY, WA_LINK, EMAIL } from '../../data/content';
import { useContactForm } from '../../hooks/useContactForm';

export function Contact() {
  const { fields, errors, update, sendWhatsApp, sendEmail } = useContactForm();

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch today"
          lead="Send us a message by WhatsApp or email. Whichever you prefer."
        />

        <div className="contact">
          <div className="contact-info">
            <a className="info-row" href="tel:+94764893143">
              <span className="info-icon"><Icon name="i-call" /></span>
              <span><small>Phone</small><strong>{PHONE_DISPLAY}</strong></span>
            </a>
            <a className="info-row" href={WA_LINK} target="_blank" rel="noopener">
              <span className="info-icon"><Icon name="i-chat" /></span>
              <span><small>WhatsApp</small><strong>{PHONE_DISPLAY}</strong></span>
            </a>
            <a className="info-row" href={`mailto:${EMAIL}`}>
              <span className="info-icon"><Icon name="i-mail" /></span>
              <span><small>Email</small><strong>{EMAIL}</strong></span>
            </a>
          </div>

          <form className="card contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
            <div className={`field${errors.name ? ' invalid' : ''}`}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={fields.name}
                onChange={(e) => update('name', e.target.value)}
              />
              <span className="err" aria-live="polite">{errors.name}</span>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Phone <span className="opt">(optional)</span></label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </div>
              <div className={`field${errors.email ? ' invalid' : ''}`}>
                <label htmlFor="email">Email <span className="opt">(optional)</span></label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(e) => update('email', e.target.value)}
                />
                <span className="err" aria-live="polite">{errors.email}</span>
              </div>
            </div>

            <div className={`field${errors.service ? ' invalid' : ''}`}>
              <label htmlFor="service">Service needed</label>
              <select
                id="service"
                required
                value={fields.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <span className="err" aria-live="polite">{errors.service}</span>
            </div>

            <div className={`field${errors.message ? ' invalid' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={fields.message}
                onChange={(e) => update('message', e.target.value)}
              />
              <span className="err" aria-live="polite">{errors.message}</span>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-whatsapp" onClick={sendWhatsApp}>
                <Icon name="i-chat" /> Send via WhatsApp
              </button>
              <button type="button" className="btn btn-primary" onClick={sendEmail}>
                <Icon name="i-mail" /> Send via Email
              </button>
            </div>
            <p className="form-note">
              Clicking a button opens WhatsApp or your email app with your message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

