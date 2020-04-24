import React from "react";
import styled from "styled-components";

import { MonthlyStatistics } from "./MonthlyStatistics/MonthlyStatistics";

const StyledMain = styled.main`
  //padding: 30px 20px;
`;

export const Main = (props) => {

    return (
        <StyledMain>
            <MonthlyStatistics/>
        </StyledMain>
    )
}
