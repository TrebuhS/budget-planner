import React from "react";
import styled from "styled-components";

import {Hi} from "./Hi/Hi";
import { Logout } from "./Logout/Logout";

const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #a9aba5;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px; 
`;

export const Header = (props) => {

    return (
        <StyledHeader>
            <Hi />

            <Logout setLoginStatus={props.setLoginStatus} />
        </StyledHeader>
    )
}
