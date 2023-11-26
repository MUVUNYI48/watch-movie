import { admin } from "../models/Admin/profile.js";

export const isAdmin = async (req, res, next) => {
    try {
        let { userId } = req;
        console.log("userId: " + userId);
        console.log(userId, 'this is id ');
        let Admin = await admin.findById(userId); // Use findById directly
        if (!Admin) {
            // User not found
            return res.status(404).json({
                message: ' not found'
            });
        }
        if (Admin?.role !== 'admin') {
            return res.status(403).json({
                user: userId,
                message: `You are not an admin, no access`
            });
        }
        next();
        // Call next() outside the if block
    } catch (err) {
        console.log('error', err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
