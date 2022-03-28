import { FigmaIllustration } from "assets/illustrations";
import Navbar from "components/navbar";
import { Body2, Body3, Title } from "components/texts";
import { ViewContainer } from "containers";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    mx-60
    mt-11
    
    grid
    grid-flow-col
    justify-between  
    gap-36
  `}
`;

const Sidebar = styled.div`
  ${tw`
    col-span-2
  `}
`;

const AppIconContainer = styled.div`
  ${tw`
    w-36
    h-36
    rounded-3xl
    flex
    items-center
    justify-center
    `};
  border: 1px solid #cad5e0;
`;

const LinksContainer = styled.ul`
  ${tw`
  flex
  flex-col
  gap-2
`}
`;

interface ILinkProps {
  active: boolean;
}
const Link = styled(Body2)<ILinkProps>`
  ${tw`
    hover:cursor-pointer
  `}
  ${(p) =>
    p.active &&
    css`
      font-weight: bold;
    `}
`;

function HowToUsePage() {
  const designerLinks = [
    { id: 1, link: "Figma" },
    { id: 2, link: "Adobe XD / Sketch" },
    { id: 3, link: "Adobe Illustrator" },
  ];

  const developerLinks = [
    { id: 1, link: "Github" },
    { id: 2, link: "npm" },
    { id: 3, link: "React" },
    { id: 4, link: "Android" },
    { id: 5, link: "iOS" },
  ];

  const [activeLink, setActiveLink] = useState<string>("Figma");

  return (
    <Container>
      <Sidebar>
        <Title marginBottom={32}>How to Use</Title>
        <LinksContainer style={{ marginBottom: 32 }}>
          <Body3 marginBottom={4}>FOR DESIGNERS</Body3>
          {designerLinks.map((item) => (
            <Link
              onClick={() => setActiveLink(item.link)}
              active={activeLink === item.link ? true : false}
            >
              {item.link}
            </Link>
          ))}
        </LinksContainer>
        <LinksContainer>
          <Body3 marginBottom={4}>FOR DEVELOPERS</Body3>
          {developerLinks.map((item) => (
            <Link
              onClick={() => setActiveLink(item.link)}
              active={activeLink === item.link ? true : false}
            >
              {item.link}
            </Link>
          ))}
        </LinksContainer>
      </Sidebar>

      <ViewContainer activeLink={activeLink} />

      <AppIconContainer>
        <img src={FigmaIllustration} alt="figma" width={40} height={60} />
      </AppIconContainer>
    </Container>
  );
}

export default HowToUsePage;
