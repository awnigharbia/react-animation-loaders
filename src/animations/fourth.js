import React, { Component } from "react";
import { Wrapper4, Dot4 } from "./style/components";
import { dot41Move } from "./style/keyframes";
import Svg from "./svg";

export default class Fourth extends Component {
  render() {
    const {
      wrapperWidth,
      wrapperHeight,
      dotWidth,
      dotHeight,
      dot1Color,
      dot2Color,
      dot3Color,
      dot4Color
    } = this.props;
    return (
      <Wrapper4 width={wrapperWidth} hieght={wrapperHeight}>
        <Svg />
        <Dot4 width={dotWidth} hieght={dotHeight} color={dot1Color} />
        <Dot4 width={dotWidth} hieght={dotHeight} color={dot2Color} right="5" />
        <Dot4 width={dotWidth} hieght={dotHeight} color={dot3Color} left="5" />
        <Dot4
          left="5"
          width={dotWidth}
          hieght={dotHeight}
          color={dot4Color}
          animation={`${dot41Move} 1s 1s ease-in-out infinite alternate`}
        />
      </Wrapper4>
    );
  }
}
