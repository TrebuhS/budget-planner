import React from "react";
import styled from "styled-components";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

const BodyDiv = styled.div`
  height: 100%;
  width: 100%;
`

export const LoggedIn = (props) => {
    return (
        <BodyDiv>
            <Header setLoginStatus={props.setLoginStatus} />
            <Main />
        </BodyDiv>
    )
}
