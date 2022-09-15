import MobNav from "./mobNav";
import Navigationbar from "./navigationbar";
//====================================================

const Nav = (props) => {
  return (
    <>
      <MobNav user={props.user} />
      <Navigationbar user={props.user} />
    </>
  );
};

export default Nav;
