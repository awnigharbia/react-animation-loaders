import React, { Component } from "react";
import { Wrapper4, Dot4 } from "./style/components";
import { dot41Move } from "./style/keyframes";
import Svg from "./svg";

export default class Fourth extends Component {
  render() {
    return (
      <Wrapper4>
        <Svg />
        <Dot4 />
        <Dot4 right="5" />
        <Dot4 left="5" />
        <Dot4
          left="5"
          color="#422eb3"
          animation={`${dot41Move} 1s 1s ease-in-out infinite alternate`}
        />
      </Wrapper4>
    );
  }
}
