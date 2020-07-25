import {
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
  NavMenuItem,
  NavAction,
} from "./styles";
import Container from "../../styles/shared/Container";
import Button from "../../styles/shared/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <NavMenu>
            <Logo src="/images/logo.svg" alt="shortly_logo" />
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
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
