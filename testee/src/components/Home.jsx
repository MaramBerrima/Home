import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import Navbar from "./Navbar";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  position: fixed;
  top: 0;
  left: 5;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center; 

`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  right: 0;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;



const Home = () => {
  return (
    <Section>
     
      <Container>
      <Links>
          <Logo src="./img/logo.jpg" />
          <List>
          <ListItem></ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Help</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Sign up</Button>
        </Icons>
        <Left>
          
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Welcome to speedester</Subtitle>
          </WhatWeDo>
          <Desc>
          Thanks for puting the website link to analyze

          </Desc>
          <fieldset>
      <label>
        <p>Website Link </p>
        <input name="Site" />
      </label>
    </fieldset>
    <div> <button className="button-one ">Analyser</button></div>
        </Right>
      </Container>
      
    </Section>
  
   
   
  );
};

export default Home;
