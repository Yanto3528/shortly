import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import UrlList from "../UrlList";

import { UrlShortenerContainer, FormContainer } from "./styles";
import Button from "../../styles/shared/Button";
import Input from "../../styles/shared/Input";

const UrlShortener = () => {
  const [urls, setUrls] = useState([]);
  const [urlError, setUrlError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://rel.ink/api/links/",
        data,
      });
      setUrls([...urls, res.data]);
    } catch (error) {
      console.log(error);
      setUrlError(error.response.data);
    }
  };

  return (
    <UrlShortenerContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              placeholder="Shorten a link here..."
              name="url"
              ref={register({ required: true })}
            />
            {errors && errors.url && <p>Please add a link</p>}
            {/* {urlError && <p>{urlError}</p>} */}
          </div>
          <Button>Shorten It!</Button>
        </form>
      </FormContainer>
      <UrlList urls={urls} />
    </UrlShortenerContainer>
  );
};

export default UrlShortener;
