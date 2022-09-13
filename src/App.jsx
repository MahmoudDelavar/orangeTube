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

//====================================================
const App = () => {
  return (
    <>
      <Nav />
      <div className="container text-center">
        <div className="row justify-content-center ">
          <div className="col-12 align-content-center">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/games" element={<Games />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Logout />} />
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
