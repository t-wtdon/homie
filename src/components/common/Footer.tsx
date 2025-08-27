import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = () => {
  const Footer = styled.footer`
    background: #fff5e1;
  `;

  const Inner = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 80px 20px 20px;
  `;

  const Name = styled(Link)`
    font-size: 20px;
    font-weight: bold;

    &:link,
    &:visited {
      text-decoration: none;
      color: #333;
      cursor: pointer;
    }
  `;

  const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  `;

  const Item = styled.li`
    margin-bottom: 12px;
  `;

  const LinkItem = styled(Link)`
    cursor: pointer !important;

    &:link,
    &:visited {
      color: #000;
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
    }
  `;

  const Copyright = styled.span`
    display: block;
    max-width: 1080px;
    margin: 0 auto;
    padding: 12px 20px;
    text-align: center;
    font-size: 12px;
  `;

  const SmallText = styled.p`
    margin-top: 40px;
    margin-bottom: 0;
    font-size: 14px;
  `;

  const year = new Date().getFullYear();

  return (
    <Footer>
      <Inner>
        <Name to="/">HOMIE</Name>

        {/* <List>
          <Item>
            <LinkItem to="/company">TOP</LinkItem>
          </Item>
        </List> */}
      </Inner>

      <Copyright>© {year} HOMIE. All Rights Reserved.</Copyright>
    </Footer>
  );
};
