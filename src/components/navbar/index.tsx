import React from "react";
import styled from "styled-components";
import { MarketingIcon } from "meistericons";

import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Body1, Body3 } from "../texts";
import Button from "../buttons/button";
import { GithubIcon } from "../../assets/icons";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.62rem auto;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const LinksContainer = styled.ul`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const InlineContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 5rem;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Container>
      <InlineContainer>
        <LogoIcon />
        <div style={{ marginLeft: 8 }}>
          <Body1>MeisterIcons</Body1>
          <Body3>v 1.0.0</Body3>
        </div>
      </InlineContainer>

      <LinksContainer>
        <InlineContainer>
          <MarketingIcon />
          <Body1 marginLeft={8}>Icons</Body1>
        </InlineContainer>
        <Body1 marginRight={80} style={{ cursor: "pointer" }}>
          How to Use?
        </Body1>
        <Body1 marginRight={80} style={{ cursor: "pointer" }}>
          Sponsor
        </Body1>
        <Button text="Start Here" icon={<GithubIcon />} />
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
