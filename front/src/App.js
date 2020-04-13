import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoggedIn } from "./components/LoggedIn/LoggedIn";

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loginStatus, setLoginStatus] = useState(false);

  const checkIfLoggedIn = () => {
    if (token) {
      axios.post( process.env.REACT_APP_API_URL + "users/auth", {token})
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
          localStorage.setItem("token", "Bearer " + res.data);
          setLoginStatus(true);
        })
  }

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
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
                <LoginForm onSubmit={login} />
            </Route>
            <Route path="/">
              <LoggedIn setLoginStatus={setLoginStatus} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
