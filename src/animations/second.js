import React, { Component } from "react";
import { Dot, Wrapper } from "./style/components";
import { dot1Move, dot2Move, dot3Move, indexMove } from "./style/keyframes";
import Svg from "./svg";

export default class Seconed extends Component {
  render() {
    const {
      wrapperWidth,
      wrapperHeight,
      dotWidth,
      dotHeight,
      dot1Color = "#ffe386",
      dot2Color = "#10beae",
      dot3Color = "#f74d75"
    } = this.props;
    return (
      <Wrapper width={wrapperWidth} height={wrapperHeight}>
        <Svg />
        <Dot
          width={dotWidth}
          height={dotHeight}
          color={dot1Color}
          animation={`${dot1Move} 2s ease infinite, ${indexMove} 6s -2s ease infinite`}
        />
        <Dot
          width={dotWidth}
          height={dotHeight}
          color={dot2Color}
          animation={`${dot2Move} 2s ease infinite, ${indexMove} 6s -4s ease infinite`}
        />
        <Dot
          width={dotWidth}
          height={dotHeight}
          color={dot3Color}
          animation={`${dot3Move} 2s ease infinite, ${indexMove} 6s ease infinite`}
        />
      </Wrapper>
    );
  }
}
