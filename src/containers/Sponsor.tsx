import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SponsorIllustration } from "../assets/illustrations";
import Button from "../components/buttons/button";
import Flex from "../components/flex";
import { Body1, Title } from "../components/texts";

const Container = styled.div`
  ${tw`w-full flex flex-col gap-5 py-4 items-center justify-center relative`};

  @media (min-width: 768px) {
    ${tw` flex-row`}
    background: rgba(235, 88, 111, 0.1);
    height: 22.75rem;

    margin-top: 8.75rem;
    gap: 7.5rem;
  }
`;

const SponsorImage = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 768px) {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 28.875rem;
    width: initial;
    height: initial;
  }
`;

const LearnMore = styled(Button)`
  background: #eb586f;
`;

const SponsorInfoContainer = styled.div`
  ${tw`
  flex 
  flex-col
  items-center
`};

  @media (min-width: 768px) {
    ${tw`
    
      absolute
      right-60
  `}
  }
`;

function SponsorContainer() {
  return (
    <Container>
      <SponsorImage src={SponsorIllustration} alt="sponsor-us" />

      <SponsorInfoContainer>
        <Title>Sponsor our Project</Title>
        <Body1 style={{ width: "65%" }} marginTop={12} marginBottom={32}>
          You can become a sponsor to support the project and gain access to
          exclusive perks,
        </Body1>

        <LearnMore text="Learn More" />
      </SponsorInfoContainer>
    </Container>
  );
}

export default SponsorContainer;
