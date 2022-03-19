import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SponsorIllustration } from "../assets/illustrations";
import Button from "../components/buttons/button";
import Flex from "../components/flex";
import { Body1, Title } from "../components/texts";

const Container = styled.div`
  ${tw`w-full flex items-center justify-center relative`}
  background: rgba(235, 88, 111, 0.1);
  height: 22.75rem;

  margin-top: 8.75rem;
  gap: 7.5rem;
`;

const SponsorImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 28.875rem;
`;

const LearnMore = styled(Button)`
  background: #eb586f;
`;

function SponsorContainer() {
  return (
    <Container>
      <SponsorImage src={SponsorIllustration} alt="sponsor-us" />

      <div style={{ position: "absolute", right: "15rem" }}>
        <Title>Sponsor our Project</Title>
        <Body1 style={{ width: "65%" }} marginTop={12} marginBottom={32}>
          You can become a sponsor to support the project and gain access to
          exclusive perks,
        </Body1>

        <LearnMore text="Learn More" />
      </div>

      {/* // <p>FooterContainer</p> */}
    </Container>
  );
}

export default SponsorContainer;
