import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useMedia from "use-media";
import HamburgerMenu from "../HamburgerMenu";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavMenuContainer,
  NavMenu,
  NavMenuItem,
  NavAction,
} from "./styles";
import Container from "../../styles/shared/Container";
import Button from "../../styles/shared/Button";

const menuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobileScreen = useMedia({ maxWidth: "740px" });

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  const menu = (
    <NavMenuContainer
      showMenu={showMenu}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NavMenu>
        <NavMenuItem>
          <a href="#">Features</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Pricing</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Resources</a>
        </NavMenuItem>
      </NavMenu>
      <NavAction>
        <a href="#">Log in</a>
        <Button pill>Sign up</Button>
      </NavAction>
    </NavMenuContainer>
  );

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Logo src="/images/logo.svg" alt="shortly_logo" />
          {!isMobileScreen && menu}
          <AnimatePresence>
            {isMobileScreen && showMenu && menu}
          </AnimatePresence>
          <HamburgerMenu active={showMenu} onClick={toggleMenu} />
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
