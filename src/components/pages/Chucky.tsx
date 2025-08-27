import React from "react";
import styled, { keyframes } from "styled-components";
import { ScrollToTop } from "../common/ScrollToTop";

const chucky = require("../../assets/images/chucky/chucky.jpg");
const aboutChucky = require("../../assets/images/chucky/about.jpg");
const images = [
  require("../../assets/images/chucky/img1.jpg"),
  require("../../assets/images/chucky/img2.jpg"),
  require("../../assets/images/chucky/img3.jpg"),
  require("../../assets/images/chucky/img4.jpg"),
  require("../../assets/images/chucky/img5.jpg"),
];

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

const AboutSection = styled.section`
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
  text-align: center;
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

const TextItem = styled.li`
  font-size: 18px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const StrongText = styled.p`
  margin: 8px 0;
  font-size: 20px;
  font-weight: bold;
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
            <MainText>PSYCHOBILLY</MainText>
            <MainText>NIGHT!!!!</MainText>
          </TextBlock>
        </MvSection>

        <DescriptionSection>
          <Heading>I'm PSYCHO!!!</Heading>
          <Text>
            PSYCHO is more than a name — it’s a statement of fearless creativity
            and timeless style.
          </Text>
        </DescriptionSection>

        <AboutSection>
          <Heading>About PSYCHO!!!</Heading>

          <Image src={aboutChucky} alt="" />

          <Text>
            Wandering through a mad world, PSYCHO lives where the edge meets the
            extraordinary.
          </Text>

          <List>
            <TextItem>
              <StrongText>好きな音楽：</StrongText> Psychobilly, Rockabilly,
              Punk
            </TextItem>
            <TextItem>
              <StrongText>好きなもの：</StrongText>
              ネオンの街、ホラー映画、カスタムカー
            </TextItem>
            <TextItem>
              <StrongText>性格：</StrongText> 不良っぽいけどユーモア大好き /
              夜行性
            </TextItem>
            <TextItem>
              <StrongText>モットー：</StrongText>
              「まともじゃつまらない、狂ってこそロック」
            </TextItem>
          </List>
        </AboutSection>

        <PhotoSection>
          <Heading>PSYCHO Gallery!!!</Heading>

          <Text>
            Discover the collection — each piece a reflection of PSYCHO’s unique
            perspective.
          </Text>

          <List>
            {images.map((img, i) => {
              return (
                <Item key={i}>
                  <Image src={img} alt="" />
                </Item>
              );
            })}
          </List>
        </PhotoSection>
      </ContentInner>
    </Container>
  );
};
