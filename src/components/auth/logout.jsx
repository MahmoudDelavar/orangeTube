import { useEffect } from "react";
//====================================================

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/videos";
  });
  return null;
};

export default Logout;
