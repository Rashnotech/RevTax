const assert = require('assert');
const { describe, it } = require('mocha');
import('../api/config/server_config.js').then(({ default: config }) => {
    console.log(config.server);
  }).catch(err => {
    console.error('Error importing server_config.js:', err);
});


describe('Server config exist', () => {
    it('Should return true if file exist', () => {
        assert.notEqual(config.server, null);
    });
});

describe('Default config exist', () => {
    it('should return true for port', () => {
        assert.notEqual(config.server.port, null)
    });

    it('should return true for host', () => {
        assert.notEqual(config.server.host, null)
    });
});