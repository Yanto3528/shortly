import { HeroContainer } from "./styles";
import Button from "../../styles/shared/Button";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button pill>Get Started</Button>
      </div>
      <img src="/images/illustration-working.svg" alt="hero-image" />
    </HeroContainer>
  );
};

export default Hero;
