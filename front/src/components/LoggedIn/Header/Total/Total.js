import React from "react";
import styled from "styled-components";
import axios from "../../../../axiosConfig";

import {variables} from "../../../shared/Vars";

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.p`
  font-size: 10px;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  color: ${variables.lightGray1};
  opacity: .5;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${variables.lightGray1};
`;

export const Total = (props) => {
    return (
        <Wrapper>
            <Title>TOTAL AMOUNT</Title>
            <Amount>{
                props.totalBalance < 0 ? "-$" + props.totalBalance*-1 : "$" + props.totalBalance
            }</Amount>
        </Wrapper>
    )
}
