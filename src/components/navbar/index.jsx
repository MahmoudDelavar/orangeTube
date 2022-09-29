import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";
//====================================================

const Navbar = (props) => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Navbar;
