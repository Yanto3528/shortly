import styled from "styled-components";
import { motion } from "framer-motion";

export const StatisticsContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.darkgrey2};
    margin-bottom: 10px;
  }
  p {
    color: ${({ theme }) => theme.grey2};
    line-height: 1.5;
  }
`;

export const StatisticsRow = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 800px) {
    margin-top: 100px;
    flex-direction: column;
  }
`;

export const Line = styled(motion.div)`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  @media only screen and (max-width: 800px) {
    width: 10px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

export const StatisticsColumn = styled(motion.div)`
  &:not(:last-child) {
    margin-right: 25px;
  }
  padding: 50px;
  flex-basis: 33%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
  p {
    line-height: 1.5;
  }
  &:nth-child(3) {
    margin-top: 70px;
  }
  &:last-child {
    margin-top: 140px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 30px;
    text-align: center;
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  @media only screen and (max-width: 800px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
