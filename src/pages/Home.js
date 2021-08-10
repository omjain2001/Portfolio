import React, { useEffect, useRef } from "react";
import {
  profileSVG,
  html5,
  bootstrap,
  react,
  redux,
  cpp,
  java,
  python,
  javascript,
  mongodb,
  firebase,
  mysql,
  nodejs,
  github,
  linkedin,
  gmail,
} from "../assets";

import { typedInfo, bio } from "../info.js";

// // Frontend tech logos
// import html5 from "../assets/html5.svg";
// import bootstrap from "../assets/bootstrap-4.svg";
// import react from "../assets/react.svg";
// import redux from "../assets/redux.svg";

// // Programming languages logos
// import c from "../assets/c.svg";
// import java from "../assets/java.svg";
// import python from "../assets/python.svg";
// import javascript from "../assets/javascript.svg";

// // Database logos
// import mongodb from "../assets/mongodb.svg";
// import firebase from "../assets/firebase.svg";
// import mysql from "../assets/mysql.svg";

// // Backend tech logos
// import nodejs from "../assets/nodejs.svg";

// // Contact icons
// import github from "../assets/github.svg";
// import linkedin from "../assets/linkedin_logo.svg";
// import gmail from "../assets/gmail_logo.svg";

import Lottie from "react-lottie";
import webDevAnimationData from "../lotties/web_development.json";
import appDevAnimationData from "../lotties/app_development.json";
import databaseAnimationData from "../lotties/database.json";
import programmingLanguagesAnimationData from "../lotties/programming_languages.json";
import Icons from "../components/Icons";
import { COLORS } from "../COLORS";
import ContactInfo from "../components/ContactInfo";

import Typed from "typed.js";
import ParticlesBackground from "../components/ParticlesBackground";
import ScrollTop from "../components/ScrollTop";

const whatIDo = {
  webDev: {
    label: "Web Technologies",
    icons: {
      Frontend: [
        { src: html5, tooltip: "HTML5" },
        { src: bootstrap, tooltip: "Bootstrap" },
        { src: react, tooltip: "React" },
        { src: redux, tooltip: "Redux" },
      ],
      Backend: [{ src: nodejs, tooltip: "Nodejs" }],
    },
    subLabels: ["Frontend", "Backend"],
    animationData: webDevAnimationData,
  },
  appDev: {
    label: "App Technologies",
    icons: [{ src: react, tooltip: "React Native" }],
    subLabels: null,
    animationData: appDevAnimationData,
  },
  database: {
    label: "Database System",
    icons: [
      { src: mongodb, tooltip: "MongoDB" },
      { src: firebase, tooltip: "Firebase" },
      { src: mysql, tooltip: "MySQL" },
    ],
    subLabels: null,
    animationData: databaseAnimationData,
    customizeAnimation: {
      height: "60%",
    },
  },
  programmingLanguages: {
    label: "Programming Languages",
    icons: [
      { src: cpp, tooltip: "C++" },
      { src: java, tooltip: "Java" },
      { src: python, tooltip: "Python" },
      { src: javascript, tooltip: "Javascript" },
    ],
    subLabels: null,
    animationData: programmingLanguagesAnimationData,
    // customizeAnimation: {
    //   height: 400,
    // },
  },
};

const contactList = [
  {
    icon: github,
    tooltip: "Github",
    url: "https://github.com/omjain2001",
  },
  {
    icon: linkedin,
    tooltip: "Linkedin",
    url: "https://linkedin.com/in/om-jain-981752197",
  },
  {
    icon: gmail,
    tooltip: "Email",
    url: "mailto:email@omjain2606@gmail.com",
  },
];

const LottieAnimation = ({ animationData, customizeAnimation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      height="auto"
      width="80%"
      options={defaultOptions}
      isClickToPauseDisabled={true}
      {...customizeAnimation}
    />
  );
};

