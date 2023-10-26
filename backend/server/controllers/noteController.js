import Note from "../models/Note.js"

export const createNote = async(req, res) => {
    const { title, content, userId } = req.body;

    if(content.length === 0 || !userId) {
        res.status(400);
        throw new Error("content or user empty !");
        return;
    }

    const newNote = {
        title,
        content,
        user: userId
    }

    try {
        const note = await Note.create(newNote);
        
        if(note) res.status(200).json(newNote);

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
}
