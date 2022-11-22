import Accordion from "react-bootstrap/Accordion";
import "./style.css";
//====================================================
const CV = () => {
  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="cv-title"> دستگاه نشت یاب گاز </p>
            <p> ( مدیریت بحران شهرداری مشهد )</p>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row align-items-center">
              <div className="cv-descriotion col col-md-6">
                <ul>
                  <li>تشخیص حریق و نشتی گاز</li>
                  <li>
                    فعال کردن سیستم تهویه و قطع انشعاب گاز درصورت وجود نشتی
                  </li>
                  <li> ارسال پیامک و گزارش وضعیت نشستی یا حریق به صاحب خانه</li>
                  <li> تماس با مرکز 125 و اعلام آدرس محل حریق </li>
                </ul>
              </div>
              <div className="col col-md-4 text-center ">
                <div className="row">
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/gasDetector.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/gasDetector2.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p className="cv-title"> شوکر پرتابی </p>
            <p> ( صنایع دفاع شهید کاوه )</p>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row align-items-center">
              <div className="cv-descriotion col col-md-6">
                <ul>
                  <li> ولتاژ 50000v </li>
                  <li> فاصله سنج مادون قرمز </li>
                  <li> نشانه روی لیزری </li>
                  <li> حداکثر برد 5 متر </li>
                  <li> نمایشگر OLED - فاصله-میزان شارژ-درصد اصابت </li>
                </ul>
              </div>
              <div className="col col-md-6 text-center">
                <div className="row">
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/shoker.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/shoker2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/shoker3.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    {" "}
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/shoker4.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/shoker5.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p className="cv-title"> مدرس رباتیک </p>
            <p>( پژوهشسرای ناحیه یک آموزش و پرورش - موسسه آموزش مشهد کوشش)</p>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row align-items-center">
              <div className="cv-descriotion col-8">
                به عنوان مدرس تو چندتا دوره آموزش رباتیک که تو پژوهشسرای ناحیه
                یک و چندتا مدرسه غیر انتفاعی دیگه برگزار شد حضور داشتم که چیز
                خاصی دربارش ندارم بگم ... معمولا اینطور کلاسا واسه مراکز دولتی
                بیشتر جنبه نمایشی و پرکردن تقویم آموزشیشون داره و برای مدارس غیر
                انتفاعی هم عموما هدف خالی کردن جیب والدینه چون به هرحال یه فوق
                برنامه شیک و دهن پرکنه که البته خروجی خاصی واسه بچه ها نداره یا
                حداقل اون موقع نداشت.
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col text-center">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/mashhadKoshesh.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p className="cv-title"> پروژه های دانشجویی </p>
          </Accordion.Header>
          <Accordion.Body>
            <div className="row align-items-center">
              <div className="cv-descriotion col col-md-6">
                این پروژه ها بین سال 90 تا 93 انجام شده ، طبیعتا الان خیلی هاشون
                در حد دبیرستانه :-)
                <ul>
                  <li> ربات مسیریاب </li>
                  <li> کسینوسفیمتر دیجیتال </li>
                  <li> کنترل سرعت موتور DC با استفاده از PWM </li>
                  <li> موقعیت یاب آلتراسونیک </li>
                  <li> دماسنج دیجیتال </li>
                  <li> قفل الکترونیکی </li>
                </ul>
              </div>
              <div className="col col-md-6 text-center">
                <div className="row">
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/LF.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/LF (2).jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mt-1">
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/keypad.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <img
                      className="cv-pic"
                      src={require("../../media/CVpic/keypad2.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default CV;
