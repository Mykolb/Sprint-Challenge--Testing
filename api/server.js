const express = require('express');
//model//
// const games = require('')

const server = express();

// const db = [];

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Here we go' });
});

server.get('/',  async (req,res) => {
    res.status(200).json(db)
  });

  module.exports = server;