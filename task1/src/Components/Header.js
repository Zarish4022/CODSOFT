import React from "react";
import styled from "styled-components";
import {
  Twitter,
  Instagram,
  Facebook,
  YouTube,
  Pinterest,
  Phone,
  Email,
} from "@mui/icons-material";

const Container = styled.div`
  background: linear-gradient(to right, #ffd452, #f953c6);
  display: flex;
  justify-content: space-between; /* Use space-between to push items to the ends */
  align-items: center;
  padding: 0px 15%;
  color: white;
`;

const SocialIcons = styled.div`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const SocialIcon = styled.li`
  margin: 0 10px;
  font-size: 24px;
  padding-right: 10px;
  border-right: 1px solid #fff;

  &:last-child {
    border-right: none; /* Remove border for the last item */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  /* Add this CSS to align icons vertically */
  svg {
    vertical-align: middle;
    margin-right: 5px; /* Add some spacing between the icon and text */
  }
`;

const MiddleDiv = styled.div`
  text-align: center;
  border: 2px solid white;
  border-radius: 15px;
  padding: 9px;
  float: right;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

const Header = () => {
  return (
    <Container>
      <SocialIcons>
        <SocialIcon>
          <Twitter />
        </SocialIcon>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
        <SocialIcon>
          <Facebook />
        </SocialIcon>
        <SocialIcon>
          <YouTube />
        </SocialIcon>
        <SocialIcon>
          <Pinterest />
        </SocialIcon>
      </SocialIcons>
      <ContactInfo>
        <p>
          <Phone /> +92 34567892 | <Email /> codsoft@gmail.com
        </p>
      </ContactInfo>
      <MiddleDiv>REQUEST CONSULT</MiddleDiv>
    </Container>
  );
};

export default Header;
