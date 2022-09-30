import Navbar from "./components/navbar/";
import "./appStyle.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Videos from "./components/videos";
import Footer from "./components/footer";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Register from "./components/auth/register";
import UploadVideo from "./components/videos/views/uploadVideo";
import PlayVideo from "./components/videos/views/PlayVideo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "./StateManagement/actions/userActions";
import SubscribtionsPage from "./components/videos/subscribe/subscribtionsPage";

//====================================================
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(isLogin({ token }));
  }, []);
  const userName = useSelector((state) => state.isloginState.userInfo.userName);

  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-12 align-content-center">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/:videoId" element={<PlayVideo />} />
              <Route path="/uploadVideo" element={<UploadVideo />} />
              <Route
                path="/subscribtionsPage"
                element={<SubscribtionsPage />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
