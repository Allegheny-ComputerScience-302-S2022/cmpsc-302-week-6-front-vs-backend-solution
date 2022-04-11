var host = "wss://cmpsc-302-chat-server.herokuapp.com";

// Manage the username dialog

setName.addEventListener("click", () => {
  let name = nameEntry.value;
  if(!name) return false;

  chat.name = nameEntry.value;

  chatLogin.setAttribute("hidden","true");

  sendMsg.removeAttribute("disabled");
  sendBtn.removeAttribute("disabled");

  chat.init()
});

sendMsg.addEventListener("keydown", (evt) => {
  if(evt.key == "Enter" && evt.key !== "Shift"){
    evt.preventDefault();
    sendBtn.click();
  }
  return false;
});

nameEntry.addEventListener("keydown", (evt) => {
  if(evt.key == "Enter") {
    evt.preventDefault();
    setName.click();
  }
  return false;
});

var chat = {
  name: null,
  socket: new WebSocket(host),
  init: () => {

    chat.window = document.getElementById("chat-window");

    chat.send(`${chat.name} has entered the chat.`, "greet");

    chat.socket.addEventListener("message", (evt) => {
      let msg = evt.data;
      chat.post(msg);
    });

    setInterval(() => {
      chat.send("","ping");
    },1000);

  },

  send: (message, type) => {
    let msg = {
      user: chat.name,
      text: sendMsg.value || message,
      type: type
    }

    if(typeof(msg.text) !== "string") return false;

    chat.socket.send(JSON.stringify(msg));

    if(type !== "ping") sendMsg.value = "";
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

// Version checking for the Professor's sanity
var modified = document.lastModified;
var version = modified.replace(new RegExp("[\/: ]", "g"), ".");

document.getElementById("version").innerText = `CatChat v.${version}`;
