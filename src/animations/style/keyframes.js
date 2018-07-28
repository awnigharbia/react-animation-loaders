import { keyframes } from "styled-components";

const dot1Move = keyframes`
    20% {
      transform: scale(1);
    }
    45% {
      transform: translateX(16px) scale(0.45);
    }
    60% {
      transform: translateX(80px) scale(0.45);
    }
    80% {
      transform: translateX(80px) scale(0.45);
    }
    100% {
      transform: translateX(0px) scale(1);
    }`;

const dot2Move = keyframes`
    20% {
      transform: scale(1);
    }
    45% {
      transform: translateX(-0px) scale(0.45);
    }
    60% {
      transform: translateX(-0px) scale(0.45);
    }
    80% {
      transform: translateX(-0px) scale(0.45);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
`;

const dot3Move = keyframes`
    20% {
      transform: scale(1);
    }
    45% {
      transform: translateX(-18px) scale(0.45);
    }
    60% {
      transform: translateX(-90px) scale(0.45);
    }
    80% {
      transform: translateX(-90px) scale(0.45);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
`;

const rotateMove = keyframes`
    55% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    80% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  `;

const indexMove = keyframes`
    0%,
    100% {
      z-index: 3;
    }
    33.3% {
      z-index: 2;
    }
    66.6% {
      z-index: 1;
    }
`;

const dot41Move = keyframes`
    0% {
      transform: scale(1);
    }
    45% {
      transform: translateX(18px) scale(0.45);
    }
    60% {
      transform: translateX(90px) scale(1);
    }
    80% {
      transform: translateX(130px) scale(0.45);
    }
    100% {
      transform: translateX(150px) scale(1);
    }
`;

export { dot1Move, dot2Move, dot3Move, dot41Move, indexMove, rotateMove };
