const Live = require('../models/Live');
const User = require('../models/User');

async function getLive (req, res) {
    try{
        const lives = await Live.find({ is_active: true });

        if(lives) {
            res.status(200).json({ success: true, data: lives });
        } else {
            res.status(404).json({ success: false, message: 'Live not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
} 

async function getLiveByUser (req, res) {
    try{
        const id = req.params.id;
        const lives = await Live.find({ teacher_id: id, is_active: true });

        if(lives) {
            res.status(200).json({ success: true, data: lives });
        } else {
            res.status(404).json({ success: false, message: 'Live not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
} 

async function getLiveByLive (req, res) {
    try{
        const id = req.params.id;
        const live = await Live.findById(id);

        if(live && live.is_active === true) {
            res.status(200).json({ success: true, data: live });
        } else {
            res.status(404).json({ success: false, message: 'Live not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
} 

async function addLive (req, res) {
    try{
        const { teacher_id, title, description, video_png } = req.body;

        const t_id = await User.findById(teacher_id);
        if(!t_id || !t_id.is_active) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        const live = new Live({
            teacher_id: teacher_id,
            title: title,
            description: description,
            video_png: video_png,
            date_time: Date.now(),
            is_active: true
        });

        const savedLive = await live.save();
        if(savedLive) {
            res.status(200).json({ success: true, data: savedLive });
        } else {
            res.status(404).json({ success: false, message: 'Live error!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function deleteLive (req, res) {
    try{
        const id = req.params.id;
        const live = await Live.findById(id);

        if(!live) {
            res.status(404).json({ success: false, message: 'Live not found!' });
        } else {
            await live.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Live deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
} 

async function updateTitle (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const live = await Live.findById(id);
        if(!live) {
            return res.status(404).json({ success: false, message: 'Live not found!' });
        }

        live.title = data;
        live.save();

        res.status(200).json({ success: true, message: 'Live updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updateDescription (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const live = await Live.findById(id);
        if(!live) {
            return res.status(404).json({ success: false, message: 'Live not found!' });
        }

        live.description = data;
        live.save();

        res.status(200).json({ success: true, message: 'Live updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updatePng (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const live = await Live.findById(id);
        if(!live) {
            return res.status(404).json({ success: false, message: 'Live not found!' });
        }

        live.video_png = data;
        live.save();

        res.status(200).json({ success: true, message: 'Live updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

module.exports = {
    getLive,
    getLiveByUser,
    getLiveByLive,
    addLive,
    deleteLive,
    updateTitle,
    updateDescription,
    updatePng
}