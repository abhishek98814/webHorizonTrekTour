import { Banner } from "../model/banner.model.js";
import { uploadonCloudinary } from "../db/cloudinary.js";

export const createBanner = async (req, res) => {
    try {
        const { bannerImage, bannerTitle } = req.body;

        const avatarLocalPaths = req?.files?.bannerImage?.map(file => file.path);

        console.log(avatarLocalPaths, "avatarLocalPaths");

        const avatarResponses = await uploadonCloudinary(avatarLocalPaths);
        console.log(avatarResponses);

        if (!avatarResponses) {
            return res.status(500).json({ error: "Failed to upload images to Cloudinary" });
        }

        const bannerImages = avatarResponses.map(response => response.url);

        const newBanner = new Banner({
            bannerImage: bannerImages, 
            bannerTitle,
        });

        const data = await newBanner.save();

        res.status(201).json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while creating the banner" });
    }
};


export const getAllBanner = async(req,res)=>{
    try {
        const data = await Banner.find();
        res.json(data).status(200)
    } catch (error) {
        res.json(error).status(401)
    }
}
