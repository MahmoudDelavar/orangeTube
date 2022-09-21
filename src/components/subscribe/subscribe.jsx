import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./style.css";

//===============================
const Subscribe = (props) => {
  //------------------------
  const [subsceibeCount, setSubsceibeCount] = useState(0);
  const [isSubscribe, setisSubscribe] = useState("");
  //------------------------
  const userTo = props.userId;
  const userFrom = useSelector((state) => state.isloginState.userInfo.id);
  const info = { userTo, userFrom };

  //------------------------
  const handleChlick = () => {
    if (isSubscribe) {
      //---------- Unsubscribe

      axios
        .post("http://localhost:4000/api/subscribe/unsubscribe", { info })
        .then((res) => {
          console.log(res.data.message);
          setisSubscribe(!isSubscribe);
          setSubsceibeCount(subsceibeCount - 1);
        })
        .catch((err) => {
          console.log("failed to Unsubscribe");
        });
    } else {
      //---------- Subscribe
      axios
        .post("http://localhost:4000/api/subscribe/subscribe", { info })
        .then((res) => {
          setisSubscribe(!isSubscribe);
          setSubsceibeCount(subsceibeCount + 1);
        })
        .catch((err) => {
          console.log("failed to subscribed:", err);
        });
    }
  };
  //------------------------
  useEffect(() => {
    // ---How meny subscribed
    axios
      .post("http://localhost:4000/api/subscribe/subscribeNumber", { userTo })
      .then((res) => {
        // console.log("number of subscribes:", res.data.data);
        setSubsceibeCount(res.data.data);
      })
      .catch((err) => {
        console.log("subscribe number err", err);
      });
    // ---Check subscribed or not
    axios
      .post("http://localhost:4000/api/subscribe/isSubscribe", { info })
      .then((res) => {
        setisSubscribe(res.data.data);
        // console.log("subscribe or not", res.data.data);
      })
      .catch((err) => {
        console.log("subscribe or not err", err);
      });
  });
  //------------------------

  return (
    <>
      <button
        style={{ backgroundColor: `${isSubscribe ? "#AAAAAA" : "#CC0000"}` }}
        onClick={handleChlick}
        className="subscribe"
      >
        {subsceibeCount}
        {isSubscribe ? "SUBSCRIBED" : "SUBSCRIBE"}
      </button>
    </>
  );
};

export default Subscribe;
