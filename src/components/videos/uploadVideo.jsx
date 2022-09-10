import "./styles/uploadStyle.css";
import { FaUpload } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

//==================================================
const UploadVideo = () => {
  //----------------     States     ------------------
  const [video, setVideo] = useState("");
  const [filePath, setFilePath] = useState("");
  const [fileName, setFileName] = useState("");
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  //----------------Handle Functions------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const title = form.get("title");
    // const description = form.get("description");
    // const category = form.get("category");

    // const data = {
    //   title,
    //   description,
    //   category,
    // };
    // console.log("data is ", data);
    // axios
    //   .post("http://localhost:4000/api/uploads/videos", data)
    //   .then((res) => {
    //     console.log(res.data.message);
    //     console.log("res=", res);
    //   })
    //   .catch((err) => {
    //     console.log("AXIOS ERR:", err);
    //   });
    e.target.reset();
  };
  //-----------------
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
      <div className="container  ">
        <div className="row form">
          <div className="col-sm-12 col-md-9 ">
            <header>
              <h1>Upload video</h1>
            </header>
            <form
              encType="multipart/form-data"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="row  justify-content-between ">
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
                        width={200}
                        height={200}
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
                  <option value="جنایی">جنایی</option>
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
      </div>
    </>
  );
};

export default UploadVideo;
