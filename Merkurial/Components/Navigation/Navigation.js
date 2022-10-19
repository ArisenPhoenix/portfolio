import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Canvas from "./Canvas/Canvas";
import { useContext } from "react";
import MerkurialContext from "../../FlexBox/MerkurialFlexBoxContext";

const Navigation = (props) => {
  const merkCtx = useContext(MerkurialContext);
  return (
    <>
      <Top />
      <Canvas>{props.children}</Canvas>
      <Bottom />
    </>
  );
};

export default Navigation;
