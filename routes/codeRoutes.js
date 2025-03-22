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

// Get Code by Slug
router.get("/:slug", async (req, res) => {
    try {
        const snippet = await Code.findOne({ slug: req.params.slug });
        if (!snippet) return res.status(404).json({ error: "Code not found" });

        res.json(snippet);
    } catch (error) {
        console.error("Error retrieving code:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
