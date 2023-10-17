import React from "react";
import styled from "styled-components";
import {
  ComputerOutlined,
  CssOutlined,
  GroupAddTwoTone,
  Home,
  Html,
  Javascript,
  JavascriptRounded,
  School,
  ShoppingBagSharp,
  WavingHand,
} from "@mui/icons-material";
import Contact from "./Contact";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  color: black;
  min-height: 100vh;
`;

const Section = styled.section``;

const Navbar = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15%;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0px 20px;
    font-weight: bold;
    font-size: 20px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: pink;
    }
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #ffd452, #f953c6);
  color: white;
  padding: 10px 20px;
  border: none;
  margin: 12px;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: orange;
    color: black;
  }
`;

const AboutUs = styled(Section)`
  background-color: white;
  border-radius: 10px;
  padding: 20px 15%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutText = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url("/images/zarish.jpg");
  background-size: cover;
  border-radius: 50%;
  padding-bottom: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
const SkillsImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url("/images/skills.jpg");
  background-size: cover;
  border-radius: 5%;
  padding-bottom: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
const CertImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url("/images/cert.jfif");
  background-size: cover;
  border-radius: 5%;
  padding-bottom: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
  padding: 5px;

  &:hover {
    color: black;
  }
`;

const Footer = styled.section`
  background-color: black;

  padding: 0px 15%;
  color: white;
  display: flex;
  justify-content: center;
`;

const Services = styled.div`
  padding: 20px 15%;
`;

const Service = styled.div`
  justify-content: space-between;
  margin-right: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 150px;
  box-shadow: 0 5px 15px rgba(1, 0, 0, 0.3);
  border-radius: 15px;
`;

const ServiceImageContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const Paragraph = styled.p`
  font-size: 16px;
  padding: 12px;
`;
const ServicesImg = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px;
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  margin-bottom: 20px;
  position: absolute;
  border-radius: 20px 0px 0px 20px;
  right: 0;
  bottom: -35px;
  background-color: white;
  z-index: 2;
`;

const ServiceIcon = styled.div`
  background: linear-gradient(to right, #ffd452, #f953c6);
  color: white;
  padding: 10px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  display: inline-flex;

  &:hover {
    color: black;
  }
`;
const SkillSection = styled(Section)`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  background-color: lightgray;
  margin-top: 20px;
  padding: 0px 15%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 8%;
  border-radius: 50%;
  margin-right: 15px;
`;
const Skills = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-around;
`;
const SkillImage = styled.img`
  width: 70%;
  padding: 5px;
  border-radius: 50%;
  background-color: lightgray;
`;

const Portfolio = () => {
  return (
    <Container>
      <Section id="contact">
        <Contact />
      </Section>
      <Navbar>
        <NavbarLeft>
          <Image src="/images/zarish.jpg" alt="zarish" />
          <Title style={{ fontSize: "16px", color: "white" }}>ZARISH</Title>
        </NavbarLeft>
        <NavbarRight>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#edu">Education</a>
          <a href="#cert">Certificate</a>
        </NavbarRight>
      </Navbar>

      <AboutUs id="about">
        <AboutText>
          <Paragraph>
            <Title>
              Hello all, I'm Zarish <WavingHand />
            </Title>
            <h1>Introduction</h1>
            "I am a dedicated 🎓 computer science student with a passion for 💻
            technology and problem-solving. I have honed my skills in
            programming and software development, and I'm eager to apply my
            knowledge to real-world challenges. With a strong foundation in
            computer science principles and a commitment to continuous learning,
            I am excited to contribute to innovative projects and make a
            meaningful impact in the tech industry. 🚀"
          </Paragraph>
          <Button>Get in Touch</Button>
          <Button>
            <a
              href="/path/to/your/resume.pdf"
              download
              style={{ textDecoration: "none", color: "white" }}
            >
              Download Resume
            </a>
          </Button>
        </AboutText>
        <AboutImage>
          <ImageContainer />
        </AboutImage>
      </AboutUs>

      <SkillSection id="skills">
        <AboutImage>
          <SkillsImageContainer />
        </AboutImage>
        <AboutText>
          <Paragraph>
            <h1>What I do 🤷</h1>
            <p>
              CRAZY FULL STCACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
            <Paragraph>
              <Skills>
                <Title>
                  <SkillImage src="/images/react.png" alt="zarish" />
                </Title>
                <Title>
                  <SkillImage src="/images/css.png" alt="zarish" />
                </Title>
                <Title>
                  <SkillImage src="/images/html.png" alt="zarish" />
                </Title>

                <Title>
                  <SkillImage src="/images/js.png" alt="zarish" />
                </Title>
              </Skills>
            </Paragraph>
          </Paragraph>
          <Button>Read More</Button>
        </AboutText>
      </SkillSection>

      <Section id="edu">
        <Services>
          <Title>Education</Title>
          <ServicesImg>
            <Service>
              <ServiceImageContainer>
                <ServiceImage
                  src="/images/APS.webp"
                  alt="Service 1"
                  style={{ width: "150%" }}
                />
                <ServiceWrapper>
                  <ServiceIcon>
                    <School />
                  </ServiceIcon>
                  Army Public School & College
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
            <Service>
              <ServiceImageContainer>
                <ServiceImage
                  src="/images/NUML.jpg"
                  alt="Service 2"
                  style={{ width: "150%" }}
                />
                <ServiceWrapper>
                  <ServiceIcon>
                    <School />
                  </ServiceIcon>
                  National University Of Modern Languages
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
          </ServicesImg>
        </Services>
      </Section>
      <Section id="projects">
        <Services>
          <Title>Projects</Title>
          <ServicesImg>
            <Service>
              <ServiceImageContainer>
                <ServiceImage src="/images/bags.jpg" alt="Service 1" />
                <ServiceWrapper>
                  <ServiceIcon>
                    <ShoppingBagSharp />
                  </ServiceIcon>
                  Baggies store
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
            <Service>
              <ServiceImageContainer>
                <ServiceImage src="/images/Capture.PNG" alt="Service 2" />
                <ServiceWrapper>
                  <ServiceIcon>
                    <GroupAddTwoTone />
                  </ServiceIcon>
                  Zari Store
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
            <Service>
              <ServiceImageContainer>
                <ServiceImage src="/images/home.jpg" alt="Service 3" />
                <ServiceWrapper>
                  <ServiceIcon>
                    <Home />
                  </ServiceIcon>
                  Home Services
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
          </ServicesImg>
        </Services>
      </Section>
      <SkillSection id="cert">
        <AboutImage>
          <CertImageContainer />
        </AboutImage>
        <AboutText>
          <Paragraph>
            <h1>Certificates</h1>
            <p>
              <Javascript /> React Inter from Evamp & Saanga
            </p>
            <Paragraph>
              <Skills></Skills>
            </Paragraph>
          </Paragraph>
        </AboutText>
      </SkillSection>
      <Footer>
        <p>&copy; 2023 Zarish Portfolio</p>
      </Footer>
    </Container>
  );
};

export default Portfolio;
