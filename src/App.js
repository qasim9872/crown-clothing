import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./components/header/header.component";

import { HomePage } from "./pages/home-page/home-page.page";
import { ShopPage } from "./pages/shop-page/shop-page.page";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.page";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
