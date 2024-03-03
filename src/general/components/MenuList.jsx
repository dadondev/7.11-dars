import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledMenu = styled.ul`
  display: none;
  align-items: center;
  gap: 42px;
  & > a {
    font-family: "Public Sans";
    font-size: 12px;
    color: ${(props) => {
      if (props.$variant == "dark") {
        return css`
          ${props.theme.colors.grayishBlue};
        `;
      } else {
        return css`
           white
        `;
      }
    }}!important;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (width>=768px) {
    display: flex;
  }
`;

const MenuLinks = ({ variant, className }) => {
  return (
    <StyledMenu className={className} $variant={variant}>
      <Link to={""}>Home</Link>

      <Link to={"/portfolio"}>Portfolio</Link>

      <Link to={"/contact"}>CONTACT ME</Link>
    </StyledMenu>
  );
};

export default MenuLinks;
