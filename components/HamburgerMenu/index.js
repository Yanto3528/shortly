import HamburgerMenuContainer, { Hamburger } from "./styles";

const HamburgerMenu = ({ onClick, ...props }) => {
  return (
    <HamburgerMenuContainer onClick={onClick}>
      <Hamburger {...props} />
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
