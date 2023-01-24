import React from "react";
import "../App.css";
import styled from "styled-components";

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(189, 23, 11, 1), #0a0403);
  border-top: 1px solid grey;
`;

const Para = styled.p`
  float: left;
  padding: 1vw;
  color: white;
`;

const Link = styled.a`
  float: right;
  padding: 2vw;
  color: #add8e6;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <Para>Project by Kacper Wasilewski</Para>
      <Link href="https://github.com/KacperW57/Komis-samochodowy">
        Github repository
      </Link>
    </FooterStyled>
  );
}
