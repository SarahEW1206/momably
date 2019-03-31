import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Marketplace from "./components/marketplace/Marketplace";
import Home from "./components/Home";
import TopNav from "./components/nav/TopNav";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import EditAccount from "./components/user/EditAccount";
import UserProfile from "./components/user/UserProfile";
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
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={Home}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/marketplace"}
                component={Marketplace}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/signup"}
                component={SignUp}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/login"}
                component={LogIn}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/edit/:id"}
                component={EditAccount}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/profile/:id"}
                component={UserProfile}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/contact"}
                component={Contact}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
