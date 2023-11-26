
import { customer, youtuber } from "../../models/customer/profile";

export const update = async (req, res) => {

    const { id: customerId } = req.params;

    try {

        let Customer = await customer.findOneAndUpdate({ _id: customerId }, req.body, {
            new: true,
            runValidator: true,
        });
        res.status(200).json(Customer);

    } catch (error) {
        res.status(404).json({
            msg: error,

        })
    }
}