import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema({
    bannerImage: {
        type: [String],
        required: true, 
    },
    bannerTitle: {
        type: String,
        required: false,
    }
});

export const Banner = mongoose.model("Banner", bannerSchema);
