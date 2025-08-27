import React from "react";
import styled, { keyframes } from "styled-components";
import { ScrollToTop } from "../common/ScrollToTop";

const chucky = require("../../assets/images/chucky/chucky.jpg");
const img1 = require("../../assets/images/chucky/img1.jpg");
const img2 = require("../../assets/images/chucky/img2.jpg");
const img3 = require("../../assets/images/chucky/img3.jpg");

const Container = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ContentInner = styled.div`
  width: 100%;
  position: relative;
`;

const Mv = styled.img`
  width: 100%;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;

const TextBlock = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
`;

const MainText = styled.p`
  display: inline-block;
  font-family: "Rampart One", sans-serif;
  color: #ffffff;
  font-size: 40px;
  background: #000;
  padding: 10px 40px;
  margin: 0 0 20px;
  border: 2px solid #fff;
`;

const MvSection = styled.section`
  position: relative;
`;

const DescriptionSection = styled.section`
  padding: 40px 16px;
  color: #ffffff;
`;

const PhotoSection = styled.section`
  padding: 40px 16px;
  color: #ffffff;
`;

const neonFlicker = keyframes`
  0%, 10%, 20%, 30%, 50%, 70%, 90%, 100% {
    color: #00ff7f;
    text-shadow:
      0 0 2px #00ff7f,
      0 0 5px #7fff00,
      0 0 10px #ffffff;
  }
  5%, 25%, 55%, 75% {
    text-shadow: 0 0 1px #00ff7f, 0 0 2px #7fff00;
  }
  15%, 35%, 65%, 85% {
    text-shadow: 0 0 0.5px #00ff7f, 0 0 1px #7fff00;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: "Train One", system-ui;
  color: #00ff7f;
  animation: ${neonFlicker} 1.2s infinite;
  animation-timing-function: steps(2, end);
`;

const Text = styled.p`
  color: #fff;
  font-size: 21px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 10px 0;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Chucky = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentInner>
        <MvSection>
          <Mv src={chucky} alt="Chucky" />
          <Overlay />

          <TextBlock>
            <MainText>ROCKABILLY</MainText>
            <MainText>NIGHT!!!!</MainText>
          </TextBlock>
        </MvSection>

        <DescriptionSection>
          <Heading>俺の名は「chucky」だ！</Heading>
          <Text>
            ちょっと危険？いや、カッコいいだけさ。
            このネオンの光に負けないくらい、俺も輝いている。
          </Text>
        </DescriptionSection>

        <PhotoSection>
          <Heading>俺のギャラリーを紹介する！！</Heading>
          <Text>俺のギャラリーを紹介しよう。</Text>

          <List>
            <Item>
              <Image src={img1} alt="" />
            </Item>
            <Item>
              <Image src={img2} alt="" />
            </Item>
            <Item>
              <Image src={img3} alt="" />
            </Item>
          </List>
        </PhotoSection>
      </ContentInner>
    </Container>
  );
};
