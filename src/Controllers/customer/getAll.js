import mongoose from "mongoose";
import { customer } from "../../models/customer/profile";

export const getAll = async (req, res) => {
    try {
        let data = await customer.find();
        console.log(data);
        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({
            msg: error,
        })
    }
}