import React from 'react'
import { useState, useEffect } from 'react'
const visibilitys = {
  hide: {
    visibility: "hidden",
  },
  visible: {
    visibility: "visible",
  },
};
const initialState1 = {
  hide: true,
  visibility: visibilitys.hide,
  toggle1: () => {},
};
const HideContext = React.createContext(initialState1);
function HideProvider({ children }) {
  const [hide, setHide] = useState(false); // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isHide = localStorage.getItem("hide") === "true";
    //store the state mode to the local storage
    setHide(isHide);
  }, [hide]); // To toggle between dark and light modes
  const toggle1 = () => {
    const isHide = !hide;
    localStorage.setItem("hide", JSON.stringify(isHide));
    setHide(isHide);
  };
  const visibility = hide ? visibilitys.hide : visibilitys.visible;
  return (
    <HideContext.Provider value={{ visibility, hide, toggle1 }}>
       {children}
    </HideContext.Provider>
  );
}
export { HideProvider, HideContext };
