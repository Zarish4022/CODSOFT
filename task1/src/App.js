import React from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Next from "./Components/next";
import Main from "./Components/Body";
const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Next />
      <Main />
    </Container>
  );
};

export default App;
