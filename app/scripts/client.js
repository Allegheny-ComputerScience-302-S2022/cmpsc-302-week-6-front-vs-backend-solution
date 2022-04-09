var host = "wss://" + (location.host || "chat.cmpsc302.chompe.rs");

console.log(host);

var chat = {
  name: "Luman",
  msg: null,
  socket: new WebSocket(host)
}
