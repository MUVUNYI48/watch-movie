import { clients } from "../models/client/profile";

export const isClient = (req,res,next) => {
    
        const email = req.body.email
        const client = clients.findOne({ Email: email });

        if(client){
            return console.log("client found",client)
        }  
}