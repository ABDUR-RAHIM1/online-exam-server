import usersModel from '../model/usersModel.js';

// Create Profile
export const createProfile = async (req, res) => {
    try {
        const { userId } = req;
        const { name, bio, profilePhoto, contactNumber, address } = req.body;

        // ইউজার খুঁজুন
        const user = await usersModel.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // চেক করুন ইউজারের প্রোফাইল ইতিমধ্যে আছে কি না
        if (user.profile && Object.keys(user.profile).length > 0) {
            return res.status(400).json({ message: 'Profile already exists' });
        }

        // নতুন প্রোফাইল তৈরি করুন
        user.profile = { name, bio, profilePhoto, contactNumber, address };
        await user.save();

        res.status(201).json({ message: 'Profile created successfully', profile: user.profile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Profile
export const getProfile = async (req, res) => {
    try {
        const { userId } = req;
        const user = await usersModel.findById(userId);
        if (!user || !user.profile) return res.status(404).json({ message: 'Profile not found' });

        res.status(200).json(user.profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Profile
export const updateProfile = async (req, res) => {
    try {
        const { userId } = req;
        const updates = req.body;

        const user = await usersModel.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.profile = { ...user.profile, ...updates };
        await user.save();

        res.status(200).json({ message: 'Profile updated successfully', profile: user.profile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params

        const user = await usersModel.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.profile = undefined;  // Remove the profile field
        await user.save();

        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};