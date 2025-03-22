require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./database");
const codeRoutes = require("./routes/codeRoutes");

const app = express();

// Increase file size limit to 50MB
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join(__dirname, "public")));

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
