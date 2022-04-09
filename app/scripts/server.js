var ws = require('ws');
var server = new ws.Server({port: 8080});
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
