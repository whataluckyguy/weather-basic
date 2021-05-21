import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";

const Navigation = () => {
  return (
    <Navbar color="p-3 mb-2 bg-light text-dark" light expand="md">
      <NavbarBrand>🍃 Weather App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink className=".text-secondary">About</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
