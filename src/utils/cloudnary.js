import { v2 as cloudinary } from 'cloudinary';

import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    });
    const uploadOnCloudnary= async (localFilePath)=>{
       try{
        if(!localFilePath)return null;
       const res=await cloudinary.uploader
       .upload(localFilePath,{resource_type:"auto"})
         console.log("uploaded Sucessfully",res.url);
         return res;
       }
       catch(err){
            fs.unlinkSync(localFilePath);
       }

    }
    export{ uploadOnCloudnary}
   