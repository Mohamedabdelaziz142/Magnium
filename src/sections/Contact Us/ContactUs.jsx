import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LdbNawtAAAAAAsvrSnvHC_drkP_FjFhw9om672p';
const COOLDOWN_MS = 5 * 60 * 1000;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
    website: '', // Honeypot
  });

  // Displays success screen if submitted within the last 5 minutes
  const [formSubmitted, setFormSubmitted] = useState(() => {
    const lastSubmitStored = Number(localStorage.getItem('lastSubmit') || 0);
    return Date.now() - lastSubmitStored < COOLDOWN_MS;
  });

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Silent drop for honeypot bot triggers
    if (formData.website) return;

    setSendError(false);

    // Silent check on cooldown
    const lastSubmitStored = Number(localStorage.getItem('lastSubmit') || 0);
    if (Date.now() - lastSubmitStored < COOLDOWN_MS) {
      setFormSubmitted(true);
      return;
    }

    if (!captchaToken) {
      setSendError(true);
      return;
    }

    localStorage.setItem('lastSubmit', Date.now().toString());
    setSending(true);

    emailjs
      .send(
        'service_b3g0m1t',
        'template_gyly03o',
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          message: formData.message,
          time: new Date().toLocaleString(),
          'g-recaptcha-response': captchaToken,
        },
        'omHKh9lZwORD0aw3X'
      )
      .then(() => {
        setFormSubmitted(true);
        setSending(false);
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaToken(null);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setSendError(true);
        setSending(false);
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setCaptchaToken(null);
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 px-6">
      <div className="max-w-3xl mx-auto border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
        <div className="text-center mb-8">
          <p className="text-magnium text-xs font-semibold uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-2xl font-black text-slate-900">Let's start a conversation</h2>
          <p className="text-slate-600 text-sm mt-2">
            Whether it's a general inquiry or you'd like to connect with one of our companies, we'll route it to the right team.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center text-emerald-800 text-sm font-bold">
            Thank you. Your message has been received — we'll be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Full name"
                aria-label="Full name"
                className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:border-magnium focus:outline-none transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:border-magnium focus:outline-none transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company name"
                aria-label="Company name"
                className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:border-magnium focus:outline-none transition"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <input
                type="text"
                required
                placeholder="Country / location"
                aria-label="Country or location"
                className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:border-magnium focus:outline-none transition"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <textarea
              rows="3"
              required
              placeholder="How can we help?"
              aria-label="Your message"
              className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:border-magnium focus:outline-none transition"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-magnium hover:bg-magnium-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition shadow-sm"
            >
              {sending ? 'Sending...' : 'Send message'}
            </button>

            {sendError && (
              <p className="text-red-600 text-xs font-semibold text-center mt-2" role="alert">
                Something went wrong or reCAPTCHA was not completed — please try again.
              </p>
            )}

            {/* Hidden Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </form>
        )}
      </div>
    </section>
  );
}