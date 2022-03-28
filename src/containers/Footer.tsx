import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { routes } from "utils/routes";
import {
  DribbbleIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  TwitterIcon,
} from "../assets/icons";

import { Leading, Body2, Body3 } from "../components/texts";

const Container = styled.div`
  ${tw`
  px-6
  py-4
  w-full
  `};
  background: #0d1829;

  @media (min-width: 1368px) {
    padding: 5rem 15rem 2.5rem 15rem;
  }
`;

const InnerContainer = styled.div`
  ${tw`
    w-full
    flex
    gap-8
    justify-between`}
`;

const LeftContainer = styled.div`
  ${tw`
    flex
    gap-3
    flex-wrap
  `}

  @media (min-width: 768px) {
    ${tw`
    flex
    flex-col
    gap-0
  `}
  }
`;

const RightContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-4
`};

  @media (min-width: 768px) {
    ${tw`
      flex
      flex-row
      gap-16
    `};
  }
`;

const LinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-6
  `}

  @media (min-width: 768px) {
    ${tw`
       gap-4
    `}
  }
`;

const Link = styled(Body2)`
  ${tw`
    hover:cursor-pointer
    whitespace-nowrap
`};
  color: #f0f5f9;

  @media (min-width: 768px) {
    &:last-child {
      ${tw`
        mt-28
    `}
    }
  }
`;

function FooterContainer() {
  const navigate = useNavigate();

  const links = [
    {
      id: 1,
      link: "All Icons",
      onClick: () => {
        navigate(routes.HOME);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 2,
      link: "How to Use",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 3,
      link: "Sponsor",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 4,
      link: "Terms of Use",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 5,
      link: "Github",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 6,
      link: "Figma Plugin",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 7,
      link: "SVG Pack",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
    {
      id: 8,
      link: "Privacy Policy",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        window.scrollTo({ top: 500, behavior: "smooth" });
      },
    },
  ];

  return (
    <Container>
      <LogoIcon />

      <InnerContainer>
        <LeftContainer>
          <div>
            <Leading color="#fff">meistericons</Leading>
            <Body3 color="#E1E8F0">by MEISTERNATOR</Body3>
          </div>

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
            {links.slice(0, 4).map((item) => (
              <Link key={item.id} onClick={item.onClick}>
                {item.link}
              </Link>
            ))}
          </LinksContainer>

          <LinksContainer>
            {links.slice(4).map((item) => (
              <Link key={item.id} onClick={item.onClick}>
                {item.link}
              </Link>
            ))}
          </LinksContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}

export default FooterContainer;
