import styled from "styled-components";

const Wrapper = styled.div`
  position:relative;
  display: flex;
  flex-direction: row;
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "200px")};
  transform: translate(-50%, -50%) rotate(0deg);
  margin: auto;
  filter: url("#goo");
  animation: ${props => props.animation};
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: ${({ width }) => (width ? width : "70px")};
  height: ${({ height }) => (height ? height : "70px")};
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${props => props.animation};
`;

const Wrapper4 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  justify-content: center;
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "200px")};
  transform: rotate(0deg);
  margin: auto;
  filter: url("#goo");
`;

const Dot4 = styled.div`
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "#260faa")};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
  width: ${({ width }) => (width ? width : "40px")};
  height: ${({ height }) => (height ? height : "40px")};
  margin-right:${props => props.right}px
  margin-left:${props => props.left}px
  animation:${props => props.animation}
`;

export { Wrapper, Wrapper4, Dot, Dot4 };
