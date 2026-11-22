// The contact form's phone check, shared by the form (to tell the visitor at
// once) and api/contact.js (which must not trust the browser). The rules match
// the CRM's ingestLead (FitnessForSeniorsApp, ingestLead/phone.ts), so a number
// this accepts is never dropped there.

// Israeli mobile and landline, local (0...) or international (+972...).
const ISRAELI_PHONE = /^(\+972|0)([23489]|5[0-689]|7[2-9])[0-9]{7}$/;

// An Israeli number typed without its leading 0: 8 digits (landline) or 9 (mobile).
const MISSING_LEADING_ZERO = /^\+?[2-9]\d{7,8}$/;

export const INVALID_PHONE_MESSAGE = 'מספר הטלפון לא נראה תקין. לדוגמה: 050-1234567';

function normalize(raw) {
    const compact = raw.replace(/[^\d+]/g, '');
    if (compact.startsWith('00972')) return '+' + compact.slice(2);
    if (compact.startsWith('972')) return '+' + compact;
    if (compact.startsWith('+0')) return compact.slice(1);
    if (MISSING_LEADING_ZERO.test(compact)) return '+972' + compact.replace('+', '');
    return compact;
}

/** The number in E.164 (+972...), or null when it is not an Israeli phone. */
export function normalizeIsraeliPhone(raw) {
    const typed = raw == null ? '' : String(raw).trim();
    if (!typed) return null;

    const phone = normalize(typed);
    if (!ISRAELI_PHONE.test(phone)) return null;
    return phone.startsWith('0') ? '+972' + phone.slice(1) : phone;
}
