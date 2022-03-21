import createReactComponent from "helpers/createReactComponent";
import { CopyAIcon } from "meistericons";
import React, { createElement, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import styled from "styled-components";
import tw from "twin.macro";
import { saveSvgAsPng } from "save-svg-as-png";

import Modal from "../../modal";
import Button from "../button";

const Container = styled.div`
  border: none;
  outline: none;
  background: transparent;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 12px;

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`;

const Tooltip = styled.span`
  background-color: black;
  color: #fff;

  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  white-space: nowrap;
  position: absolute;
  bottom: 125%;

  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5%;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const ExpandedContainer = styled.div`
  ${tw`
  fixed
  bottom-24
  left-64
  w-3/4    
  flex
  items-center
  justify-center
  gap-16
`};

  z-index: 3;
  height: 336px;
  background: #f0f5f9;

  border-radius: 20px;
`;

const IconContainer = styled.div`
  ${tw`flex items-center justify-center`};

  width: 240px;
  height: 240px;
  background: #ffffff;
  border-radius: 48px;
`;

const DownloadButton = styled(Button)`
  ${tw`
    px-6
    py-3
    whitespace-nowrap
  `}
`;

const DownloadButtonContainer = styled.div`
  ${tw`flex gap-3`}
`;

const IconName = styled.p`
  font-family: PlusJakartaSans;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #1c2a3a;
  ${tw`
  mb-5
  `}
`;

const CssCodeContainer = styled.div`
  ${tw`
    mt-5
    h-16
    rounded-xl
    flex
    items-center
    justify-between
    p-5
    w-full
  `};

  background: #0d1829;

  background: #0d1829;
  border-radius: 12px;
`;

const CssCode = styled.p`
  font-family: JetBrainsMono;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #f8fafc;
  ${tw`w-full `};
`;

const CopyIcon = styled(CopyAIcon)`
  color: #91a4b7;

  &:hover {
    color: #fff;
  }
`;

type IconButtonProps = {
  name: string;
  component: React.FC;
  onClick?(): any;
  // showModal: boolean;
  // setShowModal: any;
};

function IconButton({
  name,
  component: IconComponent,
  onClick,
}: // showModal,
// setShowModal,
IconButtonProps) {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  // const handleOnClick = () => {
  //   const svg = renderToString(<IconComponent key={name} />);

  //   navigator.clipboard.writeText(svg);
  // };

  // const handleonClick = () => setShowModal((prev: boolean) => !prev);

  const [expandIcon, setExpandIcon] = useState<boolean>(false);

  const handleScroll = () => {
    setTimeout(() => setExpandIcon(false), 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCssCode = () => {
    navigator.clipboard.writeText(`<i class="min mni-${name}"></i>`);
  };
  const iconRef = useRef<any>(null);
  const handleCopySvg = () => {
    const svg: string = iconRef.current.childNodes[1].outerHTML;
    navigator.clipboard.writeText(svg);
  };

  const handleDownloadsvg = () => {
    const svg = iconRef.current.childNodes[1].outerHTML;

    const blob = new Blob([svg], { type: "image/svg+xml" });

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${name}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  };

  const handleDownloadpng = () => {
    const svg = iconRef.current.childNodes[1];
    saveSvgAsPng(svg, `${name}.png`);
  };

  return (
    <>
      <Container
        key={name}
        aria-label={name}
        onClick={() => setExpandIcon(true)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        ref={iconRef}
      >
        {showTooltip && <Tooltip>{name}</Tooltip>}

        <IconComponent key={name} />

        {/* <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            background: "red",
          }}
        > */}
        {expandIcon && (
          <>
            <ExpandedContainer>
              <IconContainer>
                <IconComponent key={name} />
              </IconContainer>
              <div>
                <IconName>{name}</IconName>
                <DownloadButtonContainer>
                  <DownloadButton
                    text="Download SVG"
                    bg="#3E64FF"
                    onClick={handleDownloadsvg}
                  />
                  <DownloadButton
                    text="Download PNG"
                    bg="#CAD5E0"
                    color="#304254"
                    onClick={handleDownloadpng}
                  />
                  <DownloadButton
                    text="Copy SVG"
                    bg="#CAD5E0"
                    color="#304254"
                    onClick={handleCopySvg}
                  />
                </DownloadButtonContainer>

                <CssCodeContainer>
                  <div
                    style={{
                      display: "inline-flex",
                      gap: 8,
                      flexWrap: "nowrap",
                      alignItems: "center",
                    }}
                  >
                    <CssCode>&lt;i</CssCode>
                    <CssCode style={{ color: "#8ba2ff" }}>class</CssCode>
                    <CssCode style={{ marginLeft: "-8px" }}> ="</CssCode>
                    <CssCode style={{ color: "#ffa83f", marginLeft: "-8px" }}>
                      mni{" "}
                    </CssCode>
                    <CssCode style={{ color: "#77b876", whiteSpace: "nowrap" }}>
                      mni-{name}"
                    </CssCode>
                    <CssCode>/&gt;</CssCode>
                  </div>

                  <CopyIcon onClick={getCssCode} />
                </CssCodeContainer>
              </div>
            </ExpandedContainer>
          </>
        )}
        {/* </div> */}
      </Container>
    </>
  );
}

export default IconButton;
