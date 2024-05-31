// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments from comments.json
const comments = require('./comments.json');

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to get comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send(`Comment with id ${id} not found`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments from comments.js
const comments = require('./comments');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to get comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send(`Comment with id ${id} not found`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});