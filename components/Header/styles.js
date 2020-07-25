import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.grey2};
    transition: all 0.4s;
    &:hover {
      color: ${({ theme }) => theme.darkgrey};
    }
  }
`;
export const Logo = styled.img`
  width: 100px;
  margin-right: 30px;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavMenuItem = styled.li`
  padding: 0 20px;
`;

export const NavAction = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 20px;
  }
`;
