import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./view/components";
import { HomePage, SignIn } from "./view/pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signin" component={SignIn}></Route>
      </Switch>
    </div>
  );
}

export default App;
