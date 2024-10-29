const Video = require('../models/Video');
const User = require('../models/User');

async function getVideo (req, res) {
    try{
        const videos = await Video.find({ is_active: true });

        if(videos) {
            res.status(200).json({ success: true, data: videos });
        } else {
            res.status(404).json({ success: false, message: 'Video not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
} 

async function getVideoByUser (req, res) {
    try{
        const id = req.params.id;
        const videos = await Video.find({ teacher_id: id, is_active: true });

        if(videos) {
            res.status(200).json({ success: true, data: videos });
        } else {
            res.status(404).json({ success: false, message: 'Video not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
} 

async function getVideoByVideo (req, res) {
    try{
        const id = req.params.id;
        const video = await Video.findById(id);

        if(video && video.is_active === true) {
            res.status(200).json({ success: true, data: video });
        } else {
            res.status(404).json({ success: false, message: 'Video not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
} 

async function addVideo (req, res) {
    try{
        const { teacher_id, title, description, video_png, video_url, price } = req.body;

        const t_id = await User.findById(teacher_id);
        if(!t_id || !t_id.is_active) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        const video = new Video({
            teacher_id: teacher_id,
            title: title,
            description: description,
            video_png: video_png,
            video_url: video_url,
            price: price,
            date_time: Date.now(),
            is_active: true
        });

        const savedVideo = await video.save();
        if(savedVideo) {
            res.status(200).json({ success: true, data: savedVideo });
        } else {
            res.status(404).json({ success: false, message: 'Video error!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function deleteVideo (req, res) {
    try{
        const id = req.params.id;
        const video = await Video.findById(id);

        if(!video) {
            res.status(404).json({ success: false, message: 'Video not found!' });
        } else {
            await video.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Video deleted successfully.' });
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

        const video = await Video.findById(id);
        if(!video) {
            return res.status(404).json({ success: false, message: 'Video not found!' });
        }

        video.title = data;
        video.save();

        res.status(200).json({ success: true, message: 'Video updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updateDescription (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const video = await Video.findById(id);
        if(!video) {
            return res.status(404).json({ success: false, message: 'Video not found!' });
        }

        video.description = data;
        video.save();

        res.status(200).json({ success: true, message: 'Video updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updatePng (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const video = await Video.findById(id);
        if(!video) {
            return res.status(404).json({ success: false, message: 'Video not found!' });
        }

        video.video_png = data;
        video.save();

        res.status(200).json({ success: true, message: 'Video updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updateUrl (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const video = await Video.findById(id);
        if(!video) {
            return res.status(404).json({ success: false, message: 'Video not found!' });
        }

        video.video_url = data;
        video.save();

        res.status(200).json({ success: true, message: 'Video updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

async function updatePrice (req, res) {
    try{
        const id = req.params.id;
        const { data } = req.body;

        const video = await Video.findById(id);
        if(!video) {
            return res.status(404).json({ success: false, message: 'Video not found!' });
        }

        video.price = data;
        video.save();

        res.status(200).json({ success: true, message: 'Video updated successfully.' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
} 

module.exports = {
    getVideo,
    getVideoByUser,
    getVideoByVideo,
    addVideo,
    deleteVideo,
    updateTitle,
    updateDescription,
    updatePng,
    updateUrl,
    updatePrice
}