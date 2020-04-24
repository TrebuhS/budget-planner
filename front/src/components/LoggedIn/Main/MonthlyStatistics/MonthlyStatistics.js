import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { DateInfo } from "./Date/DateInfo";
import {Balance} from "./Balance/Balance";
import { Category } from "./Category/Category";
import { TransfersActions } from "./TransfersActions/TransfersActions";

export const MonthlyStatistics = (props) => {
    const [date, setDate] = useState(new Date());

    const changeDate = (newDate) => {
        setDate(newDate);
    }

    return (
        <div>
            <DateInfo date={date} setDate={changeDate} />
            <Balance/>
            <Category/>
            <TransfersActions />
        </div>
    )
}
