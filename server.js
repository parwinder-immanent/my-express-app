const { UserDB } = require('./Users')
const cors = require("cors")
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the our  API sharique'
  });
});

app.post('/register', (req, res) => {
  // 1. get data from reqeust body: ✔
  const user = req.body;
  // 2. verify if the data is a valid user
  // 3. add new user to database if the data is valid
  UserDB.addUser(user)
  res.json(UserDB.users)
})

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'post is  created....',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }
  jwt.sign({ user }, 'secretkey', { expiresIn: '500s' }, (err, token) => {
    res.json({
      token
    });
  });
});  // Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader);
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(5000, () => console.log('Server started on port 5000')); 
