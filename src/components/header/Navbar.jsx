import React from "react";
import { Button } from "react-bootstrap";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const data = [
  { name: "Makeleler", url: "/makaleler" },
  { name: "Bağlantılar", url: "/baglantilar" },
  { name: "İletişim", url: "/iletisim" },
];

const Navbar = () => {
  return (
    <>
      <HamburgerMenu />
    </>
  );
};

export default Navbar;
