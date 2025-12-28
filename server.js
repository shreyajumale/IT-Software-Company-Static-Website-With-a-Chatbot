const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

/* ------------------ MIDDLEWARE ------------------ */
app.use(cors());                     // Allow frontend requests
app.use(express.json());             // Parse JSON data
app.use(express.urlencoded({ extended: true }));

/* ------------------ STATIC FILES ------------------ */
app.use(express.static(__dirname));  // Serve index.html & style.css

/* ------------------ CHATBOT LOGIC (SERVICE) ------------------ */
function chatbotService(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi"))
        return "Hello! Welcome to Xtrazon. How can I assist you?";
    if (message.includes("services"))
        return "Xtrazon provides Web Development, Mobile Apps, and Cloud Solutions.";
    if (message.includes("about"))
        return "Xtrazon is a modern IT company delivering smart software solutions.";
    if (message.includes("contact"))
        return "You can reach us at info@xtrazon.com";
    return "Sorry, I didn’t understand that. Please try again.";
}

/* ------------------ ROUTES ------------------ */

// Health Check API
app.get("/api/status", (req, res) => {
    res.json({
        status: "Server running",
        company: "Xtrazon"
    });
});

// Chatbot API
app.post("/api/chat", (req, res) => {
    const userMessage = req.body.message;
    const botReply = chatbotService(userMessage);

    res.json({
        success: true,
        reply: botReply
    });
});

// Contact Form API
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    // Simulated database save
    console.log("Contact Request:", name, email, message);

    res.json({
        success: true,
        message: "Thank you for contacting Xtrazon. We will get back to you."
    });
});

/* ------------------ SERVER START ------------------ */
app.listen(PORT, () => {
    console.log(`Xtrazon server running at http://localhost:${PORT}`);
});
