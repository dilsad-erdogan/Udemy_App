const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    teacher_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    video_png: { type: String, required: true },
    video_url: { type: String, required: true },
    price: { type: Number, required: true },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean }
}, { timestamps: true });

videoSchema.index({ coordinates: "2dspehere" });
const Video = mongoose.model("Video", videoSchema);
module.exports = Video;