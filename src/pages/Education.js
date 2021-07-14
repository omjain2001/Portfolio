import React from "react";
import {
  graduationSVG,
  achievementSVG,
  hackerrank,
  coursera,
  codechef,
} from "../assets";
// import graduation from "../assets/graduation.svg";
// import achivements from "../assets/achivements.svg";
// import hackerrank from "../assets/hackerrank.svg";
// import coursera from "../assets/coursera-2.svg";
// import codechef from "../assets/codechef.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUniversity,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../COLORS";
import ParticlesBackground from "../components/ParticlesBackground";

const educationList = [
  {
    degree: "Bachelor of Engineering - Information Technology",
    university: "Pune Institute of Computer Technology",
    location: "Pune, India",
    score: "GPA - 9.34",
  },
  {
    degree: "HSC",
    university: "Swami Vivekanand junior college",
    location: "Jalgaon, India",
    score: "Score - 90.77%",
  },
  {
    degree: "SSC",
    university: "St. Teresa’s Convent Higher Secondary School",
    location: "Jalgaon, India",
    score: "Score - 96.00%",
  },
];

const achievementList = [
  {
    img: hackerrank,
    title: "Skills",
    description:
      "Hackerrank is the best platform to kickstart competitive coding as well as build your coding skills. I have practiced programming languages such as c++, python, java on it. I solve various questions on it to improve problem solving skill.",
    buttonLabel: "Stats",
    url: "https://www.hackerrank.com/omjain2606",
  },
  {
    img: coursera,
    title: "Programming for Everybody (Getting Started with Python)",
    description:
      "I have learned the basics of python through this course. Charles Russell Severance, the instructor of this course taught and explained python programming basics in a very simple manner.",
    buttonLabel: "Certificate",
    url: "https://coursera.org/share/1f3afacb4d6a4d8037a58e7386a639d0",
    style: { width: "50%", color: COLORS.button },
  },
  // {
  //   img: codechef,
  //   title: "Skills",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //   buttonLabel: "Stats",
  //   url: "https://www.codechef.com/users/omjain_1008",
  // },
];

const EducationCard = ({ degree, university, location, score }) => {
  return (
    <div
      className="card custom-card w-75 custom-edu-card my-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="card-header text-center">
        <h5 className="card-title mb-0 font-weight-bold">{degree}</h5>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-center justify-content-center my-1">
            <FontAwesomeIcon
              icon={faUniversity}
              style={{ color: COLORS.button, marginRight: 10 }}
              size="1x"
            />
            <h6 className="mb-0 edu-info">{university}</h6>
          </div>
          <div className="d-flex align-items-center my-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: "#EA4335", marginRight: 10 }}
              size="1x"
            />
            <span className="edu-info">{location}</span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon
            icon={faCertificate}
            style={{ color: "#FFD700", marginRight: 10 }}
            size="1x"
          />
          <h6 className="mb-0 edu-info">{score}</h6>
        </div>
      </div>
    </div>
  );
};

const AchievementCard = ({
  img,
  title,
  description,
  buttonLabel,
  url,
  style,
}) => {
  return (
    <div
      className="col-lg-4 col-md-6 my-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="card custom-card text-center">
        <img
          className="card-img-top mt-4 align-self-center achievement-card-img"
          src={img}
          alt="Logo"
          height="80"
          style={style}
        />
        <div className="card-body">
          <h5 className="card-title text-center font-weight-bold achievement-title">
            {title}
          </h5>
          <p className="card-text mt-4 text-justify achievement-desc">
            {description}
          </p>
          {/* <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="vertical-align-end"
          >
            <button className="btn mt-4">{buttonLabel}</button>
          </a> */}
        </div>
        <div className="card-footer">
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="vertical-align-end"
          >
            <button className="btn">{buttonLabel}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column-reverse flex-md-row justify-content-around align-items-center my-5">
        <div className="col-md-6 text-center">
          <div
            className="d-inline-flex flex-column align-items-center title-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="display-5">Education</h1>
            <div className="custom-header-divider" />
          </div>
        </div>
        <div
          className="col-md-6 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={graduationSVG}
            alt="Graduation"
            height="300"
            width="80%"
            className="title-img"
          />
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center edu-container"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        {educationList.map((item, index) => (
          <EducationCard
            degree={item.degree}
            university={item.university}
            location={item.location}
            score={item.score}
            key={index}
          />
        ))}
      </div>
      <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center my-5 achievement-container">
        <div
          className="col-md-6 text-center"
          data-aos="flip-right"
          data-aos-duration="1000"
          style={{ width: "100%", height: "80%" }}
        >
          <img
            src={achievementSVG}
            alt="Achivements"
            height="400"
            width="80%"
            className="title-img"
          />
        </div>
        <div className="col-md-6 text-center" data-aos="fade-left">
          <div className="d-inline-flex flex-column align-items-center title-container">
            <h1 className="display-5">Achievements</h1>
            <div className="custom-header-divider" />
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap mt-5 justify-content-center">
        {achievementList.map((item, index) => (
          <AchievementCard
            img={item.img}
            title={item.title}
            description={item.description}
            buttonLabel={item.buttonLabel}
            url={item.url}
            style={item.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
