// GA4 Event Tracking Utility

export function trackEvent(eventName, params = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
}

export const trackWhatsAppClick = (location) =>
    trackEvent('whatsapp_click', { location });

export const trackPhoneClick = (location) =>
    trackEvent('phone_click', { location });

export const trackFormSubmit = () =>
    trackEvent('generate_lead', { method: 'contact_form' });
