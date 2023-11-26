import { videos } from "../../models/customer/Videos";

export const uploadVideo = async (req, res) => {
    try {
        await videos.create(req.body);
        res.status(200).json({
            msg: "Video uploaded successfully",
        });
    } catch (error) {
        res.status(501).json({
            msg: error.message
        })
    }

}