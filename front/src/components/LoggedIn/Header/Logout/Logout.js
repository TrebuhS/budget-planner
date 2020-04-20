import React from "react";
import axios from "../../../../axiosConfig";

import Button from "../../../shared/Button";

export const Logout = (props) => {

    const onLogout = () => {

        axios.get(process.env.REACT_APP_API_URL + "users/logout").then(() => {
            localStorage.removeItem("token");
            props.setLoginStatus(false);
        });
    }

    return (
        <Button onClick={onLogout}>
            Logout
        </Button>
    )
}
