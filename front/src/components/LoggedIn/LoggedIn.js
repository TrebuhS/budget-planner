import React from "react";
import { Logout } from "./Logout/Logout";

export const LoggedIn = (props) => {


    return (
        <div>
            <p>Logged In!</p>
            <Logout setLoginStatus={props.setLoginStatus} />
        </div>
    )
}
