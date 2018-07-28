import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  margin: auto;
  filter: url("#goo");
  animation: ${props => props.animation};
`;

const Dot = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
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
  width: 200px;
  height: 200px;
  transform: rotate(0deg);
  margin: auto;
  filter: url("#goo");
`;

const Dot4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #260faa;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
  margin-right:${props => props.right || ""}px
  margin-left:${props => props.left || ""}px
  animation:${props => props.animation || ""}
`;

export { Wrapper, Wrapper4, Dot, Dot4 };
