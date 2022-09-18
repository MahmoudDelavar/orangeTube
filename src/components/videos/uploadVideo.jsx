import "./styles/uploadStyle.css";
import { FaUpload } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FaRegIdCard } from "react-icons/fa";
import { FiUsers, FiHome, FiLogOut, FiVideo, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
//==================================================
const UploadVideo = () => {
  const islogin = useSelector((state) => state.isloginState.message);
  const userId = useSelector((state) => state.isloginState.userInfo.id);

  //-------------------------- states -----------------------------------------------
  const [video, setVideo] = useState("");
  const [filePath, setFilePath] = useState("");
  const [fileName, setFileName] = useState("");
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [serverMessage, setServerMessage] = useState(null);

  //-------------------------- send data to backend ---------------------------------
  //____handle submit___
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const description = form.get("description");
    const category = form.get("category");
    const data = {
      writer: userId,
      title: title,
      description: description,
      category: category,
      filePath: filePath,
      duration: duration,
      thumbnail: thumbnail,
    };
    axios
      .post("http://localhost:4000/api/videos/addvideo", data)
      .then((res) => {
        console.log(res.data.message);
        console.log("res=", res);
        console.log("userID=", userId);
        console.log("isLonin=", islogin);
        setServerMessage(res.data.message);
        setTimeout(() => {
          window.location = "/videos";
        }, 2000);
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err);
      });

    e.target.reset();
  };
  //____handle Load Video___
  const handleSelect = async (e) => {
    e.preventDefault();
    setVideo(e.target.files[0]);
    const form = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    form.append("file", e.target.files[0]);
    axios
      .post("http://localhost:4000/api/videos/load", form, config)
      .then((res) => {
        setFileName(res.data.data.fileName);
        setFilePath(res.data.data.filePath);
        let info = {
          fileName: res.data.data.fileName,
          filePath: res.data.data.filePath,
        };
        // genetate thumbnails
        axios
          .post("http://localhost:4000/api/videos/thumbnail", info)
          .then((res) => {
            setDuration(res.data.data.fileDuration);
            setThumbnail(res.data.data.thumbFliePath);
          })
          .catch((err) => {
            console.log("thumbnail ERR", err);
          });
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err);
      });
  };

  //----------------Handle Functions End------------------

  return (
    <>
      <div className="container text-center ">
        {islogin ? (
          <div className="row form-box">
            {serverMessage && (
              <div className="alert alert-success">{serverMessage}</div>
            )}
            <div className="col-sm-12 col-md-9 ">
              <header>
                <h1>Upload video</h1>
              </header>
              <form
                className="upload-form"
                encType="multipart/form-data"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="row   ">
                  <div className="col-3 mb-3 upload">
                    <label htmlFor="upload" class="form-label">
                      <FaUpload style={{ fontSize: 40 }} />
                    </label>
                    <label htmlFor="upload">آپلود ویدئو</label>
                    <input
                      type="file"
                      className="form-control inputfile"
                      id="upload"
                      name="video"
                      onChange={(e) => {
                        handleSelect(e);
                      }}
                    />
                  </div>
                  <div className="col-9 mb-3">
                    {thumbnail !== "" && (
                      <div>
                        <img
                          src={`http://localhost:4000/${thumbnail}`}
                          alt="faild Load"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" htmlFor="title">
                    عنوان
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="title"
                    aria-describedby="title"
                    name="title"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">توضیحات</span>
                  <textarea
                    name="description"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="category">
                    دسته بندی
                  </label>
                  <select name="category" className="form-select" id="category">
                    <option selected value="">
                      انتخاب کنید
                    </option>
                    <option value="انیمیشن">انیمیشن</option>
                    <option value="سرگرمی">سرگرمی</option>
                    <option value="کمدی">کمدی</option>
                    <option value="مستند">مستند</option>
                    <option value="علمی">علمی</option>
                  </select>
                </div>

                <button className="btn btn-primary" type="submit">
                  ارسال
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="row">
            <p> لطفا برای آپلود ویدئووارد حساب کاربری خود شوید </p>
            <div className="col box">
              <Link className="link" to="/login">
                <FiUsers size={50} />
                <p>ورورد به حساب کاربری</p>
              </Link>
            </div>
            <div className="col box ">
              <Link className="link" to="/register">
                <FaRegIdCard size={50} />
                <p>ثیت نام </p>
              </Link>
            </div>
            <div className="col box ">
              <Link className="link" to="/videos">
                <FiVideo size={50} />
                <p> بازگشت به صفحه ویدئوها</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadVideo;
