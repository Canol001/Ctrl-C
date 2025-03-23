const express = require("express");
const Code = require("../models/Code");

const router = express.Router();

// Save Code Snippet
router.post("/", async (req, res) => {
    try {
        const { code } = req.body;
        if (!code.trim()) return res.status(400).json({ error: "Code cannot be empty" });

        const newCode = await Code.create({ code });
        res.json({ link: `/code/${newCode.slug}` });
    } catch (error) {
        console.error("Error saving code:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Get Code by Slug & Store in Session
router.get("/:slug", async (req, res) => {
    try {
        const snippet = await Code.findOne({ slug: req.params.slug });
        if (!snippet) return res.status(404).json({ error: "Code not found" });

        if (!req.session.recentLinks) {
            req.session.recentLinks = [];
        }

        // Prevent duplicate entries
        if (!req.session.recentLinks.includes(req.params.slug)) {
            req.session.recentLinks.push(req.params.slug);

            // Limit to 10 recent links
            if (req.session.recentLinks.length > 10) {
                req.session.recentLinks.shift(); // Remove the oldest link
            }
        }

        res.json(snippet);
    } catch (error) {
        console.error("Error retrieving code:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Fetch Recent Links from Session
router.get("/recent-links", (req, res) => {
    res.json(req.session.recentLinks || []);
});

module.exports = router;
