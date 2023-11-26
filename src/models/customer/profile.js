import mongoose from "mongoose";

 const customerSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: [true,'you must provide a fullName'],
    }, Email: {
        type: String,
        required: [true,'you must provide a Email'],
    },
    Password:{
        type: String,
        required: [true,'you must provide a password']
    },
    Nationality: {
        type: String,
        required: [true,'you must provide a Nationality'],
    },
    Gender: {
        type: String,
        required: false,
    },

    TelNumber: {
        type: String,
        reqiured: [true,'you must provide a TelNumber'],
    },
    ChannelName: {
        type: String,
        required: [true,'you must provide a ChannelName'],
    },
    linkofTheChannel: {
        type: String,
        required: [true,'you must provide a linkToTheChannel'],
    },
    paymentStatus: {
        type: String,
        required:false,
        default:"Awaiting"
    },
    
    role: {
        type: String,default: "customer",
    }
})

export const customer = mongoose.model('customer', customerSchema);