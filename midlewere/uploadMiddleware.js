import multer from 'multer';
import axios from 'axios';

// ImgBB API Key (Environment Variable থেকে নিয়ে আসুন)
// const IMG_BB_API_KEY = process.env.IMGBB_API_KEY;

const IMG_BB_API_KEY = "862850e874b9b92bba3bbba84383b4dd";

// Multer configuration: Store image in memory
const upload = multer({ storage: multer.memoryStorage() }).single("photo")

const handleImageUpload = async (req, res, next) => {
    console.log("Middleware Hit");  // Check if this log appears
    console.log(req.file)
    try {
        if (req.body) {
            const imageBuffer = req.file.buffer;

            // Convert image buffer to base64 for ImgBB upload
            const fileBase64 = imageBuffer.toString('base64');

            // Upload image to ImgBB
            const response = await axios.post('https://api.imgbb.com/1/upload', null, {
                params: {
                    key: IMG_BB_API_KEY,
                    image: fileBase64
                }
            });
            console.log(response)
            // Add image URL to the request object
            req.imageUrl = response.data.data.url;
        }

        next();
    } catch (error) {
        res.status(500).send({ error: 'Image upload failed: ' + error.message });
    }
};

export { upload, handleImageUpload };
