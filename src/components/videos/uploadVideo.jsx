import "./styles/uploadStyle.css";
import { FaUpload } from "react-icons/fa";

//==================================================
const UploadVideo = () => {
  return (
    <>
      <div className="container  ">
        <div className="row form">
          <div className="col-sm-12 col-md-9 ">
            <header>
              <h1>Upload video</h1>
            </header>
            <form action="">
              <div class="mb-3 upload">
                <label htmlFor="upload" class="form-label">
                  <FaUpload style={{ fontSize: 40 }} />
                </label>
                <label htmlFor="upload">آپلود ویدئو</label>
                <input
                  type="file"
                  className="form-control inputfile"
                  id="upload"
                />
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
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">توضیحات</span>
                <textarea className="form-control"></textarea>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="category">
                  دسته بندی
                </label>
                <select className="form-select" id="category">
                  <option selected>انتخاب کنید</option>
                  <option value="1">انیمیشن</option>
                  <option value="2">جنایی</option>
                  <option value="3">کمدی</option>
                  <option value="3">مستند</option>
                  <option value="3">علمی</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideo;
