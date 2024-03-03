import React from "react";
import styled from "styled-components";
import Button from "../../../general/components/Button";
import Title from "../../../general/components/Title";

const StyledStarter = styled.div`
  position: relative;
  padding-top: 20px;
  padding-inline: 32px;
  max-height: 600px;
  & > img {
    width: 100%;
  }
  width: 100%;
  margin-bottom: 56px;
  @media (width>=768px) {
    padding-inline: 0;
    & > img {
      width: auto;
      max-height: 600px;
    }
  }

  @media (width>=1024px) {
    padding-inline: 0;
    margin-bottom: 153px;
  }
`;
const StyledText = styled.div`
  width: 100%;
  padding-top: 24px;

  @media (width>=768px) {
    position: absolute;
    padding-top: 56px;
    padding-right: 56px;
    background-color: ${(props) => props.theme.colors.greyBG};
    bottom: 0;
    max-width: 514px;
  }
  @media (width>=1024px) {
    max-width: 445px;
    bottom: -21px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
`;

const Hero = () => {
  return (
    <StyledStarter>
      <img src="startmy.png" alt="starter" />
      <StyledText>
        <Title>
          Hey, I’m Alex Spencer and I love building beautiful websites
        </Title>
        <StyledButton icon={"/icon-green.svg"} variant={"dark"}>
          ABOUT ME
        </StyledButton>
      </StyledText>
    </StyledStarter>
  );
};

export default Hero;
