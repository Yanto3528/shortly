import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.darkgrey2};
  padding: 40px 0;
  color: white;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    > svg {
      margin-bottom: 50px;
    }
    ul {
      margin: 20px 0;
    }
  }
`;

export const FooterLinks = styled.li`
  h4 {
    margin-bottom: 30px;
    color: white;
  }
  a {
    margin-bottom: 20px;
    display: inline-block;
    color: ${({ theme }) => theme.grey};
    transition: all 0.4s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const SocialIconContainer = styled.div`
  transition: all 0.4s;
  a:not(:last-child) {
    margin-right: 20px;
  }
  a:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.primary};
      }
    }
  }
`;
