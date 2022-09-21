import { Link } from "react-router-dom";
import { FiUsers, FiHome, FiLogOut, FiVideo, FiLogIn } from "react-icons/fi";
import { BiGame } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa";
import { useEffect } from "react";
import "./navStyle.css";
import { useSelector } from "react-redux";
//====================================================
const Navigationbar = () => {
  const islogin = useSelector((state) => state.isloginState.message);

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
                    <Link className="link" to="/subscribtionsPage">
                      <span className="icon">
                        <BiGame />
                      </span>
                      <span className="text"> دنبال شده ها </span>
                    </Link>
                  </li>
                  {!islogin ? (
                    <>
                      <li className="list">
                        <Link className="link" to="/login">
                          <span className="icon">
                            <FiLogIn />
                          </span>
                          <span className="text">ورود</span>
                        </Link>
                      </li>
                      <li className="list">
                        <Link className="link" to="/register">
                          <span className="icon">
                            <FaRegIdCard />
                          </span>
                          <span className="text">ثبت نام</span>
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
