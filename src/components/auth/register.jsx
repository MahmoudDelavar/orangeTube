import InputComponent from "../inputComponent/inputComponent";
import { Key, Mailbox } from "react-bootstrap-icons";
import { FaUserAlt } from "react-icons/fa";
import { FcBusinessman, FcPicture } from "react-icons/fc";
import "./style.css";
//====================================================

const Register = () => {
  const handelSubmit = () => {
    console.log("submit");
  };
  return (
    <>
      <form action="#" className="main-box">
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
          <button
            onClick={handelSubmit}
            type="button"
            className="btn btn-outline-primary "
          >
            ثبت نام
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
