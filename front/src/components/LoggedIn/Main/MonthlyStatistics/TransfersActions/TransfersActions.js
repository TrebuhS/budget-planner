import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {variables} from "../../../../shared/Vars";
import axios from "../../../../../axiosConfig";

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
`;

const Form = styled.form`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  color: ${variables.lightGray1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => {
      if (props.type === "e") {
          return variables.red;
      } else {
          return variables.green;
      }
    }};
  transition: 1s background-color;
`

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
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

const Confirm = styled.button`
  
`;

const Select = styled.select`
  margin-bottom: 20px;
`;

export const TransfersActions = (props) => {
    const [isFormActive, setFormActive] = useState(true);
    const [formType, setFormType] = useState("i");
    const [categories, setCategories] = useState(null);
    const [formData, setFormData] = useState(null);

    const onChangeFormActive = () => {
        setFormActive(!isFormActive);
    };

    const onTypeChange = (type) => {
        setFormType(type);
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
        axios.post(`/transfers/${formType === "i" ? "income" : "expense"}/add`, formData).then((res) => {
            console.log("Yey!", res);
        })
    }

    const dataToForm = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const getForm = () => {
        return (
            <Form type={formType}>
                <Close onClick={onChangeFormActive}>
                    X
                </Close>
                <Step>1. Choose what type of transfer you want to add.</Step>
                <Label htmlFor="i"><input checked={formType === "i"} onChange={() => onTypeChange("i")} id="i" type="radio" name="type" value="i"/>Income</Label>
                <Label htmlFor="e"><input checked={formType === "e"} onChange={() => onTypeChange("e")} id="e" type="radio" name="type" value="e"/>Expense</Label>
                <Step>2. Enter an amount.</Step>
                <Input required={true} onChange={(e) => dataToForm("amount", e.target.value)} placeholder="$" type="number" />
                { formType === "i" ?
                    (
                        <div>
                            <Step>3. Confirm your action</Step>
                            <Confirm type="button" onClick={addTransfer}>Confirm</Confirm>
                        </div>
                    ) :
                    (
                        <div>
                            <Step>3. Choose category of your expense</Step>
                            <Select onChange={(e) => dataToForm("category", e.target.value)}>
                                { categories }
                            </Select>
                            <Step>4. Confirm your action</Step>
                            <Confirm type="button" onClick={addTransfer}>Confirm</Confirm>
                        </div>
                    )
                }
            </Form>
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
