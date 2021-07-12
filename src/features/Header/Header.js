import React from "react";
import styled from "styled-components/macro";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const StyledHeader = styled.header`
  height: 80px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
height : 100%;
width : 90%;
margin 0 auto;
max-width : 1300px;
display:flex;
align-items : center;
justify-content: space-between;
`;

const Logo = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo>Where in the world?</Logo>
        <ThemeSwitcher />
      </Container>
    </StyledHeader>
  );
}
