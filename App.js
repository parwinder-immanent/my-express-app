
const express = require('express');
const jwt = require('jsonwebtoken');



const app = express();


app.get('/api',  (req, res) => {
  res.json({
    messege: 'welcome to api!'
  });
});



app.post('/api/posts', (req, res) => {
      res.json({
        messege: 'post created.....', 
        // authData
      });
  });



  
app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    username: "sharique",
    email: "sharique.gmail.com"
  }


  jwt.sign({ user }, 'secretkey',(err, token) => {
    res.json({
      token
    });

  });
});

// format o0f token 




app.listen(5000, () => console.log(` Server started on the port 5000`));


// second 


// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();


// app.get('/api', verifyToken, (req, res) => {
//   res.json({
//     messege: 'welcome to api!'
//   });
// });

// app.post('/api/posts', (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     }
//     else {

//       res.json({
//         messege: 'post created.....', 
//         authData
//       });
//     }

//   });
// });

// app.post('/api/login', (req, res) => {
//   const user = {
//     id: 1,
//     username: "sharique",
//     email: "sharique.gmail.com"
//   }


//   jwt.sign({ user }, 'secretkey',{expiresIn: '30s'} ,(err, token) => {
//     res.json({
//       token
//     });

//   });
// });

// // format o0f token 



// // verifyToken
// function verifyToken(req, res, next) {
//   const shariqueHeader = req.headers["authorization"];
//   if (typeof shariqueHeader !== 'undefined') {
//     const sharique = shariqueHeader.split('');
//     const shariquetoken = sharique[1];
//     req.token = shariquetoken;
//     next();


//   }
//   else {
//     res.sendstatus(403);
//   }

// }

// app.listen(5000, () => console.log(` Server started on the port 5000`));
