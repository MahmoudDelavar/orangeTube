import Nav from "./components/navbar/";
import "./appStyle.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Videos from "./components/videos";
import Games from "./components/games";
import Footer from "./components/footer";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Register from "./components/auth/register";
import UploadVideo from "./components/videos/uploadVideo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "./StateManagement/actions/userActions";
//====================================================
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(isLogin({ token }));
  }, []);
  return (
    <>
      <Nav />
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-12 align-content-center">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/uploadVideo" element={<UploadVideo />} />
              <Route path="/games" element={<Games />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
