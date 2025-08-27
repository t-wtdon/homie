import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { ScrollToTop } from "../common/ScrollToTop";

const Container = styled.section`
  padding-top: 76px; // header分余白を取ってる

  @media (max-width: ${breakpoints.sp}) {
    padding-top: 74px;
  }
`;

const ContentInner = styled.div`
  width: 100%;
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.sp}) {
    padding: 0 12px;
    margin: 0 auto 80px;
  }
`;

export const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentInner>
        <p>テストです</p>
      </ContentInner>
    </Container>
  );
};
