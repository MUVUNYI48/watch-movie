import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: [true, 'you must provide fullName'],
    }, Email: {
        type: String,
        required: [true, 'you must provide email'],
    },
    country: {
        type: String,
        required: [true, 'you must provide Nationality'],
    },
    Password: {
        type: String,
        required: [true, 'you must provide password'],
    },
    Gender: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    TelNumber: {
        type: String,
        reqiured: [true, 'you must provide TelNumber'],
    },
    PaymentMethod: {
        type: String,
        default: ["monoPay", "you can enter your payment method"],
        required: true,
    },
    role: {
        type: String,default: "client",
    }
})

export const clients = mongoose.model('clients', clientSchema);