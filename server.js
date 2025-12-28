const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

/* CHATBOT LOGIC */
function chatbotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi"))
    return "Hello! Welcome to Xtrazon 👋";

  if (message.includes("services"))
    return "We provide Web Development, Mobile Apps, and Cloud Solutions.";

  if (message.includes("about"))
    return "Xtrazon is an IT company delivering modern software solutions.";

  if (message.includes("contact"))
    return "You can contact us at info@xtrazon.com";

  if (message.includes("price"))
    return "Pricing depends on project requirements.";

  return "Sorry, I didn't understand. Ask about services or contact.";
}

/* API */
app.post("/api/chat", (req, res) => {
  const reply = chatbotReply(req.body.message);
  res.json({ reply });
});

/* SERVER */
app.listen(3000, () => {
  console.log("Xtrazon running at http://localhost:3000");
});
