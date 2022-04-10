var host = "ws://" + (location.host || "chat.cmpsc302.chompe.rs");

setName.addEventListener("click", () => {
  chat.name = nameEntry.value;
  setName.setAttribute("disabled","true");
  nameEntry.setAttribute("disabled","true");
  sendMsg.removeAttribute("disabled");
  sendBtn.removeAttribute("disabled");
  chat.init()
});

var chat = {
  name: null,
  msg: null,
  socket: new WebSocket(host),
  init: () => {

    chat.window = document.getElementById("chat-window");

    chat.send(`${chat.name} has entered the chat.`, "greet");

    chat.socket.addEventListener("message", (evt) => {
      let msg = evt.data;
      chat.post(msg);
    });

  },

  send: (message, type) => {
    let msg = {
      text: sendMsg.value || message,
      type: type
    }
    chat.socket.send(msg);
    sendMsg.value = "";
    return false;
  },

  post: (message) => {
    let msg = document.createElement("p");
    msg.className = "chat-msg";
    msg.innerText = `${message}`;
    chat.window.appendChild(msg);
    return false;
  },

};
