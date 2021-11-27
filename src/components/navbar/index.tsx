import React from "react";
import styled from "styled-components";
import { MarketingIcon } from "meistericons";

import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Body1, Body3 } from "../texts";
import Button from "../buttons/button";
import { GithubIcon } from "../../assets/icons";

const Container = styled.nav`
  width: auto;
  margin: 1.62rem 15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinksContainer = styled.ul`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 40%;
`;

const InlineContainer = styled.div`
  display: inline-flex;
  align-items: center;
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
        <Body1>How to Use?</Body1>
        <Body1>Sponsor</Body1>
        <Button text="Start Here" icon={<GithubIcon />} />
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
