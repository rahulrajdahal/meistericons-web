import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  DribbbleIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  TwitterIcon,
} from "../assets/icons";
import { Leading, Body2, Body3 } from "../components/texts";

const Container = styled.div`
  background: #0d1829;
  padding: 5rem 15rem 2.5rem 15rem;
`;

const InnerContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-between`}
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  ${tw`
    flex
    gap-16
`};
`;

const LinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
`}
`;

const Link = styled(Body2)`
  ${tw`
    hover:cursor-pointer
`};
  color: #f0f5f9;
`;

function FooterContainer() {
  return (
    <Container>
      <LogoIcon />

      <InnerContainer>
        <LeftContainer>
          <Leading color="#fff">meistericons</Leading>
          <Body3 color="#E1E8F0">by MEISTERNATOR</Body3>

          <div style={{ marginTop: 40, display: "flex", gap: 22 }}>
            <InstagramIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <DribbbleIcon />
          </div>

          <Body2 color="#F0F5F9" marginTop={103}>
            Made with 💝 in Kathmandu, Nepal
          </Body2>
        </LeftContainer>

        <RightContainer>
          <LinksContainer>
            <Link
              onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
            >
              All Icons
            </Link>
            <Link>How to Use</Link>
            <Link>Sponsor</Link>

            <Link marginTop={103}>Terms of Use</Link>
          </LinksContainer>
          <LinksContainer>
            <Link>Github</Link>
            <Link>Figma Plugin</Link>
            <Link>SVG Pack</Link>

            <Link marginTop={103}>Privacy Policy</Link>
          </LinksContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}

export default FooterContainer;
