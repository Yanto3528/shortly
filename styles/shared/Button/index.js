import styled, { css } from "styled-components";

export default styled.button`
  outline: none;
  border: none;
  padding: 15px 25px;
  border-radius: ${({ pill }) => (pill ? "50px" : "5px")};
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;
