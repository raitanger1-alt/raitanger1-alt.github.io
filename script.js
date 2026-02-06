const chat = document.getElementById("chat");
const input = document.getElementById("input");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.margin = "5px 0";
  div.style.textAlign = sender === "bot" ? "left" : "right";
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function reply(msg) {
  const lang = navigator.language.startsWith("ar") ? "ar" : "en";

  const replies = {
    ar: "أنا jabaroot 🤖 أفكر معك… قل لي ماذا تريد",
    en: "I am jabaroot 🤖 thinking with you… tell me what you want",
    fr: "Je suis jabaroot 🤖 je réfléchis avec toi… dis-moi"
  };

  return replies[lang] || replies.en;
}

function send() {
  if (!input.value) return;
  addMessage(input.value, "user");
  addMessage(reply(input.value), "bot");
  input.value = "";
}
