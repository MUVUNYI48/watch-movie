import { youtuber } from "../../../models/customer/profile";
const PaypackJs = require("paypack-js").default;
require('dotenv').config();

const paypack = new PaypackJs({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
});

export const payViews = async (req, res) => {

    await paypack.cashin({
        number: "0781632401",
        amount: 2000,
        environment: "development",
    })
        .then((res) => {
            console.log(res.data);
            let Data = res.data;
            if (Data.status === "pending") {

                // youtuber.create({
                //     paymentStatus: "success",
                // })
            }

        })
        .catch((err) => {
            console.log(err);
        });

}