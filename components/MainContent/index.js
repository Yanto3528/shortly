import UrlShortener from "../UrlShortener";
import Statistics from "../Statistics";

import MainContentContainer from "./styles";
import Container from "../../styles/shared/Container";

const MainContent = () => {
  return (
    <MainContentContainer>
      <Container>
        <UrlShortener />
        <Statistics />
      </Container>
    </MainContentContainer>
  );
};

export default MainContent;
