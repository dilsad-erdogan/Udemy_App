const Permission = require('../models/Permission');
const User = require('../models/User');

async function getPermission (req, res) {
    try{
        const permission = await Permission.find();

        if(permission) {
            res.status(200).json({ success: true, data: permission });
        } else {
            res.status(404).json({ success: false, message: 'Permission not found' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getPermissionByUser (req, res) {
    try{
        const id = req.params.id;
        const permissions = await Permission.find({ user_id: id, is_active: true });

        if(permissions) {
            res.status(200).json({ success: true, data: permissions });
        } else {
            res.status(404).json({ success: false, message: 'Permission not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function addPermission (req, res) {
    try{
        const { user_id, title, description, video_png, video_url, price } = req.body;

        const u_id = await User.findById(user_id);
        if(!u_id || !u_id.is_active){
            return res.status(404).json({ success: false, message: 'Permission not found!' });
        }

        const permission = new Permission({
            user_id: user_id,
            title: title,
            description: description,
            video_png: video_png,
            video_url: video_url,
            price: price,
            permission_status: null,
            date_time: Date.now(),
            is_active: true
        });

        const savedPermission = await permission.save();
        if(savedPermission) {
            res.status(201).json({ success: true, data: savedPermission });
        } else {
            res.status(404).json({ success: false, message: 'Permission error!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getApprovalStatus (req, res) {
    try{
        const id = req.params.id;
        const { permission_status } = req.body;

        const permission = await Permission.findById(id);
        if(!permission) {
            return res.status(404).json({ success: false, message: 'Permission not found!' });
        }

        permission.permission_status = permission_status;
        permission.save();

        res.status(200).json({ success: true, message: 'Permission approval.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = {
    getPermission,
    getPermissionByUser,
    addPermission,
    getApprovalStatus
};