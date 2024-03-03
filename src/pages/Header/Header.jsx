import styled from "styled-components";
import Container from "../../general/components/Container";
import MenuBtn from "./components/MenuBtn";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuLinks from "../../general/components/MenuList";
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

  & > a {
    color: #fff;
    font-family: "Public Sans";
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
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
            <Link to={"/"}>Home</Link>

            <Link to={"/portfolio"}>Portfolio</Link>

            <Link to={"/contact"}>CONTACT ME</Link>
          </MenuList>
        )}
        <MenuLinks variant={"dark"} />
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
