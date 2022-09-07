import UploadVideo from "./uploadVideo";
//==================================================
const VideoPage = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1>Videos</h1>
            <UploadVideo />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
