import { admin } from "../../models/Admin/profile";
import { hashPassword } from "../../utils";

export const create = async (req, res) => {

    try {
        let Data = await admin.findOne({ Email: req.body.Email });
        const inBodyPasword = req.body.Password;

        if (Data) {
            return res.status(409).json({ message: "This user is already registered" });
        }

        let hashedPassword = await hashPassword(inBodyPasword);
        let Admin = await admin.create({ ...req.body, Password: hashedPassword });

        res.status(200).json(Admin);

    } catch (error) {
        console.error("error:", error);
        res.status(404).json({
            msg: error.message,
        })
    }
}
