var host = "ws://" + (location.host || "chat.cmpsc302.chompe.rs");

setName.addEventListener("click", () => {
  chat.name = nameEntry.value;
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

    //chat.socket.onopen = () => {
    //  chat.send(`${chat.name} has entered the chat.`);
    //}

    chat.send(`${chat.name} has entered the chat.`);

    chat.socket.addEventListener("message", (evt) => {
      let msg = evt.data;
      chat.draw(msg);
    });

  },

  send: (message) => {
    let msg = sendMsg.value || message;
    chat.socket.send(msg);
    return false;
  },

  draw: (message) => {
    let msg = document.createElement("p");
    msg.className = "chat-msg";
    msg.innerText = `${message}`;
    chat.window.appendChild(msg);
    return false;
  },

};

//window.addEventListener("load", chat.init);
