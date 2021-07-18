import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import { Header } from "./components/header/header.component";

import { HomePage } from "./pages/home-page/home-page.page";
import { ShopPage } from "./pages/shop-page/shop-page.page";
import { SignInAndSignUpPage } from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.page";
import { auth } from "./firebase/firebase.core";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromUser = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((userSnapShot) => {
          setCurrentUser({
            id: userSnapShot.id,
            ...userSnapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    this.unsubscribeFromUser && this.unsubscribeFromUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
