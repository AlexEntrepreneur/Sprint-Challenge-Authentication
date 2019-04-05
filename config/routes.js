const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate } = require('../auth/authenticate');
const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let { username, password } = req.body;
  const requestBodyComplete = !!(username && password);
  const hash = bcrypt.hashSync(password, 10);

  password = hash;

  if (requestBodyComplete) {
    db('users').insert({ username, password })
      .then(success => {
        res.status(201).json({
          message: `Registered as ${req.body.username}`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: `Failed to create user ${req.body.username}. Try again.`,
          error: `${err}`
        });
      });
  }
  else {
    res.status(400).json({
      message: "Please provide a username, password & department"
    })
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
