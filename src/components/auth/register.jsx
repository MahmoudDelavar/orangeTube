import InputComponent from "../inputComponent/inputComponent";
import { Key, Mailbox } from "react-bootstrap-icons";
import { FaBookMedical, FaUserAlt } from "react-icons/fa";
import { FcBusinessman, FcPicture } from "react-icons/fc";
import * as yup from "yup";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//==================================================================================

const Register = () => {
  //-------------------------- states -----------------------------------------------
  const [err, setErr] = useState([]);
  const [serverMsg, setServerMsg] = useState([]);
  const [avatarPath, setAvatarPath] = useState("");

  //-------------------------- send data to backend ---------------------------------

  //____Send Users Avatar To Server___
  const handleChange = async (e) => {
    console.log("avatar:", e.target.files[0]);
    const form = new FormData();
    const config = {
      header: { "content-type": "multipart-data" },
    };
    form.append("file", e.target.files[0]);
    axios
      .post("http://localhost:4000/api/auth/avatar", form, config)
      .then((res) => {
        setAvatarPath(res.data.data.filePath);
      })
      .catch((err) => console.log(err));
  };

  //____handle submit___
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userName = form.get("userName");
    const password = form.get("password");
    const re_password = form.get("re-password");
    const email = form.get("email");
    console.log(avatarPath);

    const userInfo = { userName, password, email, avatarPath };
    const isValid = await validate(userInfo);

    if (re_password === password) {
      if (isValid) {
        axios
          .post("http://localhost:4000/api/auth/register", userInfo)
          .then((res) => {
            setServerMsg(res.data.message);
            e.target.reset();
            setTimeout(() => {
              window.location = "/login";
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

  //-------------------------- validation inputs ------------------------------------
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
      {/* --- Errors Message Box ---  */}
      {err.length !== 0 && (
        <ul>
          <div className="alert alert-danger">
            {err.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </div>
        </ul>
      )}

      {/* --- Server Message Box ---  */}
      {serverMsg.length !== 0 && (
        <div className="alert alert-primary">
          <p>{serverMsg}</p>
        </div>
      )}

      {/* --- Form Inputs ---  */}
      <form
        onSubmit={(e) => handleSubmit(e)}
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
            <input
              onChange={(e) => handleChange(e)}
              id="avatar"
              type="file"
              className="avatar-input"
            />
          </div>
          <div className="col-6">
            {avatarPath !== "" && (
              <img
                className="avatar"
                src={`http://localhost:4000/${avatarPath}`}
              />
            )}
            {avatarPath == "" && (
              <div>
                <FcPicture size={50} /> <p>پیش نمایش</p>
              </div>
            )}
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
