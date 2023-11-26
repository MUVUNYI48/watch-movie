import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: false,
    }, Email: {
        type: String,
        required: [true, 'you must provide email'],
    },
    country: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false,
    },
    Gender: {
        type: String,
        required: false,
    },
    Age: {
        type: Number,
        required: false,
    },
    TelNumber: {
        type: String,
        reqiured:false,
    },
    PaymentMethod: {
        type: String,
        required: false,
    },
    role: {
        type: String,default: "admin",
    }
})

export const admin = mongoose.model('admin', adminSchema);