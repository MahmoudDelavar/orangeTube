import { Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className=" home">
        <h5>سلام ، ممنون از وقتی که گذاشتین.</h5>
        <hr />
        <h5>یه خورده درباره خودم بخام بگم...</h5>
        <p className="home-text">
          محمود دلاور هستم ، 31 سالمه ، رباتیک خوندم که البته اخراج شدم{" "}
          <span>&#x1F644;</span>
          و 11ماهه که خدمت سربازی رو تموم کردم. <br />
          حدودا 10 ماهه که وارد حوزه برنامه نوسی وب شدم، قبلا تو ضمینه برنامه
          نویسی میکروکنترلرهای <strong>AVR</strong> به زبان <strong>C</strong> ,{" "}
          <strong>Codevision</strong> فعلالیت هایی انجام دادم که اگه دوس داشتین
          میتونین
          <Link className="home-link" to="/rezome">
            {" "}
            اینجا{" "}
          </Link>{" "}
          ببینین. <br />
          این پروژه هم یه وب اپلیکیشن اشتراک گذازی ویدئو مشابه{" "}
          <strong>youtube</strong> هستش که قسمت فرانت با <strong>react</strong>{" "}
          و بک اند با
          <strong>node</strong> نوشته شده که کد های هر کدوم رو مینونین توی گیت
          هاب{" "}
          <Link className="home-link" to="https://github.com/MahmoudDelavar">
            <Github size={30} />
          </Link>
          ببینین
        </p>
        <div></div>
        <p className="home-text">
          و فقط اینکه بعد از ثبت نام لازمه یک بار <strong>login</strong> رو
          انجام بدین
        </p>
      </div>
    </>
  );
};

export default Home;
