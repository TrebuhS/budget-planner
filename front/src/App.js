import React, { useEffect, useState } from 'react';
import axios from "./axiosConfig";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ActionForm } from "./components/ActionForm/ActionForm";
import { LoggedIn } from "./components/LoggedIn/LoggedIn";

import styled from "styled-components";
import {variables} from "./components/shared/Vars";


const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.lightGray1};
`

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const checkIfLoggedIn = () => {
    if (localStorage.getItem("token")) {
      axios.post( process.env.REACT_APP_API_URL + "users/auth", {token: localStorage.getItem("token")})
          .then((res) => {
            console.log(res.data === true);
            setLoginStatus(res.data);
            console.log(loginStatus)
          })
          .catch((e) => {
            setLoginStatus(false);
          });
    } else {
      console.log("nope")
      setLoginStatus(false);
    }
    console.log(loginStatus)
  };

  const login = (username, password) => {
    axios.post(process.env.REACT_APP_API_URL + "users/login", {username, password})
        .then((res) => {
          localStorage.setItem("token", res.data);
          setLoginStatus(true);
        })
  };

  const register = (username, password) => {
      axios.post("users/add", {username, password})
          .then(res => {
              console.log(res);
          })
  }

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  useEffect(() => {
      console.log("AUTH", localStorage.getItem("token"));
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
  }, [loginStatus]);

  return (
    <AppDiv className="App">
      <Router>
          { loginStatus ?
              <Redirect to={{
                pathname: "/",
                state: {
                  from: ""
                }
              }} />
              :
              <Redirect to={{
                pathname: "/login",
                state: {
                  from: ""
                }
              }} />
          }
          <Switch>
            <Route path="/login">
                <ActionForm title="Home Budget Planner" actionName="Sign in" redirectUrl="/register" redirect="No account? Sign up!" onSubmit={login} />
            </Route>
              <Route path="/register">
                <ActionForm title="Register" actionName="Sign up" redirectUrl="/login" redirect="Have an account? Sign in!" onSubmit={register} />
            </Route>
            <Route path="/">
              <LoggedIn setLoginStatus={setLoginStatus} />
            </Route>
          </Switch>
      </Router>
    </AppDiv>
  );
}

export default App;
