import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    title: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

export default Note = mongoose.model("Note", NoteSchema);