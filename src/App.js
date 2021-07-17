import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./components/header/header.component";

import { HomePage } from "./pages/home-page/home-page.page";
import { ShopPage } from "./pages/shop-page/shop-page.page";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.page";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
