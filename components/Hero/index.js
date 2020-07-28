import { motion } from "framer-motion";
import { HeroContainer } from "./styles";
import Button from "../../styles/shared/Button";

const heroVariant = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const heroImageVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const Hero = () => {
  return (
    <HeroContainer>
      <motion.div variants={heroVariant} initial="hidden" animate="visible">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button pill>Get Started</Button>
      </motion.div>
      <motion.img
        src="/images/illustration-working.svg"
        alt="hero-image"
        variants={heroImageVariant}
        initial="hidden"
        animate="visible"
      />
    </HeroContainer>
  );
};

export default Hero;
