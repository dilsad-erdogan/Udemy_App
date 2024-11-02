const mongoose = require('mongoose');

const liveSchema = new mongoose.Schema({
    teacher_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    video_png: { type: String, required: true },
    video_url: { type: String, required: true },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean }
}, { timestamps: true });

liveSchema.index({ coordinates: "2dspehere" });
const Live = mongoose.model("Live", liveSchema);
module.exports = Live;