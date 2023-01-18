import React from "react";
import "../style/Header.css";
import companyLogo from "../img/shreyas_logo_nav.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const authHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={companyLogo} alt="Shreyas'" />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="What is it that you desire?"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={authHandler} className="header__option">
            <span className="header__optionLineOne">
              {user
                ? user?.displayName
                  ? `Hello ${user?.displayName}`
                  : `Hello ${user?.email}`
                : `Hello Guest`}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header__optioncart">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__cartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
