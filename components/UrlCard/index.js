import { useRef, useState } from "react";
import {
  UrlCardContainer,
  OriginalLink,
  ConvertedLink,
  UrlActionContainer,
} from "./styles";
import Button from "../../styles/shared/Button";

const UrlCard = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const linkRef = useRef(null);

  const onCopyUrl = (e) => {
    linkRef.current.select();
    document.execCommand("copy");
    setCopied(true);
  };

  return (
    <UrlCardContainer>
      <OriginalLink>{url.url}</OriginalLink>
      <UrlActionContainer>
        <ConvertedLink
          ref={linkRef}
        >{`https://rel.link/${url.hashid}`}</ConvertedLink>
        <Button onClick={onCopyUrl} secondary={copied}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </UrlActionContainer>
    </UrlCardContainer>
  );
};

export default UrlCard;
