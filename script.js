function reply(msg) {
  const lang = navigator.language.startsWith("ar") ? "ar" : "en";
  msg = msg.toLowerCase();

  const brain = {
    ar: [
      { k: ["حزين", "تعبان", "مكتئب"], v: "حاسس بيك… تحب تحكي أكتر؟" },
      { k: ["لوحدي", "وحده"], v: "مش لوحدك، أنا معاك دلوقتي." },
      { k: ["خايف", "قلقان"], v: "خلّينا نهدى نفسنا سوا شوية." },
      { k: ["سلام", "مرحبا"], v: "أهلًا 🤍 عامل إيه؟" }
    ],
    en: [
      { k: ["sad", "tired", "depressed"], v: "I feel you… want to talk more?" },
      { k: ["alone", "lonely"], v: "You are not alone. I’m here." },
      { k: ["afraid", "anxious"], v: "Let’s slow down together." },
      { k: ["hi", "hello"], v: "Hello 🤍 how are you?" }
    ]
  };

  const set = brain[lang] || brain.en;

  for (let r of set) {
    for (let word of r.k) {
      if (msg.includes(word)) return r.v;
    }
  }

  return lang === "ar"
    ? "احكيلي أكتر… أنا سامعك."
    : "Tell me more… I’m listening.";
}
