import React from "react";
import styled from "styled-components";
import { MarketingIcon } from "meistericons";

import { LogoIcon } from "../../assets/icons/LogoIcon";
import { Body1 } from "../texts";
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

function Navbar() {
  return (
    <Container>
      <LogoIcon />

      <LinksContainer>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <MarketingIcon />
          <Body1 marginLeft={8}>Icons</Body1>
        </div>
        <Body1>How to Use?</Body1>
        <Body1>Sponsor</Body1>
        <Button text="Start Here" icon={<GithubIcon />} />
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
