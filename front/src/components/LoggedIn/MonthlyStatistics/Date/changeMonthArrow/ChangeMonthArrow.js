import React from "react";
import styled from "styled-components";
import { variables } from "../../../../shared/Vars";


const Svg = styled.svg`
      transform: rotate(${props => props.direction === "left" ? "180deg" : 0});
      fill: ${variables.lightGray1};
      width: 20px;
      height: 20px;
`;

const Wrapper = styled.div`
      height: 70px;
      cursor: pointer;
      background-color: ${variables.darkGray1};
      border-radius: ${props => props.direction === "left" ? "200px 0 200px 0 " : "0 0 200px 200px"};
      display: flex;
      align-items: center;
      justify-content: center;
`;

export const ChangeMonthArrow = (props) => {

    return (
        <Wrapper onClick={props.onClick}>
            <Svg viewBox="0 0 306 306" direction={props.direction}>
                <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153z" />
            </Svg>
        </Wrapper>
    );
}
