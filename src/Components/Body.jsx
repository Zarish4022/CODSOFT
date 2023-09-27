import { Headphones, PunchClock, RocketLaunch } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: space-between; /* Use space-between to push items to the ends */
  align-items: center;
  //   padding: 0px 12%;
`;

const Header = styled.div`
  display: flex;
  background: linear-gradient(to right, #ffd452, #f953c6);
  justify-content: space-around;

  align-items: center;
  color: white;
  padding: 0px 15%;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const Title = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  &:hover {
    color: black;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  padding: 12px;
`;

const AboutUs = styled.div`
  display: flex;
  justify-content: space-between;
  //   width: 100%;
  background-color: #ffffff;

  padding: 0px 15%;
  margin-top: 20px;
`;

const AboutText = styled.div`
  flex: 1;
`;

const AboutImage = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 400px; /* Set the height for the container */
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px; /* Set the height for the image */
  background-image: url("/images/pngegg.png");
  background-size: cover;
  z-index: 1; /* Place the image container behind the border */
`;

const Border = styled.div`
  width: 90%;
  height: 64px; /* Set the border height */
  background: linear-gradient(to right, #ffd452, #f953c6);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Whiteborder = styled.div`
  width: 98%;
  height: 56px; /* Set the border height */
  background-color: white; /* Apply the linear gradient background to the border */
  opacity: 1;
  z-index: 0;
  /* Set the opacity to make the div transparent */
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 0px 15%;
  margin-top: 20px;
`;

const Services = styled.div``;

const Service = styled.div`
  // flex: 1;
  justify-content: space-between;
  margin-right: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 150px;
`;
const ServiceImageContainer = styled.div`
  position: relative;
  z-index: 1;
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

  &:hover {
    background-color: orange;
    color: black;
  }
`;
const ServicesImg = styled.div`
  display: flex;
  justify-content: space-between;
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
const Main = () => {
  return (
    <Container>
      <Header>
        <Column>
          <Paragraph>
            <Title>
              <RocketLaunch
                style={{
                  padding: "5px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              Column 1
            </Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            non quia id.
          </Paragraph>
        </Column>
        <Column>
          <Paragraph>
            <Title>
              <Headphones
                style={{
                  padding: "5px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              Column 2
            </Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            non quia id.
          </Paragraph>
        </Column>
        <Column>
          <Paragraph>
            <Title>
              <PunchClock
                style={{
                  padding: "5px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              Column 3
            </Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            non quia id.
          </Paragraph>
        </Column>
      </Header>
      <AboutUs>
        <AboutText>
          <Paragraph>
            <h1>ABOUT US</h1>
            <h4>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              quas odio voluptas.
            </h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto et
            accusamus voluptates. Consequatur minima, laborum porro hic harum,
            beatae exercitationem doloribus ipsum distinctio ea reprehenderit,
            nam molestias eos et! Ducimus suscipit repellendus sapiente
            similique eligendi dicta ut non maiores tempora, repellat voluptas
            at quidem? Expedita qui labore rem, minus veritatis .
          </Paragraph>
          <Button>Read More</Button>
        </AboutText>
        <AboutImage>
          <ImageContainer />
          <Border>
            <Whiteborder />
          </Border>
        </AboutImage>
      </AboutUs>
      <Footer>
        <Services>
          Our Services
          <ServicesImg>
            <Service>
              <ServiceImageContainer>
                <ServiceImage
                  src="/images/service1.jpg"
                  alt="Service 1"
                ></ServiceImage>
                <ServiceWrapper>
                  <ServiceIcon>
                    <RocketLaunch />
                  </ServiceIcon>
                  USER EXPERIENCE
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
            <Service>
              <ServiceImageContainer>
                <ServiceImage src="/images/service2.jpg" alt="Service 2" />
                <ServiceWrapper>
                  <ServiceIcon>
                    <Headphones />
                  </ServiceIcon>
                  CREATIVE DESIGN
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
            <Service>
              <ServiceImageContainer>
                <ServiceImage src="/images/service1.jpg" alt="Service 3" />
                <ServiceWrapper>
                  <ServiceIcon>
                    <PunchClock />
                  </ServiceIcon>
                  RETINA READY
                </ServiceWrapper>
              </ServiceImageContainer>
            </Service>
          </ServicesImg>
        </Services>
      </Footer>
    </Container>
  );
};

export default Main;
