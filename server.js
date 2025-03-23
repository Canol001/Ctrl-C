require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const connectDB = require("./database");
const codeRoutes = require("./routes/codeRoutes");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Session Configuration
app.use(
    session({
        secret: "yourSecretKey", // Change this to a strong secret key
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24-hour session
    })
);

connectDB();

// API Routes
app.use("/api/code", codeRoutes);

// Serve Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve View Page
app.get("/code/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "view.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
