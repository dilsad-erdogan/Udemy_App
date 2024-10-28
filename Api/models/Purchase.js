const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    video_id: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean }
}, { timestamps: true });

purchaseSchema.index({ coordinates: "2dspehere" });
const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;