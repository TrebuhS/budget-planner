import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Header } from "./Header/Header";
import axios from "../../axiosConfig";
import { MonthlyStatistics } from "./MonthlyStatistics/MonthlyStatistics";

const BodyDiv = styled.div`
  height: 100%;
  width: 100%;
`

export const LoggedIn = (props) => {
    const [totalBalance, setTotalBalance] = useState();
    let isUnmounted = false;

    const getTotalBalance = () => {
        console.log("GET TOTAL BALANCE()")
        axios.get("balance/total").then(res => {
            if ( !isUnmounted ) {
                setTotalBalance( res.data.total );
                console.log( "TOTAL BALANCE: ", res.data );
            }
        });
    };

    useEffect(() => {

        getTotalBalance();

        return () => isUnmounted = true;
    }, []);

    return (
        <BodyDiv>
            <Header totalBalance={totalBalance} setLoginStatus={props.setLoginStatus} />
            <MonthlyStatistics refreshTotalBalance={getTotalBalance}/>
        </BodyDiv>
    )
}
