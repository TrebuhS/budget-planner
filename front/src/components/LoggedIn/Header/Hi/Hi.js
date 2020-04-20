import React, { useEffect, useState } from "react";
import axios from "../../../../axiosConfig";

export const Hi = (props) => {
    const [username, setUsername] = useState("");

    useEffect( () => {
        let unmounted = false;
        axios.get("users/username")
            .then((res) => {
                if (!unmounted) {
                    setUsername(res.data.username);
                }
            })
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <div>
            Hi, {username}
        </div>
    )
}
