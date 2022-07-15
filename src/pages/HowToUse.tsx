import { Body2, Body3, Title } from "components/texts";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    mx-60
    mt-11
    grid
    grid-cols-3
    w-full
  `}
`;

const Sidebar = styled.div`
  ${tw`
  
  `}
`;
const View = styled.div`
  ${tw`
    w-1/2
  `}
`;
const PageLinks = styled.div`
  ${tw`
    w-1/4
  `}
`;

const LinksContainer = styled.ul`
  ${tw`
  flex
  flex-col
  gap-2
`}
`;

function HowToUsePage() {
  return (
    <Container>
      <Sidebar>
        <Title marginBottom={32}>How to Use</Title>
        <LinksContainer style={{ marginBottom: 32 }}>
          <Body3 marginBottom={4}>FOR DESIGNERS</Body3>
          <Body2>Figma</Body2>
          <Body2>Adobe XD / Sketch</Body2>
          <Body2>Adobe Illustrator</Body2>
        </LinksContainer>
        <LinksContainer>
          <Body3 marginBottom={4}>FOR DEVELOPERS</Body3>
          <Body2>Github</Body2>
          <Body2>npm</Body2>
          <Body2>React</Body2>
          <Body2>Android</Body2>
          <Body2>iOS</Body2>
        </LinksContainer>
      </Sidebar>
      <View>HowToUsePage</View>
      <PageLinks>Otherlinks</PageLinks>
    </Container>
  );
}

export default HowToUsePage;
