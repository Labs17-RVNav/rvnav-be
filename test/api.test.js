const request = require('supertest');

const server = require('../src/api/index.js');

describe('GET /api/v1', () => {
  it('db enviornemt test || set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })
});
