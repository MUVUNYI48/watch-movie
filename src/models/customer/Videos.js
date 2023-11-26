import mongoose from "mongoose";

const videosSChema = mongoose.Schema({

    userID: {
        type: String,
        required: true,
    },
    linkOfVideo: {
        type: String,
        required: [true, 'you must provide a linkOfVideo'],
    },
    views: {
        type: Number,
        required: false,
    },
    comment: {
        type: Array,
        required: false,
    },
    share: {
        type: Number,
        required: false,
    },
    subscribers: {
        type: Number,
        required: true,
    },
    lenthOfVideo: {
        type: String,
        required:[ true,'you must provide lenghtOfVideo in hour/minute'],
    },

})

export const videos = mongoose.model('Videos', videosSChema);

