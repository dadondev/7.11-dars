import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  text-align: center;
  max-width: 200px;
  width: 100%;
  border: none;
  color: white;
  & > span {
    flex-grow: 1;
  }

  ${(props) => {
    switch (props.$variant) {
      case "dark":
        return css`
          background-color: ${(props) => props.theme.colors.darkBlue};
        `;
      default:
        break;
    }
  }}
`;

const Button = ({ children, icon, variant }) => {
  return (
    <StyledButton $variant={variant}>
      <img src={icon} alt="icon" />
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
