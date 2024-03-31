import { useState } from "react";

export function Createtodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            /><br />

            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json" // Corrected contentType to Content-Type
                        }
                    }).then(async (res) => {
                        await res.json();
                        alert("todo added");
                    });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
