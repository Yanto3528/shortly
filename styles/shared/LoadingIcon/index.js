import styled from "styled-components";
import { motion } from "framer-motion";

export default styled(motion.span)`
  display: inline-block;
  width: ${({ size }) => (size ? size : "1.6rem")};
  height: ${({ size }) => (size ? size : "1.6rem")};
  border: 2px solid white;
  border-color: ${({ color }) => color && color};
  border-top-color: transparent;
  border-radius: 50%;
  margin-right: 10px;
`;
