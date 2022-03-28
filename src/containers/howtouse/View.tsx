import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { PluginIllustration } from "assets/illustrations";
import { Body1, Body3, Title } from "components/texts";

const Container = styled.div`
  ${tw`
  
  `}
`;

const ViewTitle = styled(Title)`
  color: #304254;
  text-transform: lowercase;
`;

const Info = styled(Body1)`
  color: #1c2a3a;
  line-height: 32px;
  font-weight: 400;
`;

const SS = styled.img`
  ${tw`
    mt-3
    mb-11
`}
`;

const StepTitle = styled(Body3)`
  color: #1c2a3a;
  line-height: 20px;
  letter-spacing: 0.15em;
`;

const Step = styled(Body1)`
  color: #1c2a3a;
  font-weight: 400;
  line-height: 32px;
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-6
    mb-32
  `}
`;

type IViewContainerProps = { activeLink: string };
function ViewContainer({ activeLink }: IViewContainerProps) {
  const viewTitle = activeLink.split(" ").join("-");

  const steps = [
    {
      id: 1,
      step: (
        <Step>
          <b> Right Click on Figma </b> and head over to <b>Plugins.</b>
        </Step>
      ),
    },

    {
      id: 2,
      step: (
        <Step>
          Select
          <b> “Browse plugins in Community”. </b>
        </Step>
      ),
    },
    {
      id: 3,
      step: (
        <Step>
          Search for
          <b> “MeisterIcons”.</b>
        </Step>
      ),
    },
    {
      id: 4,
      step: (
        <Step>
          Click
          <b>“Install”.</b>
        </Step>
      ),
    },
    {
      id: 5,
      step: (
        <Step>
          Then, go to your Figma File and
          <b> Right Click &gt; Plugins &gt; MeisterIcons</b>
        </Step>
      ),
    },
  ];

  return (
    <Container>
      <ViewTitle>/ {viewTitle}</ViewTitle>
      <Info>MeisterIcons is available on Figma as a Plugin.</Info>
      <Info>
        The plugin lets you quickly search for the icons you’re looking for.
      </Info>

      <SS src={PluginIllustration} alt="figma" />
      <StepsContainer>
        {steps.map((item) => (
          <div key={item.id}>
            <StepTitle>STEP {item.id}</StepTitle>
            {item.step}
          </div>
        ))}
      </StepsContainer>
    </Container>
  );
}

export default ViewContainer;
