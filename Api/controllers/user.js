const User = require('../models/User');

async function getUser (req, res) {
    try{
        const users = await User.find({ is_active: true });

        if(users) {
            res.status(200).json({ success: true, data: users })
        } else {
            res.status(404).json({ success: false, message: 'User not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getUserById(req, res) {
    try{
        const id = req.params.id;
        const user = await User.findById(id);

        if(user && user.is_active === true) {
            res.status(200).json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: 'User not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
};

async function updateRole (req, res) {
    try{
        const id = req.params.id;
        const { role } = req.body;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        user.role = role;
        user.save();

        res.status(200).json({ success: true, message: 'User role updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateName (req, res) {
    try{
        const id = req.params.id;
        const { name } = req.body;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        user.name = name;
        user.save();

        res.status(200).json({ success: true, message: 'User name updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateEmail (req, res) {
    try{
        const id = req.params.id;
        const { email } = req.body;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        user.email = email;
        user.save();

        res.status(200).json({ success: true, message: 'User email updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updatePassword (req, res) {
    try{
        const id = req.params.id;
        const { password } = req.body;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        user.password = password;
        user.save();

        res.status(200).json({ success: true, message: 'User password updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteUser (req, res) {
    try{
        const id = req.params.id;
        const user = await User.findById(id);

        if(!user) {
            res.status(404).json({ success: false, message: 'User not found!' });
        } else {
            await user.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'User deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = {
    getUser,
    getUserById,
    updateRole,
    updateName,
    updateEmail,
    updatePassword,
    deleteUser
}