import styled from "styled-components";

type ITextProps = {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  color?: string;
};

export const LargeText = styled.h1<ITextProps>`
  font-family: Gellix;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 100px;
  text-align: center;
  color: ${(p) => (p.color ? p.color : "#1c2a3a")};

  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}px;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body1 = styled.p<ITextProps>`
  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #304254;

  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}px;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body2 = styled.p<ITextProps>`
  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #1c2a3a;
  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}px;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;

export const Body3 = styled.p<ITextProps>`
  font-family: Gellix;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #445668;

  margin-top: ${(p) => (p.marginTop ? p.marginTop : 0)}px;
  margin-left: ${(p) => (p.marginLeft ? p.marginLeft : 0)}px;
  margin-right: ${(p) => (p.marginRight ? p.marginRight : 0)}px;
  margin-bottom: ${(p) => (p.marginBottom ? p.marginBottom : 0)}px;
`;
