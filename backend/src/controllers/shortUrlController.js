import { ShortURL } from "../models/shorturl.model.js";
import { nanoid } from "nanoid";


export const createShortURL = async (req, res) => {

    try{

        const { originalUrl, customUrl, expiresAt, title } = req.body;
        const userId = req.user.id;

        if (!originalUrl) {
            console.log("Original URL is required");
            return res.status(400).json({ message: "Original URL is required" });
        }

        let shortCode;
        if (customUrl) {
            shortCode = customUrl;
            const exist = await ShortURL.findOne({ shortCode });
            
            if (exist) {
                console.log("Custom URL already in use");
                return res.status(400).json({ message: "Please try different short code" });
            }
        }
        else {
            shortCode = nanoid(7);
            let exist = await ShortURL.findOne({ shortCode });
            while (exist) {
                shortCode = nanoid(7);
                exist = await ShortURL.findOne({ shortCode });
            } 
        }

        const newShortURL = new ShortURL({
            originalUrl,
            shortCode,
            userId,
    })

    await newShortURL.save();

    return res.status(201).json({newShortURL})
}

    catch(err){
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }

}

export const getToLongURL = async (req, res) => {

    try{
        const { shortCode }= req.params.shortcode;
        const exist = await ShortURL.findOne({ shortCode });

        if (!exist) {
            console.log("Short URL not found");
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.status(302).redirect(exist.originalUrl);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }

}