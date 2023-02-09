import React from "react";
import NavigationHeader from "./NavigationHeader";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-place">
        <div className="logo-place"></div>

        <div className="search-box-place">
          <div className="search-box">
            <form className="search-box-form">
              <input
                type="search"
                className="input-place"
                placeholder="Search your movie ..."
              />
              <input type="submit" className="submit-place" value=" " />
            </form>
          </div>
        </div>

        <div className="sign-in-place"></div>

        <div className="navigation-header-place">
          <NavigationHeader />
        </div>
      </div>
    </div>
  );
}
