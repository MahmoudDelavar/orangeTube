import MobNav from "./mobNav";
import Navigationbar from "./navigationbar";
//====================================================

const Nav = (props) => {
  return (
    <>
      <MobNav />
      <Navigationbar user={props.user} />
    </>
  );
};

export default Nav;
