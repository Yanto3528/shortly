import styled from "styled-components";

export const UrlCardContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UrlActionContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    font-size: 1.4rem;
    padding: 10px 25px;
  }
  label {
    position: relative;
  }
`;

export const OriginalLink = styled.p`
  font-weight: 700;
`;

export const ConvertedLink = styled.input`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 1.8rem;
  text-align: right;
  margin-right: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;
