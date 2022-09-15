import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiVideo, FiLogOut } from "react-icons/fi";
import { FaRegIdCard } from "react-icons/fa";

import { BiGame } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navStyle.css";
//====================================================

const MobNav = (props) => {
  return (
    <>
      <div className="row ">
        <div className="col">
          <div className="d-sm-none">
            <Navbar bg="light" expand="sm" className="mob-main">
              <Container className="mob-main">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                  <span className=" mt-3 mob-span"> Fun Tube</span>
                  <img src={require("./../../media/logo64.png")} alt="" />
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
                    <Nav.Link>
                      <Link className="link" to="/games">
                        <span className="icon-mob ">
                          <BiGame />
                        </span>
                        <span className="text-mob"> بازی </span>
                      </Link>
                    </Nav.Link>
                    {!props.user ? (
                      <>
                        <Nav.Link>
                          <Link className="link" to="/register">
                            <span className="icon-mob ">
                              <FaRegIdCard />
                            </span>
                            <span className="text-mob">ثبت نام</span>
                          </Link>
                        </Nav.Link>
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
                          <span className="text-mob">خرج</span>
                        </Link>
                      </Nav.Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobNav;
