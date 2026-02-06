const chat = document.getElementById("chat");
const input = document.getElementById("input");

let silent = false;

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
  div.style.margin = "6px 0";
  div.style.textAlign = sender === "bot" ? "left" : "right";
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  save();
}

function reply(msg) {
  if (silent) return "أنا معك… خذ وقتك.";

  const lang = navigator.language.startsWith("ar") ? "ar" : "en";
  msg = msg.toLowerCase();

  const brain = {
    ar: [
      { k: ["حزين", "تعبان"], v: "حاسس بيك… تحب تحكي؟" },
      { k: ["لوحدي"], v: "مش لوحدك، أنا هنا." },
      { k: ["سلام", "مرحبا"], v: "أهلًا 🤍" }
    ],
    en: [
      { k: ["sad", "tired"], v: "I feel you… want to talk?" },
      { k: ["alone"], v: "You’re not alone." },
      { k: ["hi", "hello"], v: "Hello 🤍" }
    ]
  };

  const set = brain[lang] || brain.en;

  for (let r of set) {
    for (let w of r.k) {
      if (msg.includes(w)) return r.v;
    }
  }

  return lang === "ar"
    ? "احكيلي أكتر… أنا سامعك."
    : "Tell me more… I’m listening.";
}

function send() {
  if (!input.value) return;
  addMessage(input.value, "user");
  addMessage(reply(input.value), "bot");
  input.value = "";
}

function quick(type) {
  if (type === "sad") addMessage("أنا حزين", "user");
  if (type === "talk") addMessage("أحتاج أتكلم", "user");
  if (type === "calm") addMessage("أريد أن أهدأ", "user");
  addMessage(reply(type), "bot");
}

function toggleSilent() {
  silent = !silent;
  addMessage(
    silent ? "🟢 وضع الاستماع مفعل" : "🔵 وضع الاستماع متوقف",
    "bot"
  );
}

load();
