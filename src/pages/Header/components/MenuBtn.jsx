import styled from "styled-components";

const Menu = styled.button`
  border: none;
  background-color: transparent;
  transition: all 300ms;
  @media (width>=768px) {
    display: none;
  }
`;
const MenuBtn = ({ onClick, props }) => {
  return (
    <Menu onClick={onClick}>
      {props ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="13"
          viewBox="0 0 24 13"
          fill="none"
        >
          <rect width="24" height="1" fill="#33323D" />
          <rect y="6" width="24" height="1" fill="#33323D" />
          <rect y="12" width="24" height="1" fill="#33323D" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00003 8.79286L0.868301 0.661133L0.161194 1.36824L8.29292 9.49997L0.161194 17.6317L0.868301 18.3388L9.00003 10.2071L17.1318 18.3388L17.8389 17.6317L9.70714 9.49997L17.8389 1.36824L17.1318 0.661133L9.00003 8.79286Z"
            fill="#33323D"
          />
        </svg>
      )}
    </Menu>
  );
};

export default MenuBtn;
