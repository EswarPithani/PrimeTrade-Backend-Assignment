import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/register", form);

            localStorage.setItem("token", res.data.token);

            alert("Registration successful");

            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Error occurred");
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button type="submit">Register</button>
            </form>

            <p>
                Already have account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Register;