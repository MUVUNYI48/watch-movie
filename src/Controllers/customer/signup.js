import { customer } from "../../models/customer/profile";
import { hashPassword } from "../../utils";

export const signup = async (req, res) => {

    try {

        let Data = await customer.findOne({ Email: req.body.Email });

        if (Data) {
            return res.status(409).json({ message: "This user is already registered" });
        }

        const inBodyPasword = req.body.Password;

        let hashedPassword = await hashPassword(inBodyPasword);
        let youtube = await customer.create({ ...req.body, Password: hashedPassword });
        res.status(200).json(youtube);

    } catch (error) {
        console.error("error:", error);
        res.status(404).json({
            msg: error,
        })
    }
}