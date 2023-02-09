import React from "react";
import Header from "./Header";
import Body from "./Body";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { HideContext } from "./CustomHook";

export default function Main() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const { visibility, toggle1, hide } = useContext(HideContext);
  return (
    <div className="main" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="switch-mode" style={{ position: "relative" }}>
        <a
          href="#"
          onClick={toggle}
          style={{ outline: "none" }}
          data-testid="toggle-theme-btn"
        >
          {!dark ? "DARK" : "LIGHT"}
        </a>
      </div>
      <div className="switch-mode-2" style={{ position: "relative" }}>
        <a
          href="#"
          onClick={toggle1}
          style={{ outline: "none" }}
          data-testid="toggle1-hide-btn"
        >
          {!hide ? "HIDE" : "SHOW"}
        </a>
      </div>
      <Header />
      <div className="nagivation-place" style={{ visibility: visibility.visibility }}>
        <div className="nagivation-content">
          <ul className="u">
            <li className="l">
              <a href="#">
                <div className="navigation-link">HOME</div>
              </a>
            </li>
            <li className="l">
              <a href="#">
                <div className="navigation-link">NEWS</div>
              </a>
            </li>
            <li className="l">
              <a href="#">
                <div className="navigation-link">SERIES</div>
              </a>
            </li>
            <li className="l">
              <a href="#">
                <div className="navigation-link">MOVIE</div>
              </a>
            </li>
            <li className="l">
              <a href="#">
                <div className="navigation-link">GENRE</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Body />
    </div>
  );
}
