import React from "react";
import styled from "styled-components";
import {
  Css3Illustration,
  FigmaIllustration,
  NpmIllustration,
  SvgIllustration,
} from "../../assets/illustrations";
import Flex from "../../components/flex";
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
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

function HeroContainer() {
  const illustrations = [
    { id: 1, illustration: FigmaIllustration },
    { id: 2, illustration: SvgIllustration },
    { id: 3, illustration: Css3Illustration },
    { id: 4, illustration: NpmIllustration },
  ];

  return (
    <Container>
      <NewIconsContainer>
        <Body1>🎁 +60 icons added</Body1>
      </NewIconsContainer>

      <LargeText marginTop={32} marginBottom={47}>
        Over{" "}
        <LargeText
          color="#3e64ff"
          style={{ display: "initial", fontWeight: "900" }}
        >
          2000+
        </LargeText>{" "}
        Open-Source Icons for your next BIG project
      </LargeText>

      <IllustrationsContainer>
        {illustrations.map((item) => (
          <img key={item.id} src={item.illustration} alt={item.illustration} />
        ))}
      </IllustrationsContainer>
    </Container>
  );
}

export default HeroContainer;
