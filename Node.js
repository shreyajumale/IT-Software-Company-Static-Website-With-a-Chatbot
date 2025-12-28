const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
    const message = req.body.message.toLowerCase();
    let reply = "Sorry, I didn't understand that.";

    if (message.includes("hello"))
        reply = "Hello! Welcome to Xtrazon.";
    else if (message.includes("services"))
        reply = "Xtrazon offers Web, Mobile App, and Cloud solutions.";
    else if (message.includes("contact"))
        reply = "You can contact us at info@xtrazon.com";

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Xtrazon server running on http://localhost:3000");
});
