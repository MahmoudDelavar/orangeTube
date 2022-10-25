import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./style.css";

//===============================
const Subscribe = (props) => {
  //------------------------
  const [subsceibeCount, setSubsceibeCount] = useState();
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
        .post("http://orangetube.ir/api/subscribe/unsubscribe", { info })
        .then((res) => {
          setisSubscribe(!isSubscribe);
          setSubsceibeCount(subsceibeCount - 1);
        })
        .catch((err) => {
          console.log("failed to Unsubscribe");
        });
    } else {
      //---------- Subscribe
      axios
        .post("http://orangetube.ir/api/subscribe/subscribe", { info })
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
    // ---How many subscribed
    axios
      .post("http://orangetube.ir/api/subscribe/subscribeNumber", { userTo })
      .then((res) => {
        setSubsceibeCount(res.data.data);
      })
      .catch((err) => {
        console.log("subscribe number err", err);
      });

    // ---Check subscribed or not
    if (userFrom) {
      axios
        .post("http://orangetube.ir/api/subscribe/isSubscribe", { info })
        .then((res) => {
          setisSubscribe(res.data.data);
        })
        .catch((err) => {
          console.log("subscribe or not err", err);
        });
    }
  });
  //------------------------

  return (
    <>
      <button
        style={{ backgroundColor: `${isSubscribe ? "#AAAAAA" : "#CC0000"}` }}
        onClick={handleChlick}
        className="subscribe"
      >
        {isSubscribe ? "SUBSCRIBED" : "SUBSCRIBE"}
        {subsceibeCount}
      </button>
    </>
  );
};

export default Subscribe;
