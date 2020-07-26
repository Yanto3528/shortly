import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  to {
    transform: translate(-50%,-100%);
    opacity: 1;
  }
`;

export const TooltipContainer = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.darkgrey};
  color: white;
  font-size: 1rem;
  letter-spacing: 1px;
  animation: ${fadeIn} 0.5s forwards;
`;
