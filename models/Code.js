const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const CodeSchema = new mongoose.Schema({
    code: { type: String, required: true },
    slug: { type: String, unique: true, default: () => nanoid(10) },
    createdAt: { type: Date, default: Date.now, expires: "7d" } // Auto-delete after 7 days
});

module.exports = mongoose.model("Code", CodeSchema);
