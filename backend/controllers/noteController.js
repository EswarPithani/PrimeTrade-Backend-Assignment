import Note from "../models/Note.js";

export const createNote = async (req, res) => {
    const note = await Note.create({
        title: req.body.title,
        content: req.body.content,
        user: req.user.id
    });
    res.json(note);
}

export const getNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
}

export const updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(note);
}

export const deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
}