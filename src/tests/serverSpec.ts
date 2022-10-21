import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test api/image endpoint on server.ts', () => {
    it('Response with 200 ok ', async () => {
        const Response = await request.get(
            '/api/image?filename=test.jpg&width=400&height=400'
        );
        expect(Response.status).toBe(200);
    });
});
