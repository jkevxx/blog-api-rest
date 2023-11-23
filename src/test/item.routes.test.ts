import request from 'supertest';
import { app, server } from '../app';
const apiUrl = '/api/v1';

describe('GET /items', () => {
  test('should return 200', async () => {
    const response = await request(app).get(`${apiUrl}/items`);
    expect(response.status).toBe(200);
  });
});

afterAll(() => {
  server.close();
});
