var host = "ws://" + (location.host || "chat.cmpsc302.chompe.rs");

console.log(host);

var chat = {
  name: "Luman",
  msg: null,
  socket: new WebSocket(host),
  init: () => {
    chat.socket.addEventListener("open", () => {
      chat.send(`${name} has entered the chat.`);
    });
  }
}
