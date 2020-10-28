const request = require('supertest');
const app = require('../server');
describe('User endpoints', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/user/register')
            .send({
                email: "john@example.com",
                password: "password123"
            })
            expect (res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty('token')
    });
    it('should return a 400 for incomplete password character', async () => {
        const res = await request(app)
            .post('/api/user/register')
            .send({
                email: "jane@example.com",
                password: "passwo"
            })
            expect (res.statusCode).toEqual(400)
            expect(res.body).toHaveProperty('message')
    });
    it('should login a new user', async () => {
        const res = await request(app)
            .post('/api/user/login')
            .send({
                email: "john@example.com",
                password: "password123"
            })
            expect (res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('data')
    });
    it('should return a 401 for wrong credentials', async () => {
        const res = await request(app)
            .post('/api/user/login')
            .send({
                email: "john@example.com",
                password: "password125"
            })
            expect (res.statusCode).toEqual(401)
            expect(res.body.message).toEqual('Invalid credentials')
    });

})