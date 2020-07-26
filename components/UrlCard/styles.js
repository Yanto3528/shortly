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
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
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
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    label {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;

export const OriginalLink = styled.p`
  font-weight: 700;
  word-wrap: break-word;
  @media only screen and (max-width: 800px) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
    width: 100%;
  }
`;

export const ConvertedLink = styled.input`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  margin-right: 20px;
  outline: none;
  border: none;
  cursor: copy;
  @media only screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
  }
`;
