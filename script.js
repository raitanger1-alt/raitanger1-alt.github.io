const chat = document.getElementById("chat");
const input = document.getElementById("input");

function save() {
  localStorage.setItem("jabaroot_chat", chat.innerHTML);
}

function load() {
  const data = localStorage.getItem("jabaroot_chat");
  if (data) chat.innerHTML = data;
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.margin = "5px 0";
  div.style.textAlign = sender === "bot" ? "left" : "right";
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  save();
}

function reply() {
  const lang = navigator.language.startsWith("ar") ? "ar" : "en";
  const replies = {
    ar: "أنا jabaroot 🤖 معك دايمًا",
    en: "I am jabaroot 🤖 always with you",
    fr: "Je suis jabaroot 🤖 toujours avec toi"
  };
  return replies[lang] || replies.en;
}

function send() {
  if (!input.value) return;
  addMessage(input.value, "user");
  addMessage(reply(), "bot");
  input.value = "";
}

load();
