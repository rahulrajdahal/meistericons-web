import React from "react";
import styled from "styled-components";
import {
  Css3Illustration,
  FigmaIllustration,
  GithubIllustration,
  NpmIllustration,
  SvgIllustration,
} from "../../assets/illustrations";
import { Body1, LargeText } from "../../components/texts";

const NewIconsContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(13, 24, 41, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  width: 189px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  width: 60%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IllustrationsContainer = styled.div`
  display: inline-flex;
  gap: 3.125rem;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  filter: grayscale(100%);

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1080px) {
    width: 30%;
  }
`;

function HeroContainer() {
  const illustrations = [
    {
      id: 1,
      illustration: FigmaIllustration,
      to: "https://www.figma.com/community/plugin/1065974489689844727/MeisterIcons",
    },
    {
      id: 2,
      illustration: SvgIllustration,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
    {
      id: 3,
      illustration: Css3Illustration,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
    {
      id: 4,
      illustration: NpmIllustration,
      to: "https://www.npmjs.com/package/meistericons",
    },
    {
      id: 5,
      illustration: GithubIllustration,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
  ];

  return (
    <Container>
      <NewIconsContainer>
        <Body1>🎁 +500 icons added</Body1>
      </NewIconsContainer>

      <LargeText marginTop={32} marginBottom={47}>
        Over{" "}
        <Body1
          style={{
            display: "initial",
            fontWeight: "900",
            color: "#3e64ff",
            fontSize: 80,
          }}
        >
          2000+
        </Body1>{" "}
        Open-Source Icons for your next BIG project
      </LargeText>

      <IllustrationsContainer>
        {illustrations.map((item) => (
          <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
            <img src={item.illustration} alt={item.illustration} />
          </a>
        ))}
      </IllustrationsContainer>
    </Container>
  );
}

export default HeroContainer;
