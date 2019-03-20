import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Marketplace from "./components/marketplace/Marketplace";
import Home from "./components/Home";
import TopNav from "./components/nav/TopNav";
import NavBar from "./components/nav/NavBar";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import EditAccount from "./components/user/EditAccount";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <TopNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/marketplace" component={Marketplace} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/edit/:id" component={EditAccount} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
