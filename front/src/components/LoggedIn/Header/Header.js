import React, { useEffect } from "react";
import styled from "styled-components";

import {Hi} from "./Hi/Hi";
import { Logout } from "./Logout/Logout";
import {Total} from "./Total/Total";

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
            <Total totalBalance={props.totalBalance} />
            <Logout setLoginStatus={props.setLoginStatus} />
        </StyledHeader>
    )
}
