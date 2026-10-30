"use client"

import {useState} from "react";

export default function CommentBox(username) {
    const[text, setText] = useState("");

    async function handleSubmit() {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({username, text})
        });
        setText("")
    }
    return (
        <div>
            <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment..."
            />
            <button onClick={handleSubmit}>Comment</button>
        </div>
    )
}
