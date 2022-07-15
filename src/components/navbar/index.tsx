import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoIcon } from "../../assets/icons";
import { Body1, Body3 } from "../texts";
import Button from "../buttons/button";
import SearchIcon from "meistericons/react/esm/SearchIcon";
import { GithubIcon } from "../../assets/icons";
import { routes } from "utils/routes";

const Container = styled.nav`
  display: none;
  position: sticky;
  top: 0;
  height: 6.25rem;
  background: #fff;
  z-index: 1;
  margin: 0 15.1875rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LinksContainer = styled.ul`
  display: none;

  @media (min-width: 1100px) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const InlineContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 5rem;
  cursor: pointer;
`;

type INavbarProps = { version: string };
function Navbar({ version }: INavbarProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <InlineContainer onClick={() => navigate(routes.HOME)}>
        <LogoIcon />
        <div style={{ marginLeft: 8 }}>
          <Body1>MeisterIcons</Body1>
          <Body3>{version}</Body3>
        </div>
      </InlineContainer>

      <LinksContainer>
        <InlineContainer>
          <SearchIcon />
          <Body1 marginLeft={8}>Icons</Body1>
        </InlineContainer>
        <Body1
          onClick={() => navigate(routes.HOWTOUSE)}
          marginRight={80}
          style={{ cursor: "pointer" }}
        >
          How to Use ?
        </Body1>
        <Body1 marginRight={80} style={{ cursor: "pointer" }}>
          Sponsor
        </Body1>
        <a
          href="https://github.com/rahulrajdahal/meistericons"
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <Button text="Start Here" icon={<GithubIcon />} />
        </a>
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
