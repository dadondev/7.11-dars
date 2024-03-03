import styled from "styled-components";
import Title from "../../../general/components/Title";
import BorderButton from "../../../general/components/BorderButton";

const StyledContainer = styled.div`
  max-width: 100%;
  @media (width>=768px) {
    display: flex;
    flex-direction: ${(props) => {
      if (props.$data.row) {
        return "row-reverse";
      } else {
        return "row";
      }
    }};
    align-items: start;
    gap: 69px;
    & > img {
      max-width: 339px;
      padding-top: 40px;
    }
  }
  @media (width>=1024px) {
    margin-top: 94px;
    align-items: center;
    margin-bottom: 80px;
    & > img {
      max-height: 500px;
      max-width: 540px;
    }
  }
`;
const Content = styled.div`
  margin-top: 32px;
  padding-block: 24px;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  @media (width>=768px) {
    margin: 0;
    padding-block: 36px 50px;
    /* margin-bottom: 80px; */
  }
  @media (width>=1024px) {
    padding-block: 103px;
  }
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
  font-family: "Public Sans";
  margin: 24px 0;
  font-size: 15px;
  line-height: 30px; /* 200% */
`;

const Project = ({ data, className, i }) => {
  console.log(data);
  return (
    <StyledContainer $data={data} className={className}>
      <img src={data.img} alt="" />
      <Content>
        <Title>Manage</Title>
        <Paragraph>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </Paragraph>
        <BorderButton to={`/portfolio/${i + 1}`}>VIEW PROJECT</BorderButton>
      </Content>
    </StyledContainer>
  );
};

export default Project;
