import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeIsraeliPhone } from '../src/utils/phone.js';

test('a local mobile number becomes E.164', () => {
    assert.equal(normalizeIsraeliPhone('052-123-4567'), '+972521234567');
    assert.equal(normalizeIsraeliPhone(' 050 000 0000 '), '+972500000000');
});

test('a landline is accepted', () => {
    assert.equal(normalizeIsraeliPhone('04-6123456'), '+97246123456');
    assert.equal(normalizeIsraeliPhone('073-7296699'), '+972737296699');
});

test('international forms are accepted', () => {
    assert.equal(normalizeIsraeliPhone('+972 52-123-4567'), '+972521234567');
    assert.equal(normalizeIsraeliPhone('972521234567'), '+972521234567');
    assert.equal(normalizeIsraeliPhone('00972521234567'), '+972521234567');
});

test('a number missing its leading 0 is read as Israeli', () => {
    // 2026-11-20: a client typed "+52 8XXXXXX" and the CRM stored no phone.
    assert.equal(normalizeIsraeliPhone('+52 8123456'), '+972528123456');
    assert.equal(normalizeIsraeliPhone('528123456'), '+972528123456');
});

test('a 0 after the plus is dropped', () => {
    assert.equal(normalizeIsraeliPhone('+0521234567'), '+972521234567');
});

test('numbers that are not Israeli phones are refused', () => {
    assert.equal(normalizeIsraeliPhone('052-12345'), null);
    assert.equal(normalizeIsraeliPhone('0521234567890'), null);
    assert.equal(normalizeIsraeliPhone('+1 415 555 0100'), null);
    assert.equal(normalizeIsraeliPhone('0571234567'), null);
    assert.equal(normalizeIsraeliPhone('abc'), null);
});

test('nothing typed is refused', () => {
    assert.equal(normalizeIsraeliPhone(''), null);
    assert.equal(normalizeIsraeliPhone('   '), null);
    assert.equal(normalizeIsraeliPhone(undefined), null);
    assert.equal(normalizeIsraeliPhone(null), null);
});
