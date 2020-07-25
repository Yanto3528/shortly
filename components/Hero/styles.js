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
`;
