import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const fetchNotes = async () => {
        const res = await API.get("/notes");
        setNotes(res.data);
    };

    const createNote = async () => {
        await API.post("/notes", { title, content });

        setTitle("");
        setContent("");

        fetchNotes();
    };

    const deleteNote = async (id) => {
        await API.delete(`/notes/${id}`);
        fetchNotes();
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            <button onClick={logout}>Logout</button>

            <h3>Create Note</h3>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button onClick={createNote}>Add Note</button>

            <h3>Your Notes</h3>

            {notes.map((note) => (
                <div key={note._id}>
                    <h4>{note.title}</h4>
                    <p>{note.content}</p>

                    <button onClick={() => deleteNote(note._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;