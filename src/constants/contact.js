export const WHATSAPP_NUMBER = '972504776665';

export const WHATSAPP_MESSAGES = {
    general: 'היי, הגעתי מהאתר ואני מעוניין לדעת עוד על הערכת תפקוד',
    blog: 'היי, הגעתי מהבלוג ואני מעוניין לדעת עוד על הערכת תפקוד',
};

export function getWhatsAppLink(messageKey = 'general') {
    const message = WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.general;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
