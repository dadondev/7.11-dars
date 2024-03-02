import React from "react";
import Container from "../../general/components/Container";
import styled from "styled-components";
import Title from "../../general/components/Title";
import Button from "../../general/components/Button";
const StyledContainer = styled(Container)``;
const StyledStarter = styled.div`
  padding-top: 20px;
  padding-inline: 32px;
  & > img {
    width: 100%;
  }
  width: 100%;
`;
const StyledText = styled.div`
  width: 100%;
  padding-top: 24px;
`;

const Home = () => {
  return (
    <StyledContainer>
      <StyledStarter>
        <img src="/start.png" alt="starter" />
        <StyledText>
          <Title>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </Title>
          <Button icon={"/icon-green.svg"} variant={"dark"}>
            ABOUT ME
          </Button>
        </StyledText>
      </StyledStarter>
    </StyledContainer>
  );
};

export default Home;
