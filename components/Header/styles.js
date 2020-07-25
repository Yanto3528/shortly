import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const mobileMenuStyles = css`
  flex-direction: column;
  width: 90%;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderContainer = styled.header`
  padding: 40px 0;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.grey2};
    transition: all 0.4s;
    &:hover {
      color: ${({ theme }) => theme.darkgrey};
    }
  }
  @media only screen and (max-width: 740px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 30px;
`;

export const NavMenuContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 740px) {
    ${({ showMenu }) => showMenu && mobileMenuStyles}
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    margin-bottom: 30px;
  }
`;
export const NavMenuItem = styled.li`
  padding: 0 20px;
  @media only screen and (max-width: 740px) {
    margin-bottom: 30px;
    a {
      color: white;
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const NavAction = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 20px;
  }
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    width: 100%;
    button {
      margin-left: 0;
      margin-top: 30px;
      width: 100%;
    }
    a {
      color: white;
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;
