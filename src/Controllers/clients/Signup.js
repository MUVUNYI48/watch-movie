import { clients } from "../../models/client/profile";
import { hashPassword } from "../../utils";

export const Signup = async (req, res) => {

    try {
        let Data = await clients.findOne({ Email: req.body.Email });
        const inBodyPasword = req.body.Password;

        if (Data) {
            return res.status(409).json({ message: "This user is already registered" });
        }

        let hashedPassword = await hashPassword(inBodyPasword);
        let client = await clients.create({ ...req.body, Password: hashedPassword });

        res.status(200).json(client);

    } catch (error) {
        console.error("error:", error);
        res.status(404).json({
            msg: error.message,
        })
    }
}
