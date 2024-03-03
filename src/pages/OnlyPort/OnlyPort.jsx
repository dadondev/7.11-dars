import styled from "styled-components";
import Container from "../../general/components/Container";
import Title from "../../general/components/Title";
import BorderButton from "../../general/components/BorderButton";

const StyledContainer = styled(Container)`
  padding-inline: 32px;
  padding-top: 40px;
  & > img {
    width: 100%;
    margin-bottom: 40px;
  }
  @media (width>=768px) {
    padding-inline: 0;
  }
`;

const StyledAbout = styled.div`
  padding-block: 24px;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
`;

const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
  font-family: "Public Sans";
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 30px; /* 200% */
`;

const Technologies = styled.p`
  color: ${(props) => props.theme.colors.cyan};
  font-family: "Public Sans";
  font-size: 13px;
  font-weight: 700;
  line-height: 30px; /* 230.769% */
`;
const StyledBtn = styled(BorderButton)`
  display: inline-block;
  margin-top: 24px;
`;

const StyledBio = styled.div`
  padding-block: 40px;
`;

const SubTitle = styled(Title)`
  font-family: "Ibarra Real Nova";
  font-size: 32px;
  font-weight: 400;
  line-height: 42px; /* 131.25% */
  letter-spacing: -0.286px;
  margin-bottom: 28px;
`;

const SubParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;
const StyledImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  margin-bottom: 65px;
`;

const StyledSwitchers = styled.div``;

const StyledSwitcher = styled.div``;

const OnlyPort = () => {
  return (
    <StyledContainer>
      <img src="/o-1.jpg" alt="img" />
      <StyledAbout>
        <StyledTitle>Manage</StyledTitle>
        <Paragraph>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </Paragraph>
        <Technologies>Interaction Design / Front End Development</Technologies>
        <Technologies>HTML / CSS / JS</Technologies>
        <StyledBtn to={"#"}>VISIT WEBSITE</StyledBtn>
      </StyledAbout>
      <StyledBio>
        <SubTitle>Project Background</SubTitle>
        <SubParagraph>
          This project was a front-end challenge from Frontend Mentor. It’s a
          platform that enables you to practice building websites to a design
          and project brief. Each challenge includes mobile and desktop designs
          to show how the website should look at different screen sizes.
          Creating these projects has helped me refine my workflow and solve
          real-world coding problems. I’ve learned something new with each
          project, helping me to improve and adapt my style.
        </SubParagraph>
        <SubTitle>Static Previews</SubTitle>

        <StyledImages>
          <img src="/desk-1-1.jpg" alt="img" />
          <img src="/desk-1-2.jpg" alt="img" />
        </StyledImages>

        <StyledSwitchers>
          <StyledSwitcher>
            
          </StyledSwitcher>
        </StyledSwitchers>
      </StyledBio>
    </StyledContainer>
  );
};

export default OnlyPort;
