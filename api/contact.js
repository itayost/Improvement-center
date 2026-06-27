const INGEST_LEAD_URL = 'https://fyktrpgufhibhstsnxwo.supabase.co/functions/v1/ingestLead';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.LEAD_INGEST_API_KEY;
    if (!apiKey) {
        console.error('Contact API: LEAD_INGEST_API_KEY is not set');
        return res.status(500).json({ err: '1', errdesc: 'Server misconfiguration' });
    }

    try {
        const { name, phone, city } = req.body || {};

        if (!name || !phone) {
            return res.status(400).json({ err: '1', errdesc: 'Missing required fields' });
        }

        const response = await fetch(INGEST_LEAD_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                name,
                phone,
                city: city || undefined,
                source: 'website',
            }),
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.success) {
            return res.status(200).json({ err: '0', errdesc: 'Success' });
        }

        console.error('Contact API: ingestLead failed', response.status, data.error || '');
        return res.status(200).json({ err: '1', errdesc: data.error || 'Failed to submit lead' });
    } catch (error) {
        console.error('Contact API error:', error.message);
        return res.status(500).json({ err: '1', errdesc: error.message || 'Server error' });
    }
}
