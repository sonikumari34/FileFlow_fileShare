import { File } from "../models/file.models.js";

const uploadFiles = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No files uploaded" });
    }
    const SERVER_URL = process.env.SERVER_URL || "http://localhost:5000";

    const fileObj = {
        path: req.file.path, // Store the actual file path
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
        publicUrl: `${SERVER_URL}/uploads/${req.file.filename}`, // Store the public URL for access
    };

    try {
        const file = await File.create(fileObj);
        res.status(200).json({
            msg: "File Uploaded Successfully",
            path: fileObj.publicUrl, // Return the public URL for preview
            data: file,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const downloadFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadedContent++;
        await file.save();
        res.download(file.path, file.name);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { uploadFiles, downloadFile };