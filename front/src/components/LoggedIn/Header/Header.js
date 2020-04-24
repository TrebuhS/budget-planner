import React from "react";
import styled from "styled-components";

import {Hi} from "./Hi/Hi";
import { Logout } from "./Logout/Logout";

import {variables} from "../../shared/Vars";

const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${variables.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: ${variables.lightGray1};
`;

export const Header = (props) => {

    return (
        <StyledHeader>
            <Hi />

            <Logout setLoginStatus={props.setLoginStatus} />
        </StyledHeader>
    )
}
