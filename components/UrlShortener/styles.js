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
  label {
    margin: 0 auto;
    display: flex;
    align-items: center;
    div {
      position: relative;
      margin-right: 20px;
      height: auto;
      flex: 1;
    }
    p {
      color: ${({ theme }) => theme.danger};
      font-style: italic;
      position: absolute;
      bottom: -30px;
      left: 0;
    }
    button {
      font-size: 1.6rem;
      padding: 20px 40px;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 30px;
    background-image: url("/images/bg-shorten-mobile.svg");
    label {
      flex-direction: column;
      div {
        width: 100%;
        margin-bottom: 50px;
        margin-right: 0;
      }
      button {
        width: 100%;
        font-size: 1.8rem;
      }
    }
  }
`;
