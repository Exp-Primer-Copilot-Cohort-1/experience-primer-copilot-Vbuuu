// Create web server with express
// Create a route for POST /comments
// Create a route for GET /comments
// Create a route for GET /comments/:id
// Create a route for PUT /comments/:id
// Create a route for DELETE /comments/:id

// Import express
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import comments.js
const comments = require('./comments');

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  const newComment = comments.addComment(req.body);
  res.json(newComment);
});

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  const comment = comments.getComment(req.params.id);
  res.json(comment);
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const updatedComment = comments.updateComment(req.params.id, req.body);
  res.json(updatedComment);
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  comments.deleteComment(req.params.id);
  res.send('Comment deleted');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
