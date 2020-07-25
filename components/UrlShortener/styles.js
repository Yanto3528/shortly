import styled from "styled-components";

export const UrlShortenerContainer = styled.div``;

export const FormContainer = styled.div`
  transform: translateY(-50%);
  padding: 50px;
  background-color: ${({ theme }) => theme.secondary};
  background-image: url("/images/bg-shorten-desktop.svg");
  background-position: center;
  background-size: cover;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  form {
    margin: 0 auto;
    display: flex;
    align-items: center;
    div {
      flex: 1;
      margin-right: 20px;
      position: relative;
      p {
        color: ${({ theme }) => theme.danger};
        font-style: italic;
        position: absolute;
        bottom: -30px;
        left: 0;
      }
    }
    button {
      font-size: 1.6rem;
      padding: 20px 30px;
    }
  }
`;
