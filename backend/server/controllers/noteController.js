import Note from "../models/Note.js"

export const fetchNote = async(req, res) => {
    const { userId } = req.body;

    if(!userId) {
        res.status(400);
        throw new Error("user empty !");
        return;
    }

    try{
        const note = await Note.find({user: userId});

        if(note) res.status(200).json(note);
    } catch(error) {
        res.status(400);
        throw new Error(error.message);
    }
}

export const createNote = async(req, res) => {
    const { title, content, userId } = req.body;

    if(content.length === 0 || !userId) {
        res.status(204).json({
            "MesErorr": "content or user empty !"
        });
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

export const editNote = async (req, res) => {
    const { noteId, title, content } = req.body;

    try {
        if(!noteId || !content || !title) {
            res.status(400);
            throw new Error("noteId or content empty !");
            return;
        }

        const note = await Note.findByIdAndUpdate(noteId, {
            title,
            content
        });
        
        if(note) res.status(200).json({message: "edit successed !"});

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
}

export const deleteNote = async(req, res) => {
    const { noteId } = req.body;    
    
    try {
        if(!noteId) {
            res.status(400);
            throw new Error("noteId is empty !");
        }    

        const note = await Note.findOneAndDelete({_id: noteId});
        
        if(note) {
            res.status(200).json({ message: "delete successed !" })
        } else {
            res.status(400).json({ message: "delete failed, cannot find noteId !" })
        } ;
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
}