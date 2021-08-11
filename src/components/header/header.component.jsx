import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOut } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { CartIcon } from "../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

export const HeaderView = ({ currentUser, isCartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => signOut()}>
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!isCartHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isCartHidden: state.cart.hidden,
});

export const Header = connect(mapStateToProps)(HeaderView);
