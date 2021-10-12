// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { Navbar, Footer, PrivateRoute } from "./components";
// Pages
import { HomePage, LoginPage, FriendsPage } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path="/friends" component={FriendsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
