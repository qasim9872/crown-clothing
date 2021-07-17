import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/home-page/home-page.page";
import { ShopPage } from "./pages/shop-page/shop-page.page";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
