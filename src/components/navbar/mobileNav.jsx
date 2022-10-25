import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiVideo, FiLogOut } from "react-icons/fi";
import { FaRegIdCard } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navStyle.css";
import { useSelector } from "react-redux";
//====================================================

const MobileNav = () => {
  const islogin = useSelector((state) => state.isloginState.message);
  const { userName, avatar } = useSelector(
    (state) => state.isloginState.userInfo
  );
  return (
    <>
      <div className=" d-sm-none">
        <Navbar bg="light" expand="sm" className="mob-main">
          <Container className="mob-main">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand>
              <div className="">
                <div className="row justify-content-around ">
                  <div className="col-4 text-center ">
                    {userName ? (
                      <>
                        <img
                          className="mob-avatar"
                          src={`http://orangetube.ir:4000/${avatar}`}
                          alt=""
                        />
                        <p className="text-danger">{`${userName}`}</p>
                      </>
                    ) : (
                      <p
                        style={{ color: "red", fontSize: "1rem" }}
                      >{`کاربر میهمان`}</p>
                    )}
                    {console.log("avatar Addres:", avatar)}
                  </div>
                  <div className="col-8">
                    <span className=" mt-3 mob-span"> Orange Tube</span>
                    <img src={require("./../../media/logo64.png")} alt="" />
                  </div>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  ">
                <Nav.Link>
                  <Link className="" to="/home">
                    <span className="icon-mob ">
                      <FiHome />
                    </span>
                    <span className="text-mob">خانه</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/videos">
                    <span className="icon-mob ">
                      <FiVideo />
                    </span>
                    <span className="text-mob"> ویدئو ها</span>
                  </Link>
                </Nav.Link>

                {!islogin ? (
                  <>
                    <Nav.Link>
                      <Link className="link" to="/login">
                        <span className="icon-mob ">
                          <FiUsers />
                        </span>
                        <span className="text-mob">ورود</span>
                      </Link>
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link>
                    <Link className="link" to="/logout">
                      <span className="icon-mob ">
                        <FiLogOut />
                      </span>
                      <span className="text-mob">خروج</span>
                    </Link>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MobileNav;