const DomainInfo = ({
  label,
  index,
  icons,
  subLabels,
  animationData,
  customizeAnimation,
}) => {
  return (
    <div
      className={`row d-flex ${
        index % 2 === 0 ? "flex-column-reverse px-0" : ""
      } flex-lg-row justify-content-center my-5 align-items-center`}
    >
      {index % 2 !== 0 && (
        <div
          className="col-lg-6 d-flex align-items-center custom-lottie-animation px-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <LottieAnimation
            animationData={animationData}
            customizeAnimation={customizeAnimation}
          />
        </div>
      )}
      <div
        className="col-lg-6 d-flex flex-column align-items-center justify-content-center px-0"
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-duration="1000"
      >
        <div className="domain-title my-4 font-weight-bold">{label}</div>
        {subLabels ? (
          <div>
            {subLabels.map((sublabel, key) => (
              <>
                <div className="d-inline-flex flex-column align-items-center mt-4 mb-3">
                  <h5 className="domain-subtitle">{sublabel}</h5>
                  <div className="custom-header-divider" />
                </div>
                <div className=" d-flex flex-wrap align-items-center">
                  {icons[sublabel].map((item, index) => (
                    <Icons src={item.src} tooltip={item.tooltip} key={index} />
                  ))}
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className=" d-flex flex-wrap justify-content-center">
            {icons.map((item, index) => (
              <Icons src={item.src} tooltip={item.tooltip} key={index} />
            ))}
          </div>
        )}
      </div>
      {index % 2 === 0 && (
        <div
          className="col-lg-6 d-flex align-items-center px-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <LottieAnimation
            animationData={animationData}
            customizeAnimation={customizeAnimation}
          />
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const ele = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: typedInfo,
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(ele.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="container pb-5">
      <div
        className="row d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="col-lg-6 text-center">
          <div className="mx-auto">
            <h3 className="greeting">Holla everyone !</h3>
            <h1 className="name display-3 my-3 font-weight-bold">
              I'm <span style={{ color: COLORS.button }}>Om Jain</span>
            </h1>
            <h5 className="my-3">
              <div className="d-inline-block my-3 custom-typing">
                <span ref={ele}></span>
              </div>
              {/* <br />
              <div className="d-inline-block">
                🚀 Exploring ML and Cloud Computing
              </div>
              <br />
              <div className="d-inline-block my-3">⚡ MERN stack developer</div>
              <br /> */}
            </h5>
            <div className="mt-4 mb-2">
              {contactList.map((item, index) => (
                <ContactInfo
                  icon={item.icon}
                  url={item.url}
                  tooltip={item.tooltip}
                  key={index}
                />
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1xi1LhiVP_foBMHyUREHV8S0RlYwjAqxz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn mt-3">See My Resume</button>
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 my-5 my-lg-0 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={profileSVG} className="homePage-icon" alt="Home Page" />
        </div>
      </div>
      <div
        className="d-flex flex-column my-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="quotes" style={{ fontSize: 120, alignSelf: "center" }}>
          &#8220;
        </span>
        <p className="lead bio text-justify" style={{ marginTop: -50 }}>
          {bio}
        </p>

        <span className="quotes" style={{ fontSize: 120, alignSelf: "center" }}>
          &#8221;
        </span>
      </div>
      <div className="text-center" data-aos="fade-up" data-aos-animation="1000">
        <div className="d-inline-flex flex-column align-items-center mt-3 mb-5">
          <h2 className="domain-header">What I Do</h2>
          <div className="custom-header-divider" />
        </div>
      </div>
      <div className="domain">
        {Object.keys(whatIDo).map((item, index) => (
          <DomainInfo
            animationData={whatIDo[item].animationData}
            icons={whatIDo[item].icons}
            index={index}
            label={whatIDo[item].label}
            subLabels={whatIDo[item].subLabels}
            customizeAnimation={whatIDo[item].customizeAnimation}
          />
        ))}
      </div>
      {/* <ScrollTop /> */}
    </div>
  );
};

export default Home;
