import React, { useEffect, useState } from "react";

import styled from "styled-components";
import {variables} from "../../../shared/Vars";
import axios from "../../../../axiosConfig";

const Base = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 90px;
`;

const TransfersSum = styled.div`
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
  width: max-content;
  color: rgba(112,112,112, .5);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -75%);
`;

export const Balance = (props) => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);
    let isMounted = true;

    const updateBalance = () => {
        console.log("monthly")
        console.log(props.date);

            axios.post("balance/monthly", {
                month: props.date.month + 1,
                year: props.date.year
            })
            .then(res => {
                if (isMounted) {
                    setIncome(res.data.incomes);
                    setExpense(res.data.expenses);
                    if (res.data.total < 0) {
                        setTotal("-$" + res.data.total*-1);
                    } else {
                        setTotal("$" + res.data.total);
                    }
                    console.log("BALANCE: ", res.data);
                }
            })
    }

    useEffect(() => {
        updateBalance();
        return () => isMounted = false;
    }, [props.date]);

    return (
        <Base>
            <BalanceSum>{total}</BalanceSum>
            <TransfersSum type="e">-${expense}</TransfersSum>
            <TransfersSum type="i">+${income}</TransfersSum>
        </Base>
    )
}
