import {
  UrlCardContainer,
  OriginalLink,
  ConvertedLink,
  UrlActionContainer,
} from "./styles";
import Button from "../../styles/shared/Button";

const UrlCard = () => {
  return (
    <UrlCardContainer>
      <OriginalLink>https://frontend.mentor.io</OriginalLink>
      <UrlActionContainer>
        <ConvertedLink>https://rel.link/adf44</ConvertedLink>
        <Button>Copy</Button>
      </UrlActionContainer>
    </UrlCardContainer>
  );
};

export default UrlCard;
