import React, { Component } from "react";
import { Dot, Wrapper } from "./style/components";
import {
  dot1Move,
  dot2Move,
  dot3Move,
  dot41Move,
  indexMove,
  rotateMove
} from "./style/keyframes";
import Svg from "./svg";

export default class First extends Component {
  render() {
    return (
      <Wrapper animation={`${rotateMove} 2s ease-in-out infinite`}>
        <Svg />
        <Dot
          color="#ffe386"
          animation={`${dot1Move} 2s ease infinite, ${indexMove} 6s -2s ease infinite`}
        />
        <Dot
          color="#10beae"
          animation={`${dot2Move} 2s ease infinite, ${indexMove} 6s -4s ease infinite`}
        />
        <Dot
          color="#f74d75"
          animation={`${dot3Move} 2s ease infinite, ${indexMove} 6s ease infinite`}
        />
      </Wrapper>
    );
  }
}
