import React from "react";

import styled from "styled-components";
import {variables} from "../../../../shared/Vars";

const Base = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 90px;
`;

const TransfersSum = styled.div`
  //width: 200px;
  padding: 10px 35px;
  background-color: ${props => props.type === "e" ? variables.red : variables.green };
  border-radius: 200px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${variables.lightGray1};
  position:relative;
  z-index: 1;
`;

const BalanceSum = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: rgba(112,112,112, .5);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -75%);
`;

export const Balance = (props) => {


    return (
        <Base>
            <BalanceSum>$1000</BalanceSum>
            <TransfersSum type="e">-$1000</TransfersSum>
            <TransfersSum type="i">+$2000</TransfersSum>
        </Base>
    )
}
