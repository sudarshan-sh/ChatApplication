// returns a JSON object when you visit the http://localhost:4000/api in the browser.
const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors);

// socket.io is to create a real-time connection---
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});
// establishes a connection with the react-app----
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    // while refreshing or closing the web page, the socket fires the disconnect event showing that a user has disconnected from the socket---
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});


app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});