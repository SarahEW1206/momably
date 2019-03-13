import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <TopNav />
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
