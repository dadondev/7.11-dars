import styled from "styled-components";
import MenuLinks from "./MenuList";
import Container from "./Container";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.grayishBlue};
  padding-block: 56px;
  @media (width>= 768px) {
    padding-block: 24px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 32px;
  @media (width >=768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledMenu = styled(MenuLinks)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 !important;

  & > a {
    color: white;
  }
  @media (width >=768px) {
    align-items: center;
    flex-direction: row;
    margin-top: 0;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (width >=768px) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  align-items: center;
  gap: 10px;
  &:has(img) {
    width: 25px;
  }
  @media (width >=768px) {
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 15px;
    &:has(img) {
      width: auto;
    }
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <Content>
          <img src="/footer.svg" />
          <StyledMenu variant={"light"} />
        </Content>
        <Icons>
          <img src="/git.svg" alt="git" />
          <img src="/twi.svg" alt="git" />
          <img src="/link.svg" alt="git" />
        </Icons>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Footer;
