import UrlCard from "../UrlCard";
import UrlListContainer from "./styles";

const UrlList = ({ urls }) => {
  return (
    <UrlListContainer>
      {urls.map((url) => (
        <UrlCard key={url.hashid} url={url} />
      ))}
    </UrlListContainer>
  );
};

export default UrlList;
