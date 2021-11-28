import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

type IFlexProps = { children: JSX.Element | JSX.Element[] };
function Flex(props: IFlexProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default Flex;
