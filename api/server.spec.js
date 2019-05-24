const request= require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')
const Games = require('./games-model.js')




describe('server', () => {
    //this test helps make sure we're working on the right testing environment 
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    
    beforeEach(async() => {
        await db('games').truncate(); //truncate clears db before each test 
    })

describe('endpoints', () => {
        describe('GET /', () => {


  //Working
 //test for res.status
 it('should return 200 ok using  THE SQUAD', async() => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
})

//working
//test for res.type JSON
it('should return JSON', async() => {
    const res = await request(server).get('/')
    expect(res.type).toBe('application/json')
})

//working

// it('should return {api: "Time to Sprint!"}', async() => {
//     const res = await request(server).get('/')
//     expect(res.body).toEqual({ api:'Time to Sprint!' })
// })

//Working!
it('should return an array', async () => {
    const res = await request(server).get('/');
    expect(Array.isArray(res.body)).toEqual(true)
})

//Working
//had to uncomment the api  get b/c it was returning an object instead of an array 
it('should return an empty array hopefully', async () => {
    const res = await request(server).get('/');
   expect(res.body).toEqual([])
})

})
//********* POST TESTS ************ */
describe('POST /cats endpoint', () => {
    describe('insert()', () => {
        beforeEach(async() => {
        await db('games').truncate(); //truncate clears db before each test 
    })

    //Working
    it('should insert the game into the db', async() => {
        await Games.insert({ title: 'Mario', genre: 'action' });
        await Games.insert({ title: 'Mortal Kombat', genre: 'action'}); //should return an array of names

        const games = await db('games')
        expect(games).toHaveLength(2)         
    })

    //working
    it("should return a 200 status code", async () => {
        const response = await request(server)
          .post("/games")
          .send({title: 'GTO', genre: 'action'});
        expect(response.status).toEqual(200);
      });
})

        }) 
    })

})