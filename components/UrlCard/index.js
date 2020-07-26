import { useRef, useState, useEffect } from "react";
import Tooltip from "../Tooltip";
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

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  const onCopyUrl = (e) => {
    linkRef.current.select();
    document.execCommand("copy");
    setCopied(true);
  };

  return (
    <UrlCardContainer>
      <OriginalLink>{url.url}</OriginalLink>
      <UrlActionContainer>
        <label>
          <ConvertedLink
            ref={linkRef}
            value={`https://rel.ink/${url.hashid}`}
            readOnly
            onClick={onCopyUrl}
          />
          {copied && <Tooltip content="Copied" />}
        </label>
        <Button onClick={onCopyUrl} secondary={copied}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </UrlActionContainer>
    </UrlCardContainer>
  );
};

export default UrlCard;

{
  /* <ConvertedLink
          ref={linkRef}
        >{`https://rel.link/${url.hashid}`}</ConvertedLink> */
}
