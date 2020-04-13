import React, { useEffect, useState } from "react";

export const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("XD");
    },[]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={e => setUsername(e.target.value)} />
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => props.onSubmit(username, password)}>Sign in</button>
        </form>
    )
}
