import { videos } from "../../models/customer";

export const addSubscription = async (req, res) => {
    const { id: videoId } = req.params
    let subscription = await videos.findOneAndUpdate({ _id: videoId },req.body,{
        new: true,
        newValidate: true
    });
    res.status(201).json({
        data: subscription
    })
};