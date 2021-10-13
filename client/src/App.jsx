// Libraries
import React from "react";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
// Components
import { Navbar, Footer, PrivateRoute, Logout } from "./components";
// Pages
import { HomePage, LoginPage, FriendsPage, AddFriendPage } from "./pages";
// Global styles
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path="/friends" component={FriendsPage} />
        <PrivateRoute path="/add-friend" component={AddFriendPage} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
