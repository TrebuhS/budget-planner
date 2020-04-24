import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChangeMonthArrow } from "./changeMonthArrow/ChangeMonthArrow";
import { variables } from "../../../../shared/Vars";

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  border-radius: 200px;
  //height: 70px;
  
  & > * {
    flex-grow: 1;
    //padding: 20px 0;
    width: 100%;
    text-align: center;
  }
`;

const FormatedDate = styled.span`
  color: ${variables.darkGray1};
  font-size: 20px;
`

export const DateInfo = (props) => {
    const [month, setMonth] = useState(props.date.toLocaleString('default', { month: 'long' }));
    const [year, setYear] = useState(props.date.getFullYear());

    const changeDate = (direction) => {
        let date = props.date;
        if (direction === "prev") {
            date.setMonth(date.getMonth() - 1);
        } else {
            date.setMonth(date.getMonth() + 1);
        }

        setMonth(props.date.toLocaleString('default', { month: 'long' }));
        setYear(props.date.getFullYear());
        props.setDate(date);
    }

    return (
        <Base>
            <ChangeMonthArrow onClick={() => changeDate("prev")} direction="left" />
            <FormatedDate>
                <div>{month}</div>
                <div>{year}</div>
            </FormatedDate>
            <ChangeMonthArrow onClick={() => changeDate("next")} direction="right" />
        </Base>
    )
}
