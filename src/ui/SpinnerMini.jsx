import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 2rem;
  aspect-ratio: 1;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
