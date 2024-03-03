import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 202px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.grayishBlue};
  background-color: transparent;
  color: ${(props) => props.theme.colors.grayishBlue};
  font-family: "Public Sans";
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const BorderButton = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      <Button>{children}</Button>
    </Link>
  );
};

export default BorderButton;
