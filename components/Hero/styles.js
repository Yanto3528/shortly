import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  div {
    margin-right: 40px;
    flex-basis: 50%;
  }
  h1 {
    font-size: 6rem;
    line-height: 1.2;
  }
  p {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.grey2};
  }
  img {
    width: 50%;
  }
  @media only screen and (max-width: 1025px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media only screen and (max-width: 740px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-bottom: 200px;
    div {
      margin-right: 0;
    }
    img {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;
