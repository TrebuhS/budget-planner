import React from "react";
import styled from "styled-components";
import {variables} from "../../../../shared/Vars";

const Wrapper = styled.div`
  //width: 100%;
  border: 5px solid ${variables.darkGray1};
  color: ${variables.darkGray1};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 100px;
  padding: 10px 20px;
  margin: 20px;
`;

const Amount = styled.p`
  color: ${variables.red};
`

export const Category = (props) => {

    return (
        <Wrapper>
            <p>xd</p>
            <Amount>-$200</Amount>
        </Wrapper>
    )
}
