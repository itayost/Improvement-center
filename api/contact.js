const PLANDO_URL = 'https://plando.co.il/contacts/lead_form1';
const PLANDO_ACCESS_KEY = '4e9d47283ffca1107b383143ddfa0f8b';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phone, city } = req.body || {};

        if (!name || !phone) {
            return res.status(400).json({ err: '1', errdesc: 'Missing required fields' });
        }

        const params = new URLSearchParams({
            'access_key': PLANDO_ACCESS_KEY,
            'no_redirect': '1',
            'name': name,
            'phone': phone,
            'contact[customer_cat_id]': '0',
            'contact[main_city]': city || ''
        });

        const response = await fetch(PLANDO_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString()
        });

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            data = response.ok ? { err: '0', errdesc: 'Success' } : { err: '1', errdesc: 'API error' };
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Contact API error:', error.message);
        return res.status(500).json({ err: '1', errdesc: error.message || 'Server error' });
    }
}
