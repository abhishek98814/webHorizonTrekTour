import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: "dvlibz80r",
    api_key: 745595595787121,
    api_secret: "mil3iAz7z9bU__8oLSl2R-nE79I"
});

const uploadonCloudinary = async (localFilePaths) => {
    try {
        if (!localFilePaths || localFilePaths.length === 0) return null;

        // Upload all files and return an array of responses
        const uploadPromises = localFilePaths.map((filePath) =>
            cloudinary.uploader.upload(filePath, {
                resource_type: "auto",
            })
        );

        // Wait for all uploads to finish
        const uploadResponses = await Promise.all(uploadPromises);
        console.log("Files are uploaded on Cloudinary", uploadResponses);
        
        return uploadResponses;  // Return the responses
    } catch (error) {
        // Handle file cleanup if upload fails
        localFilePaths.forEach((filePath) => {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);  // Delete the file locally
                console.log(`Deleted local file: ${filePath}`);
            }
        });
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
};

export { uploadonCloudinary };
