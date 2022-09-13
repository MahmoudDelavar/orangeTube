import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiUserCheck, FiVideo } from "react-icons/fi";
import { BiGame } from "react-icons/bi";
import { useEffect } from "react";
import "./navStyle.css";

//====================================================
const Navigationbar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activLink));
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="  main d-none d-sm-block">
              <div className="navbar ">
                <ul>
                  <li className="list active">
                    <Link className="link" to="/home">
                      <span className="icon">
                        <FiHome />
                      </span>
                      <span className="text">خانه</span>
                    </Link>
                  </li>
                  <li className="list">
                    <Link className="link" to="/videos">
                      <span className="icon">
                        <FiVideo />
                      </span>
                      <span className="text"> ویدئو ها</span>
                    </Link>
                  </li>
                  <li className="list">
                    <Link className="link" to="/games">
                      <span className="icon">
                        <BiGame />
                      </span>
                      <span className="text"> بازی </span>
                    </Link>
                  </li>
                  <li className="list">
                    <Link className="link" to="/register">
                      <span className="icon">
                        <FiUsers />
                      </span>
                      <span className="text">ورود</span>
                    </Link>
                  </li>
                  <div className="indicator"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* mobile size menu */}
      </div>
    </>
  );
};

export default Navigationbar;
