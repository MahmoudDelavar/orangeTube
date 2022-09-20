import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./style.css";

//===============================
const Subscribe = (props) => {
  //------------------------
  const [subsceibers, setSubsceibers] = useState(0);
  const [subsceibed, setSubsceibed] = useState(false);
  //------------------------
  const userTo = props.userId;
  const userFrom = useSelector((state) => state.isloginState.userInfo.id);
  const info = { userTo, userFrom };

  //------------------------
  const handleChlick = () => {
    // const info = { userTo, userFrom };
    // axios
    //   .post("http://localhost:4000/api/subscribe", { info })
    //   .then((res) => {})
    //   .catch((err) => {});
  };
  //------------------------
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/subscribe/subscribeNumber", { userTo })
      .then((res) => {
        setSubsceibers(res.data.data);
        console.log("information", info);
      })
      .catch((err) => {
        console.log("subscribe err", err);
      });
    // ---chech subscribed or not
    axios
      .post("http://localhost:4000/api/subscribe/subscribed", { info })
      .then((res) => {
        console.log("yes or no", res.data.data);
      })
      .catch((err) => {
        console.log("subscribe err", err);
      });
  }, []);
  //------------------------

  return (
    <>
      <button
        style={{ backgroundColor: `${subsceibed ? "#AAAAAA" : "#CC0000"}` }}
        onClick={handleChlick}
        className="subscribe"
      >
        {subsceibers}
        {subsceibed ? "SUBSCRIBED" : "SUBSCRIBE"}
      </button>
    </>
  );
};

export default Subscribe;
