import React, { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import styled from "styled-components";

const Form = styled.form`
  //position: relative;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Base = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <Base>
            <h1>Home Budge Planner</h1>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
                <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                <Button onClick={() => props.onSubmit(username, password)}>Sign in</Button>
            </Form>
        </Base>
    )
}
