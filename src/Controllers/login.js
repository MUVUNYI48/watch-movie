import { comparePassword, createToken } from "../utils";
import { admin } from "../models/Admin/profile.js";
import { customer } from "../models/customer";
import { clients } from "../models/client/profile";

export const login = async (req, res) => {
    try {
        const { Email: EmailBD, Password: passwordInBD } = req.body;

        let info = await customer.findOne({ Email: EmailBD });
        let info1 = await clients.findOne({ Email: EmailBD });
        let info2 = await admin.findOne({ Email: EmailBD });

        let passwordInDB = info ? info.Password : null;
        let passwordInDB1 = info1 ? info1.Password : null;
        let passwordInDB2 = info2 ? info2.Password : null;

        if (passwordInDB !== null) {
            let isMatching = await comparePassword(passwordInBD, passwordInDB);
            if (isMatching) {
                let token = createToken({ EmailBD, passwordInBD });
                return res.json({
                    msg: "customer login successful",
                    token: `your token: ${token} `
                });
            }
        }
        
        if (passwordInDB1 !== null) {
            let isMatching1 = await comparePassword(passwordInBD, passwordInDB1);
            if (isMatching1) {
                let token = createToken({ EmailBD, passwordInBD });
                return res.json({
                    msg: "client login successful",
                    token: `your token: ${token} `
                });
            }
        }

        if (passwordInDB2 !== null) {
            let isMatching2 = await comparePassword(passwordInBD, passwordInDB2);
            if (isMatching2) {
                let token = createToken({ EmailBD, passwordInBD });
                return res.json({
                    msg: "adminR login successful",
                    token: `your token: ${token} `
                });
            }
        }

        return res.json({
            msg: "wrong password",
        });

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

