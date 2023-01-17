import { useWindow, useClass } from "../../../hooks/usehooks";
import TopNav from "../../../../Components/UI/Navigation/TopNav/TopNav";
import Canvas from "./Canvas/Canvas";
import BottomNav from "../../../../Components/UI/Navigation/Footer/Footer";

const BasicNavigation = (props) => {
  const { width } = useWindow();
  const isMobile = width < 700;

  return (
    <div>
      <TopNav isMobile={isMobile} />
      <Canvas isMobile={isMobile} />
      <BottomNav isMobile={isMobile} />
    </div>
  );
};

export default BasicNavigation;
