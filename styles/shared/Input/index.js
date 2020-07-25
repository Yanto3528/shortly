import styled, { css } from "styled-components";

export default styled.input`
  outline: none;
  border: none;
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.6rem;
  ${({ error }) =>
    error &&
    css`
      border: 3px solid ${({ theme }) => theme.danger};
      &::placeholder {
        color: ${({ theme }) => theme.danger};
      }
    `}
`;
