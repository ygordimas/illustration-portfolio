import React from "react";
import NavMenuButton from "./NavMenuButton";
import NavMenuLinks from "./NavMenuLinks";
import NavMenuOverlay from "./NavMenuOverlay";
import { useGlobalContext } from "../../context/store";

function NavMenu() {
  const { isOpen, setIsOpen } = useGlobalContext();
  const size = "20";
  return (
    <div className={`h-fit w-fit`}>
      <NavMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <NavMenuLinks isOpen={isOpen} handleOpen={setIsOpen} />}
      <NavMenuOverlay />
    </div>
  );
}

export default NavMenu;
