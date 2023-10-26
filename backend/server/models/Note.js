import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

export default mongoose.model("Note", NoteSchema);