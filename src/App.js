import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {

  const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem("user"));

  if (isAuthorized) {
    return (
      <Router>
        <Switch>
          <Route path="/:chatID" component={ChatPage}/>
          <Redirect to={"/work"} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <LoginPage setIsAuthorized={setIsAuthorized}/>
        </Route>
        <Redirect to={"/auth"} />
      </Switch>
    </Router>
  )
}

export default App;
