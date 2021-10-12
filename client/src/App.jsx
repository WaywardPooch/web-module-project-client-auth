// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { Navbar, Footer } from "./components";
// Pages
import { HomePage, LoginPage } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
