import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.grayishBlue};
  font-family: "Ibarra Real Nova";
  font-size: 40px;
  line-height: 42px; /* 105% */
  letter-spacing: -0.357px;
`;

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
