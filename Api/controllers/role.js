const Role = require('../models/Role');

async function getUserRole (req, res) {
    try{
        const ur = await Role.find({ is_active: true });

        if(ur) {
            res.status(200).json({ success: true, data: ur })
        } else {
            res.status(404).json({ success: false, message: 'User role not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function addUserRole (req, res) {
    try{
        const { name } = req.body;

        const ur = new Role({
            name: name,
            date_time: Date.now(),
            is_active: true
        });

        const savedUserRole = await ur.save();
        if(savedUserRole) {
            res.status(201).json({ success: true, data: savedUserRole });
        } else {
            res.status(400).json({ success: false, message: 'User role error!' })
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateUserRole (req, res) {
    try{
        const id = req.params.id;
        const { name } = req.body;

        const ur = await Role.findById(id);
        if(!ur) {
            return res.status(404).json({ success: false, message: 'User role not found!' });
        }

        ur.name = name;
        ur.save();

        res.status(200).json({ success: true, message: 'User role updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteUserRole (req, res) {
    try{
        const id = req.params.id;
        const ur = await Role.findById(id);

        if(!ur) {
            res.status(404).json({ success: false, message: 'User role not found!' });
        } else {
            await ur.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'User role deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getUserRoleById (req, res) {
    try{
        const id = req.params.id;
        const ur = await Role.findById(id);

        if(ur && ur.is_active === true){
            res.status(200).json({ success: true, data: ur });
        } else {
            res.status(404).json({ success: false, error: 'User role not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = {
    getUserRole,
    addUserRole,
    updateUserRole,
    deleteUserRole,
    getUserRoleById
}