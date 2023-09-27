import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0px 15%;
  color: black;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Menu = styled.div`
  list-style: none;
  display: flex;
  margin: 0;

  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex; /* Add display: flex */
  align-items: center; /* Vertically center the content */

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: orange;
  }
`;

const SearchIconWrapper = styled.div`
  background: black;
  padding: 9px 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.img`
  width: 75px;
`;
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>
        <Image src="\images\icon.png" alt="logo" />

        <span>Landing Page</span>
      </Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Page</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Testimonial</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Buy Now</MenuItem>
      </Menu>
      <SearchIconWrapper>
        <Search style={{ fontSize: 24, color: "white" }} />
      </SearchIconWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
