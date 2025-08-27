import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const logo = require(`../../assets/images/logo.png`);

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  cursor: pointer !important;
  height: 50px;
`;

const Image = styled.img`
  height: 50px;
  object-fit: contain;
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo to="/">
        <Image src={logo} alt="ロゴ" />
      </Logo>
    </HeaderWrap>
  );
};
