import UrlShortener from "../UrlShortener";

import MainContentContainer from "./styles";
import Container from "../../styles/shared/Container";

const MainContent = () => {
  return (
    <MainContentContainer>
      <Container>
        <UrlShortener />
      </Container>
    </MainContentContainer>
  );
};

export default MainContent;
