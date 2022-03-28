import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { LogoIcon } from "../../assets/icons";
import { Body1, Body3 } from "../texts";
import Button from "../buttons/button";
import SearchIcon from "meistericons/react/esm/SearchIcon";

import { GithubIcon } from "../../assets/icons";
import { routes } from "utils/routes";
import { EllipsisVIcon, HexCross1Icon } from "meistericons";
import tw from "twin.macro";
import Flex from "components/flex";

const Container = styled.nav`
  position: sticky;
  top: 0;
  height: 6.25rem;
  background: #fff;
  z-index: 1;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1368px) {
    padding: 0 10rem;
  }

  @media (min-width: 1440px) {
    padding: 0 15.1875rem;
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

const MenuIcon = styled(EllipsisVIcon)`
  ${tw`
    hover:cursor-pointer
  `};
  @media (min-width: 1100px) {
    display: none;
  }
`;

const OpenMenuContainer = styled.div`
  ${tw`
    fixed
    top-0
    bottom-0
    left-0
    right-0
    flex
    items-center
    flex-col
  `};
  background: #fff;
`;

const OpenMenuHeader = styled.div`
  ${tw`
    flex
    mt-6
    items-center
    justify-between
    w-full
    px-8
  `}
`;

const OpenMenuLinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    gap-6
    mt-8
    hover:cursor-pointer
  `};
  font-family: Gellix;
`;

type INavbarProps = { version: string };
function Navbar({ version }: INavbarProps) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links = [
    {
      id: 1,
      link: "Icons",
      onClick: () => {
        navigate(routes.HOME);
        setMenuOpen(false);
      },
    },
    {
      id: 2,
      link: "How to Use?",
      onClick: () => {
        navigate(routes.HOWTOUSE);
        setMenuOpen(false);
      },
    },
    {
      id: 3,
      link: "Sponsor",
      onClick: () => {
        navigate(routes.HOME);
        setMenuOpen(false);
      },
    },
  ];

  return (
    <Container>
      <InlineContainer onClick={() => navigate(routes.HOME)}>
        <LogoIcon />
        <div style={{ marginLeft: 8 }}>
          <Body1>MeisterIcons</Body1>
          <Body3>{version}</Body3>
        </div>
      </InlineContainer>

      <MenuIcon onClick={() => setMenuOpen((prev: boolean) => !prev)} />
      {menuOpen && (
        <OpenMenuContainer>
          <OpenMenuHeader>
            <InlineContainer onClick={() => navigate(routes.HOME)}>
              <LogoIcon />
              <div style={{ marginLeft: 8 }}>
                <Body1>MeisterIcons</Body1>
                <Body3>{version}</Body3>
              </div>
            </InlineContainer>

            <HexCross1Icon
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(false)}
            />
          </OpenMenuHeader>

          <OpenMenuLinksContainer>
            {links.map((item) => (
              <p key={item.id} onClick={item.onClick}>
                {item.link}
              </p>
            ))}
            <a
              href="https://github.com/rahulrajdahal/meistericons"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button text="Start Here" icon={<GithubIcon />} />
            </a>
          </OpenMenuLinksContainer>
        </OpenMenuContainer>
      )}

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
        >
          <Button text="Start Here" icon={<GithubIcon />} />
        </a>
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
