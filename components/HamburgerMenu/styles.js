import styled, { css } from "styled-components";

const activeStyles = css`
  transform: rotate(135deg);
  &:before,
  &:after {
    top: 0;
    transform: rotate(90deg);
  }
`;

export default styled.div`
  width: 40px;
  height: 40px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 740px) {
    display: flex;
  }
`;

export const Hamburger = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.grey};
  position: relative;
  transition: all 0.4s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.grey};
  }
  &:before {
    top: 10px;
  }
  &:after {
    top: -10px;
  }
  ${({ active }) => active && activeStyles}
`;
