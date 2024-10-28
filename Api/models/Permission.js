const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    video_png: { type: String, required: true },
    video_url: { type: String, required: true },
    price: { type: Number, required: true },
    permission_status: { type: Boolean },
    date_time: { type: Date, default: Date.now },
    is_active: { type: Boolean }
}, { timestamps: true });

permissionSchema.index({ coordinates: "2dspehere" });
const Permission = mongoose.model("Permission", permissionSchema);
module.exports = Permission;