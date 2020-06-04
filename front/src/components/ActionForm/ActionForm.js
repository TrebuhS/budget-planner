import React, { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const SignUpRedirect = styled.p`
  font-size: 13px;
  color: black;
  margin-top: 5px;
`;

export const ActionForm = ( props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <Base>
            <H1>{props.title}</H1>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
                <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                <Button onClick={() => props.onSubmit(username, password)}>{props.actionName}</Button>
                <Link to={props.redirectUrl}>
                    <SignUpRedirect>{props.redirect}</SignUpRedirect>
                </Link>
            </Form>
        </Base>
    )
}
