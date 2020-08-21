import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {


  return (
    <Router>
      <Switch>
        <Route path="/:chatID" component={ChatPage}/>
        <Redirect to={"/work"} />
      </Switch>
    </Router>
  );
}

export default App;
