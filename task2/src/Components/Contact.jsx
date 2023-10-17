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
  LinkedIn,
} from "@mui/icons-material";

const Container = styled.div`
  background: orange;

  color: white;
`;

const SocialIcons = styled.div`
  list-style: none;
  display: flex;
  margin: 0;
`;

const SocialIcon = styled.li`
  margin: 0 10px;
  font-size: 24px;
  padding-right: 10px;
  border-right: 1px solid #fff;

  &:last-child {
    border-right: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const MiddleDiv = styled.div`
  text-align: center;
  border: 2px solid white;
  border-radius: 15px;
  padding: 9px;
  float: right;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: white; /* You can change the color on hover if needed */
  }
`;
const TextWrapper = styled.div`
  padding: 0px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Contact = () => {
  return (
    <Container>
      <TextWrapper>
        <SocialIcons>
          <SocialIcon>
            <SocialLink href="https://www.instagram.com/zarish_4022?igshid=OGQ5ZDc2ODk2ZA==">
              <Instagram />
            </SocialLink>
          </SocialIcon>
          <SocialIcon>
            <SocialLink href="https://www.facebook.com/profile.php?id=100035137392370">
              <Facebook />
            </SocialLink>
          </SocialIcon>

          <SocialIcon>
            <SocialLink href="https://www.linkedin.com/in/zarish-saif-605a64202">
              <LinkedIn />
            </SocialLink>
          </SocialIcon>
        </SocialIcons>
        <ContactInfo>
          <p>
            <Phone /> +92 348 6159341 | <Email /> zarishsaif4022@gmail.com
          </p>
        </ContactInfo>
        <MiddleDiv>Request Call</MiddleDiv>
      </TextWrapper>
    </Container>
  );
};

export default Contact;
