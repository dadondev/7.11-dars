import styled from "styled-components";
import Container from "../../general/components/Container";
import MenuBtn from "./components/MenuBtn";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  padding-top: 30px;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledContainer = styled(Container)`
  /* min-width: 100%; */
  padding-inline: 32px;
`;
const MenuList = styled.ul`
  z-index: 10;
  padding-block: 40px;
  padding-inline: 25px;
  width: 100%;
  text-align: center;
  display: grid;
  grid-row-gap: 24px;
  max-width: 223px;
  max-height: 186px;
  background-color: ${(props) => props.theme.colors.grayishBlue};
  position: absolute;
  top: 70px;
  right: 0;

  & > li {
    font-family: "Public Sans";
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  & > li > a {
    color: #fff;
  }
`;

const StyledMenu = styled.ul`
  display: none;
  align-items: center;
  gap: 42px;
  &:has(a) {
    font-family: "Public Sans";
    font-size: 12px;
    color: ${(props) => props.theme.colors.grayishBlue};
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (width>=768px) {
    display: flex;
  }
`;

const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <StyledContainer>
      <StyledHeader>
        <img src="/logo.svg" alt="logo" />
        <MenuBtn
          onClick={() => {
            setHidden(!hidden);
          }}
          props={hidden}
        />
        {!hidden && (
          <MenuList>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Portfolio</Link>
            </li>
            <li>
              <Link>Portfolio</Link>
            </li>
          </MenuList>
        )}
        <StyledMenu>
          <NavLink>Home</NavLink>

          <Link>Portfolio</Link>

          <Link>Portfolio</Link>
        </StyledMenu>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
