import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiLogOut, FiVideo } from "react-icons/fi";

import { useEffect } from "react";
import "./navStyle.css";
import { useSelector } from "react-redux";

//====================================================
const DesktopNav = () => {
  const islogin = useSelector((state) => state.isloginState.message);
  const { userName, avatar } = useSelector(
    (state) => state.isloginState.userInfo
  );

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

                  {!islogin ? (
                    <>
                      <li className="list">
                        <Link className="link" to="/login">
                          <span className="icon">
                            <FiUsers />
                          </span>
                          <span className="text">ورود</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li className="list">
                      <Link className="link" to="/logout">
                        <span className="icon">
                          <FiLogOut />
                        </span>
                        <span className="text">خروج</span>
                      </Link>
                    </li>
                  )}
                  <div className="indicator"></div>
                  <div className="user">
                    {userName ? (
                      <>
                        <span>{`${userName}`}</span>
                        <img
                          className="user-avatar"
                          src={`http://localhost:4000/${avatar}`}
                          alt=""
                        />
                      </>
                    ) : (
                      <p>{`Unregisterd`}</p>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
