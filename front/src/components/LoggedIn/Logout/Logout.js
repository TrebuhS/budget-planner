import React from "react";
import axios from "axios";

export const Logout = (props) => {

    const onLogout = () => {

        axios.post(process.env.REACT_APP_API_URL + "users/logout").then(() => {
            localStorage.removeItem("token");
            props.setLoginStatus(false);
        });
    }

    return (
        <button onClick={onLogout}>
            Logout
        </button>
    )
}
