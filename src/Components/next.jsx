import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-image: url("/images/pexels-mart-production-7550294.jpg");
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 20px;
  width: 50%;
  color: white;
  position: relative;
  border-left: 2px solid transparent;
`;
const BackgroundImage = styled.div`
  background-image: url("/images/pexels-mart-production-7550294.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  filter: brightness(50%); /* Adjust brightness as needed */
`;
const GradientBorder = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #ffd452, #f953c6);
`;

const ParagraphWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const SliderCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ff6b6b;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;

  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background: linear-gradient(to right, #ffd452, #f953c6);
  color: white;
  font-size: 16px;
  font-size: bold;
  padding: 10px 20px;
  border: none;
  margin: 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: black;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subheading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const paragraphs = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
];

const Next = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Subheading>Creative Digital Agency</Subheading>
        <Heading>We Are Creative</Heading>
        <GradientBorder />
        {paragraphs.map((paragraph, index) => (
          <ParagraphWrapper key={index}>
            <p style={{ display: index === activeIndex ? "block" : "none" }}>
              {paragraph}
            </p>
            <SliderCircle
              onClick={() => handleCircleClick(index)}
              isActive={index === activeIndex}
            />
          </ParagraphWrapper>
        ))}
        <ButtonWrapper>
          <Button>Book Service</Button>
          <Button>Request Consult</Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Next;
