const request = require('supertest');
const app = require('../server');
const jwt = require('../api/helpers/jwt');

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


});

describe('Twit Routes', () => {
    it('should create new twit', async () => {
        const user = {
            id: 1,
            name: "John",
            email: "john@example.com",
        }

        const token = await jwt.generateToken(user);

        const res = await request(app)
            .post('/api/twit/new')
            .set({ token })
            .send({
                twit: "ManUtd should win tonight"
            })
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty("data")

    });

    it('should fetch twit', async () => {
        const res = await request(app)
            .get('/api/twit')
             expect(res.statusCode).toEqual(200)
             expect(res.body).toHaveProperty("data")
            
    });

    it('should add comment to twit', async () => {
        const user = {
            id: 1,
            name: "John",
            email: "john@example.com",
        }

        const token = await jwt.generateToken(user);

        const res = await request(app)
            .post('/api/twit/1/comment')
            .set({ token })
            .send({
                twit: "Leipzig will be tough"
            })
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty("data")

    });

    it('should delete twit', async () => {
        const user = {
            id: 1,
            name: "John",
            email: "john@example.com",
        }

        const token = await jwt.generateToken(user);
        const res = await request(app)
            .delete('/api/twit/1')
            .set({ token })
             expect(res.statusCode).toEqual(202)
             expect(res.body).toHaveProperty("data")
            
    });



})