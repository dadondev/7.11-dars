import styled from "styled-components";
import Title from "../../../general/components/Title";
import BorderButton from "../../../general/components/BorderButton";

const StyledContainer = styled.div`
  padding-inline: 32px;
  & > img {
    width: 100%;
  }

  @media (width>=768px) {
    padding-inline: 0;
    display: flex;
    gap: 50px;
    margin-bottom: 96px;
    & > img {
      object-fit: cover;
    }
  }
  @media (width >= 1024px) {
    justify-content: space-between;
    gap: 0;
    & > img {
      max-width: 540px;
    }
    margin-bottom: 150px;
  }
`;
const StyledText = styled.div`
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  padding-block: 32px;
  margin-top: 32px;

  @media (width>=768px) {
    margin: 0;
    padding-block: 50px 46px;
  }
  @media (width >= 1024px) {
    max-width: 350px;
  }
`;
const Paragraph = styled.p`
  margin-top: 28px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.grayishBlue};
  font-family: "Public Sans";
  line-height: 30px; /* 187.5% */
`;

const About = () => {
  return (
    <StyledContainer>
      <img src="./hum.png" alt="human" />
      <StyledText>
        <Title>About Me</Title>
        <Paragraph>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </Paragraph>
        <BorderButton>GO TO PORTFOLIO</BorderButton>
      </StyledText>
    </StyledContainer>
  );
};

export default About;
