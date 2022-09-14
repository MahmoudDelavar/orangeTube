import InputComponent from "../inputComponent/inputComponent";
import { Key, Mailbox } from "react-bootstrap-icons";
import { FaUserAlt } from "react-icons/fa";
import { FcBusinessman, FcPicture } from "react-icons/fc";
import * as yup from "yup";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//====================================================

const Register = () => {
  //----- states -----
  const [err, setErr] = useState([]);
  const [serverMsg, setServerMsg] = useState([]);

  //----- send data to backend -----
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userName = form.get("userName");
    const password = form.get("password");
    const re_password = form.get("re-password");
    const email = form.get("email");
    const userInfo = { userName: userName, password: password, email: email };
    const isValid = await validate(userInfo);
    if (re_password === password) {
      if (isValid) {
        axios
          .post("http://localhost:4000/api/auth/register", userInfo)
          .then((res) => {
            console.log("secc aCIOS", res.data.message);
            setServerMsg(res.data.message);
            e.target.reset();
            setTimeout(() => {
              window.location = "/home";
            }, 2000);
          })
          .catch((err) => {
            setErr(["این ایمیل قبلا ثبت شده است"]);
          });
      }
    } else {
      setErr(["تکرار پسورد مطابقت ندارد"]);
    }
  };

  //----- validation inputs -----
  let schema = yup.object().shape({
    userName: yup.string().required("نام کاربری راوارد کنید "),
    email: yup
      .string()
      .email("فرمت ایمیل صحیح نیست")
      .required("ایمیل خود را وارد کنید "),
    password: yup.string().min(6, "پسورد باید حداقل 6 کاراکتر باشد "),
  });

  const validate = async (userInfo) => {
    try {
      const result = await schema.validate(userInfo, { abortEarly: false });
      err.length = 0;
      return result;
    } catch (err) {
      console.log(err);
      setErr(err.errors);
    }
  };

  return (
    <>
      {/* Errors Message box */}
      {err.length !== 0 && (
        <ul>
          <div className="alert alert-danger">
            {err.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </div>
        </ul>
      )}

      {/* Server Message box */}
      {serverMsg.length !== 0 && (
        <div className="alert alert-primary">
          <p>{serverMsg}</p>
        </div>
      )}

      <form
        onSubmit={(e) => handelSubmit(e)}
        encType="multipart/form-data"
        method="post"
        className="main-box"
      >
        <h3 className="text-center">ثبت نام</h3>
        <InputComponent
          name="userName"
          type="text"
          lable="نام کاربری "
          icon={<FaUserAlt />}
        />
        <InputComponent
          name="email"
          type="email"
          lable="ایمیل "
          icon={<Mailbox />}
        />
        <InputComponent
          name="password"
          type="password"
          lable="رمز عبور"
          icon={<Key />}
        />
        <InputComponent
          name="re-password"
          type="password"
          lable="تکرار رمز عبور"
          icon={<Key />}
        />
        <div className="row align-items-center text-center">
          <div className="col-6 ">
            <label htmlFor="avatar">
              <FcBusinessman size={50} />
              <p> تصویر پروفایل</p>
            </label>
            <input id="avatar" type="file" className="avatar-input" />
          </div>
          <div className="col-6">
            <FcPicture size={50} />
            <p> پیش نمایش</p>
          </div>
        </div>

        <div className="text-center d-grid gap-2 mt-4 ">
          <button type="submit" className="btn btn-outline-primary ">
            ثبت نام
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
