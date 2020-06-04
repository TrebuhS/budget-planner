import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {variables} from "../../../../shared/Vars";
import axios from "../../../../../axiosConfig";

import Button from "../../../../shared/Button";
import Input from "../../../../shared/Input";

const Open = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: ${variables.lightGray1};
  background-color: ${variables.primary};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
  background-color: ${(props) => {
        if (props.type === "e") {
            return variables.red;
        } else {
            return variables.green;
        }
    }};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 1s background-color;
`

const Form = styled.form`
  z-index: 101;
  position: absolute;
  top: 40px;
  bottom: 0px;
  overflow: auto;
  margin: 40px 40px;
  color: ${variables.lightGray1};
  &::-webkit-scrollbar {
    display: none;
  }
`

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  & input {
    margin-right: 10px;
  }
`;

const Step = styled.h2`
  margin-bottom: 20px;
`;

const Confirm = styled(Button)`
  background-color: white;
`;

const Select = styled.select`
  margin-bottom: 20px;
`;

export const TransfersActions = (props) => {
    const [isFormActive, setFormActive] = useState(false);
    const [formType, setFormType] = useState("i");
    const [categories, setCategories] = useState(null);
    const [formData, setFormData] = useState({
        month: props.date.month,
        year: props.date.year
    });

    const onChangeFormActive = () => {
        setFormActive(!isFormActive);
        dataToForm({
            month: props.date.month,
            year: props.date.year
        })
    };

    const onTypeChange = (type) => {
        console.log(categories)
        if (type === "e") {
            dataToForm({
                category: categories[0].props.value
            });
        }
        setFormType(type);
        console.log(formData);
    };

    useEffect(() => {
        let isUnmounted = false;

            axios.get( "/categories/list" )
                .then( ( res ) => {
                    if (!isUnmounted) {
                    setCategories( res.data.map( category => {
                        return <option key={category} value={category}>{ category[0].toUpperCase() + category.slice(1)}</option>
                    }))}
                });

        return () => isUnmounted = true;
    }, []);

    const addTransfer = () => {
        setFormActive(false);
        console.log("Form Data: ", formData);
        axios.post(`/transfers/${formType === "i" ? "income" : "expense"}/add`, formData).then((res) => {
            console.log("Yey!", res);
            props.refreshExpenses();
        })
    }

    const dataToForm = (updateValue) => {
        console.log(updateValue)
        setFormData({
            ...formData,
            ...updateValue
        });
    };

    const getForm = () => {
        const months = [];
        for (let i = 0; i <= 11; i++) {
            months.push(new Date(2000,i).toLocaleString('default', { month: 'long' }));
        }
        const years = [];
        for (let i = props.date.year; i>= props.date.year - 50; i--) {
            years.push(i)
        }

        console.log("RENDERING FORM: ", formData)

        return (
            <Wrapper type={formType}>
                <Close onClick={onChangeFormActive}>
                    X
                </Close>
                <Form type={formType}>
                    <Step>1. Choose what type of transfer you want to add.</Step>
                    <Label htmlFor="i"><input checked={formType === "i"} onChange={() => onTypeChange("i")} id="i" type="radio" name="type" value="i"/>Income</Label>
                    <Label htmlFor="e"><input checked={formType === "e"} onChange={() => onTypeChange("e")} id="e" type="radio" name="type" value="e"/>Expense</Label>
                    <Step>2. Enter an amount.</Step>
                    <Input required={true} onChange={(e) => dataToForm({
                        amount: e.target.value
                    })} placeholder="$" type="number" />
                    <Step>3. Select a date</Step>
                    <p>Month</p>
                    <Select defaultValue={props.date.month} onChange={(e) => {
                        dataToForm({
                            month: e.target.value
                        })
                    }}>
                        { months.map((month, i) => {
                            return <option key={month + i} value={i}>{month}</option>
                        }) }
                    </Select>
                    <p>Year</p>
                    <Select defaultValue={props.date.year} onChange={(e) => dataToForm({
                        year: e.target.value
                    })}>
                        { years.map(year => {
                            return <option key={"year" + year} value={year}>{year}</option>
                        }) }
                    </Select>
                    { formType === "i" ?
                        (
                            <div>
                                <Step>4. Confirm your action</Step>
                                <Confirm type="button" onClick={addTransfer}>Confirm</Confirm>
                            </div>
                        ) :
                        (
                            <div>
                                <Step>4. Choose category of your expense</Step>
                                <Select onChange={(e) => dataToForm({
                                    category: e.target.value
                                })}>
                                    { categories }
                                </Select>
                                <Step>5. Confirm your action</Step>
                                <Confirm type="button" onClick={addTransfer}>Confirm</Confirm>
                            </div>
                        )
                    }
                </Form>
            </Wrapper>
        )
    }

    return (
        <div>
            <Open onClick={onChangeFormActive}>
                +
            </Open>
            { isFormActive ?
                getForm() :
                null
            }
        </div>

    )
}
