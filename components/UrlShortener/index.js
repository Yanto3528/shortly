import UrlList from "../UrlList";

import { UrlShortenerContainer, FormContainer } from "./styles";
import Button from "../../styles/shared/Button";
import Input from "../../styles/shared/Input";

const UrlShortener = () => {
  return (
    <UrlShortenerContainer>
      <FormContainer>
        <form>
          <div>
            <Input type="text" placeholder="Shorten a link here..." error />
            <p>Please add a link</p>
          </div>
          <Button>Shorten It!</Button>
        </form>
      </FormContainer>
      <UrlList />
    </UrlShortenerContainer>
  );
};

export default UrlShortener;
