import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin-inline: auto;

  @media (width >=425px) {
    max-width: 100%;
  }

  @media (width >=1024px) {
    padding: 0 !important;
    width: 100%;
    max-width: 990px;
  }
  @media (width >1200px) {
    max-width: 1110px;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
