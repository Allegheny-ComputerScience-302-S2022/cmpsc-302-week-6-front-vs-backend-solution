const ws = require('ws');
const server = new ws.Server({port: 8080});
const port = process.env.port || 8080;

server.listen(port, () => {
  console.log(`Server listening at $(port}.`);
});

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
