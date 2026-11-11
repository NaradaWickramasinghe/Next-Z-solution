import { useState, useCallback } from 'react';
import { PHONE_WA, EMAIL } from '../data/content';

interface FormFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  service: string;
  message: string;
}

const EMPTY: FormFields = { name: '', phone: '', email: '', service: '', message: '' };
const NO_ERRORS: FormErrors = { name: '', email: '', service: '', message: '' };

export function useContactForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>(NO_ERRORS);

  const update = useCallback((key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    // Clear the error for this field on change
    if (key in NO_ERRORS) {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  }, []);

  const validate = useCallback((): boolean => {
    const next = { ...NO_ERRORS };
    let ok = true;

    if (!fields.name.trim()) { next.name = 'Please enter your name.'; ok = false; }
    const em = fields.email.trim();
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { next.email = 'Please enter a valid email address.'; ok = false; }
    if (!fields.service) { next.service = 'Please choose a service.'; ok = false; }
    if (!fields.message.trim()) { next.message = 'Please write a short message.'; ok = false; }

    setErrors(next);
    return ok;
  }, [fields]);

  const buildText = useCallback((): string => {
    const lines = [
      'Hello Next Z Solutions,',
      '',
      'Name: ' + fields.name.trim(),
      'Service: ' + fields.service,
    ];
    if (fields.phone.trim()) lines.push('Phone: ' + fields.phone.trim());
    if (fields.email.trim()) lines.push('Email: ' + fields.email.trim());
    lines.push('', 'Message:', fields.message.trim());
    return lines.join('\n');
  }, [fields]);

  const sendWhatsApp = useCallback(() => {
    if (!validate()) return;
    window.open(
      `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(buildText())}`,
      '_blank',
      'noopener',
    );
  }, [validate, buildText]);

  const sendEmail = useCallback(() => {
    if (!validate()) return;
    const subject = 'Website enquiry: ' + fields.service;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildText())}`;
  }, [validate, buildText, fields.service]);

  return { fields, errors, update, sendWhatsApp, sendEmail } as const;
}

