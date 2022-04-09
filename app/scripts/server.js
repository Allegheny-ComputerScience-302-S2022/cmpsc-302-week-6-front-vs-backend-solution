const express = require('express');
const { Server } = require('ws');
const port = process.env.PORT || 8080;
const index = "index.html";

const server = express()
  .use(express.static(process.cwd()))
  .use((request, result) => result.sendFile(index, {root: process.cwd()}))
  .listen(port, () => console.log(`Listening on ${port}`));

const socket = new Server({ server });

var users = {};

socket.on("connection", (sock, request) => {

  let uid = 0;

  while(true) {
    if(!users.hasOwnProperty(uid)) {
      users[uid] = sock;
      break;
    }
    uid++;
  }

  sock.on("close", () => {
    delete users[uid];
  });

  sock.on("message", (message) => {
    for (let user in users) {
      users[user].send(message.toString());
    }
  });

});
