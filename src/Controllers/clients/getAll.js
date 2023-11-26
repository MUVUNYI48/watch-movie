import mongoose from "mongoose";
import { clients } from "../../models/client/profile";

export const getAll = async (req, res) => {
    try {
        let data = await clients.find();
        console.log(data);
        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({
            msg: error,
        })
    }
}