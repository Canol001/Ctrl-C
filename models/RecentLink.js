const mongoose = require("mongoose");

const recentLinkSchema = new mongoose.Schema({
    deviceId: { type: String, required: true },
    slug: { type: String, required: true },
    lastVisited: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RecentLink", recentLinkSchema);
