import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/contact.js';

const realFetch = globalThis.fetch;
let sent;

function fakeRes() {
    const res = { statusCode: 0, body: null };
    res.status = (code) => {
        res.statusCode = code;
        return res;
    };
    res.json = (body) => {
        res.body = body;
        return res;
    };
    return res;
}

beforeEach(() => {
    process.env.LEAD_INGEST_API_KEY = 'test-key';
    sent = [];
    globalThis.fetch = async (url, init) => {
        sent.push({ url, body: JSON.parse(init.body) });
        return { ok: true, json: async () => ({ success: true, lead_id: 'lead-1' }) };
    };
});

afterEach(() => {
    globalThis.fetch = realFetch;
    delete process.env.LEAD_INGEST_API_KEY;
});

test('a valid phone is sent to the CRM in E.164', async () => {
    const res = fakeRes();
    await handler({ method: 'POST', body: { name: 'רות כהן', phone: '052-123-4567', city: 'חיפה' } }, res);

    assert.equal(res.statusCode, 200);
    assert.deepEqual(res.body, { err: '0', errdesc: 'Success' });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].body.phone, '+972521234567');
    assert.equal(sent[0].body.city, 'חיפה');
    assert.equal(sent[0].body.source, 'website');
});

test('an invalid phone is refused and nothing is sent', async () => {
    const res = fakeRes();
    await handler({ method: 'POST', body: { name: 'רות כהן', phone: '052-12345' } }, res);

    assert.equal(res.statusCode, 400);
    assert.deepEqual(res.body, { err: '1', errdesc: 'invalid_phone' });
    assert.equal(sent.length, 0);
});

test('a missing name or phone is refused', async () => {
    const res = fakeRes();
    await handler({ method: 'POST', body: { name: '', phone: '0521234567' } }, res);

    assert.equal(res.statusCode, 400);
    assert.equal(sent.length, 0);
});
