import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiUserCheck, FiVideo } from "react-icons/fi";
import { BiGame } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navStyle.css";
import { useEffect } from "react";
//====================================================

const MobNav = () => {
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
                    <Nav.Link>
                      <Link className="link" to="/profile">
                        <span className="icon-mob ">
                          <FiUsers />
                        </span>
                        <span className="text-mob">ورود</span>
                      </Link>
                    </Nav.Link>
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
