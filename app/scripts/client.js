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

    setInterval(() => {
      chat.send("PING PONG","ping");
    },5000);

  },

  send: (message, type) => {
    let msg = {
      text: sendMsg.value || message,
      type: type
    }
    chat.socket.send(JSON.stringify(msg));
    sendMsg.value = "";
    return false;
  },

  scroll: () => {
    let msgs = Array.from(
      document.getElementsByClassName("chat-msg")
    );
    let pos = msgs[msgs.length - 1].offsetTop;
    document.getElementById("chat-window").scrollTo({
      top: pos,
      behavior: "smooth"
    });
    return false;
  },

  post: (message) => {
    let msg = document.createElement("p");
    let text = document.createElement("span")
    text.className = "chat-msg";
    text.innerText = `${message}`;
    msg.appendChild(text);
    chat.window.appendChild(msg);
    chat.scroll();
    return false;
  },

};
