import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  text-align: center;
  max-width: 200px;
  width: 100%;
  border: none;

  font-family: "Public Sans";
  color: #fff;
  text-align: center;
  font-family: "Public Sans";
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  & > span {
    flex-grow: 1;
  }

  ${(props) => {
    switch (props.$variant) {
      case "dark":
        return css`
          background-color: ${(props) => props.theme.colors.darkBlue};
          color: white;
        `;
      case "light":
        return css`
          background-color: ${(props) => props.theme.colors.grey};
          color: black;
        `;
      case "green":
        return css`
          background-color: ${(props) => props.theme.colors.cyan};
          color: white;
        `;
      default:
        break;
    }
  }}
`;

const Button = ({ children, icon, variant, className }) => {
  return (
    <StyledButton className={className} $variant={variant}>
      <img src={icon} alt="icon" />
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
