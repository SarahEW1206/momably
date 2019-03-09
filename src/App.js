import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Display from "./components/Display";
import About from "./components/About";
import TopNav from "./components/TopNav";
import NavBar from "./components/NavBar";
import SignUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    console.log(this);

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <TopNav />
            <NavBar />
            <Switch>
              <Route exact path="/" component={Display} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
