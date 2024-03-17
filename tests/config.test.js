import assert from 'mocha'

const config = require('../api/config/default.json');

test('Server config exist', () => {
    expect(config.has('server')).toBe(true);
});

test('Default config exist', () => {
    expect(config.has('server.port')).toBe(true);
    expect(config.has('server.host')).toBe(true);
});