import { Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./styles.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import {
  FaRegMehRollingEyes,
  FaSmileWink,
  FaRegHandPointLeft,
} from "react-icons/fa";
//====================================================

const Home = () => {
  //--------------------------state ---------------------------------
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //----------------- Offcanvas from ReactBootstrap -----------------
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            خب گویا حوصله داری :-)
            {/* <span className="emoji">
              <FaSmileWink />
            </span> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> یکمی درباره خودم...</h5>
          <p className="home-text">
            محمود دلاور هستم ، 31 سالمه ، مهندسی رباتیک خوندم که البته اخراج شدم{" "}
            <span className="emoji">&#x1F644;</span> و 10ماهه (1400/9)که خدمت
            سربازی رو تموم کردم. <br />
            حدودا 9 ماهه که وارد حوزه برنامه نوسی وب شدم، قبلا تو زمینه برنامه
            نویسی میکروکنترلرهای <strong>AVR</strong> به زبان{" "}
            <strong>Codevision</strong>,<strong>C</strong> فعلالیت هایی انجام
            دادم که اگه دوس داشتین میتونین{" "}
            <Link className="home-link" to="/cv">
              اینجا
            </Link>
            ببینین. <br />
            این پروژه هم یه وب اپلیکیشن اشتراک گذاری ویدئو مشابه{" "}
            <strong>youtube</strong> که قسمت فرانت با <strong>React</strong> و
            بک اند با
            <strong>Node</strong> نوشته شده که کد های هر کدوم رو مینونین توی گیت
            هاب <FaRegHandPointLeft />
            <btn
              onClick={() => window.open("https://github.com/MahmoudDelavar")}
              className="home-link"
            >
              <Github size={30} />
            </btn>
            ببینین.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  //----------------------------------------------------------

  return (
    <>
      <div className="home">
        <p className="home-text">
          سلام ،{<br />} ممنون از وقتی که گذاشتین ، اگه حوصله دارین{" "}
          <btn
            className="btn btn-sm btn-outline-primary"
            onClick={() => setModalShow(true)}
          >
            بخونین
          </btn>{" "}
          اگه هم ندارین{" "}
          <Link className="home-link" to="/login">
            وارد
          </Link>{" "}
          بشین و چندتا ویدئو ببینین .
        </p>

        <p className="home-text">
          البته بدیهیه که این یه پروژه تجاری نیست، و فقط یه تمرین تو زمینه
          Reactjs , Nodejs حساب میشه، فلذا چشمها را بشویید و یه جور دیگه بنگیرید
          <span>&#x1F615;</span>
        </p>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Home;
