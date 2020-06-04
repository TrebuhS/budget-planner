import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { DateInfo } from "./Date/DateInfo";
import {Balance} from "./Balance/Balance";
import { Expense } from "./Expense/Expense";
import { TransfersActions } from "./TransfersActions/TransfersActions";
import axios from "../../../../axiosConfig";

export const MonthlyStatistics = (props) => {
    const [date, setDate] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    });
    const [expenses, setExpenses] = useState(null);
    let isUnmounted = false;

    const changeDate = (newDate) => {
        setDate(newDate);
        console.log(newDate);
        getExpenses();
    };

    const getExpenses = () => {
        axios.post( "/transfers/expense/list", { month: date.month + 1, year: date.year } )
            .then( ( res ) => {
                if ( !isUnmounted ) {
                    let exps = [];
                    console.log( res );
                    for ( let key in res.data ) {
                        if ( res.data.hasOwnProperty( key ) ) {
                            console.log( res.data[ key ] );
                            exps.push( <Expense key={ key } name={ key } amount={ res.data[ key ] }/> )
                        }
                    }
                    setExpenses( exps );
                }
            } );
    }

    useEffect(() => {

        getExpenses();

        return () => isUnmounted = true
    }, [date.month]);

    return (
        <div>
            <DateInfo date={date} setDate={changeDate} />
            <Balance />
            {expenses}
            <TransfersActions refreshExpenses={getExpenses} date={date} />
        </div>
    )
}
