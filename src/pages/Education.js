import React from "react";
import { graduationSVG, achievementSVG } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUniversity,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../COLORS";
import ScrollTop from "../components/ScrollTop";

import { educationList, achievementList } from "../data/educationdata";

const EducationCard = ({ degree, university, location, score }) => {
  return (
    <div
      className="card custom-card w-75 custom-edu-card my-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="card-header text-center">
        <h5 className="card-title mb-0 font-weight-bold education-degree">
          {degree}
        </h5>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-center justify-content-center my-1">
            <FontAwesomeIcon
              icon={faUniversity}
              style={{ color: COLORS.button, marginRight: 10 }}
              size="1x"
            />
            <h6 className="mb-0 lead edu-info">{university}</h6>
          </div>
          <div className="d-flex align-items-center my-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: "#EA4335", marginRight: 10 }}
              size="1x"
            />
            <span className="lead edu-info">{location}</span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon
            icon={faCertificate}
            style={{ color: "#FFD700", marginRight: 10 }}
            size="1x"
          />
          <h6 className="mb-0 lead edu-info">{score}</h6>
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
          <p className="card-text mt-4 text-justify lead achievement-desc">
            {description}
          </p>
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
      <ScrollTop />
      <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center my-5">
        <div className="col-md-6 text-center">
          <div
            className="d-inline-flex flex-column align-items-center title-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="display-5 title">Education</h1>
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
            height="400"
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
      <div className="row d-flex flex-column-reverse flex-md-row justify-content-around align-items-center my-5 achievement-container">
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
            <h1 className="display-5 title">Achievements</h1>
            <div className="custom-header-divider" />
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap mt-5 justify-content-center">
        {achievementList.map((item, index) => (
          <AchievementCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            buttonLabel={item.buttonLabel}
            url={item.url}
            style={item.style}
          />
        ))}
      </div>
      <ScrollTop />
    </div>
  );
};

export default Education;
