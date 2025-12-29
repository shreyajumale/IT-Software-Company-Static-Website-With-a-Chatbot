const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "Please contact Xtrazcon for more details.";

  if (msg.includes("hi") || msg.includes("hello"))
    reply = "Hello! Welcome to Xtrazcon 👋";

  else if (msg.includes("services"))
    reply = "Xtrazcon offers Web, Mobile, and Cloud solutions.";

  else if (msg.includes("contact"))
    reply = "Email us at info@xtrazcon.com";

  res.json({ reply });
});

app.listen(PORT, () =>
  console.log(`🚀 Xtrazcon running at http://localhost:${PORT}`)
);
