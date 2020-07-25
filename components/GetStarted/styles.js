import styled from "styled-components";

export const GetStartedContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  background-image: url(/images/bg-boost-desktop.svg);
  background-position: right;
  background-size: center;
  background-repeat: no-repeat;
  padding: 60px;
  text-align: center;
  color: white;
  h3 {
    margin-bottom: 20px;
    font-size: 3rem;
  }
`;
