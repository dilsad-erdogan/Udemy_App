const Purchase = require('../models/Purchase');
const User = require('../models/User');
const Video = require('../models/Video');

async function getPurchase (req, res) {
    try{
        const purchases = await Purchase.find({ is_active: true });

        if(purchases) {
            res.status(200).json({ success: true, data: purchases });
        } else {
            res.status(404).json({ success: false, message: 'Purchase not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getPurchaseByUser (req, res) {
    try{
        const id = req.params.id;
        const purchase = await Purchase.find({ user_id: id, is_active: true });

        if(purchase) {
            res.status(200).json({ success: true, data: purchase });
        } else {
            res.status(404).json({ success: false, message: 'Purchase not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function addPurchase (req, res) {
    try{
        const { user_id, video_id } = req.body;
        const u_id = await User.findById(user_id);
        const v_id = await Video.findById(video_id);

        if(!u_id || !u_id.is_active){
            if(!v_id || !v_id.is_active){
                return res.status(404).json({ success: false, message: 'Could not add purchase!' });
            }
        }

        const purchase = new Purchase({
            user_id: user_id,
            video_id: video_id,
            date_time: Date.now(),
            is_active: true
        });

        const savedPurchase = await purchase.save();
        if(savedPurchase) {
            res.status(201).json({ success: true, data: savedPurchase });
        } else {
            res.status(404).json({ success: false, message: 'Purchase error!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getPurchase,
    getPurchaseByUser,
    addPurchase
};