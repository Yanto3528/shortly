import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import UrlList from "../UrlList";

import { UrlShortenerContainer, FormContainer } from "./styles";
import Button from "../../styles/shared/Button";
import Input from "../../styles/shared/Input";
import LoadingIcon from "../../styles/shared/LoadingIcon";

const loadingVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 1,
    },
  },
};

const UrlShortener = () => {
  const [urls, setUrls] = useState([]);
  const [urlError, setUrlError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "https://rel.ink/api/links/",
        data,
      });
      setUrls([...urls, res.data]);
      reset();
    } catch (error) {
      console.log(error);
      setUrlError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UrlShortenerContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="url">
            <div>
              <Input
                type="text"
                placeholder="Shorten a link here..."
                name="url"
                id="url"
                ref={register({ required: true })}
                error={errors.url}
              />
              {errors && errors.url && <p>Please add a link</p>}
              {urlError && <p>{urlError}</p>}
            </div>
            <Button disabled={loading}>
              {loading ? (
                <React.Fragment>
                  <LoadingIcon
                    variants={loadingVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  Loading...
                </React.Fragment>
              ) : (
                "Shorten It!"
              )}
            </Button>
          </label>
        </form>
      </FormContainer>
      <UrlList urls={urls} />
    </UrlShortenerContainer>
  );
};

export default UrlShortener;
