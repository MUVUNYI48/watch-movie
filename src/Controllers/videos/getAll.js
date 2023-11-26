import mongoose from "mongoose";
import { videos } from "../../models/customer";

export const getAll = async (req, res) => {
    try {
        let data = await videos.find();
        console.log(data);
        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({
            msg: error,
        })
    }
}