const express = require('express');
const ws = require('ws');
const port = process.env.port || 8080;
const index = "/index.html";

const server = express()
  .use((request, result) => result.sendFile(index, {root: app}))
  .listen(port, () => console.log(`Listening on ${port}`));

var users = {};

server.on("connection", (socket, request) => {

  let uid = 0;

  while(true) {
    if(!users.hasOwnProperty(uid)) {
      users[uid] = socket;
      break;
    }
    uid++;
  }

  socket.on("close", () => {
    delete users[uid];
  });

  socket.on("message", (message) => {
    for (let user in users) {
      users[user].send(message.toString());
    }
  });

});
