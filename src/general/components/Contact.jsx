import React from "react";
import styled from "styled-components";
import Title from "./Title";
import BorderButton from "./BorderButton";

const StyledContainer = styled.div`
  padding: 0 32px;
  padding-top: 115px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 80px;
  align-items: center;

  @media (width >= 768px) {
    margin-bottom: 96px;
    padding: 0;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    & > h1 {
      max-width: 350px;
    }
  }
  @media (width >= 1024px) {
    margin-bottom: 150px;
  }
`;

const Contact = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <Title>Interested in doing a project together?</Title>
      <BorderButton to={"/contact"}>Contact Me</BorderButton>
    </StyledContainer>
  );
};

export default Contact;
