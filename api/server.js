const express = require('express');
//model//
// const games = require('./games-model.js')

const server = express();

const needArray = [];

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json(needArray);
});



  server.post('/games', async (req, res) => {
    const game = { title: req.body.title, genre: req.body.genre };
        // id: req.body.id,

   
   if (!req.body.title || !req.body.genre) {
       res.status(422).json({message: 'Please enter required field'})
   } else {
       res.status(200).json(game)
   }
   
  })



  module.exports = server;