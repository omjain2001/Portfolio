import React, { useEffect, useRef } from "react";
import { profileSVG } from "../assets";
import { whatIDo } from "../data/homedata.js";
import { contactListHomePage } from "../data/contactdata.js";

import { typedInfo, bio } from "../info.js";

import Lottie from "react-lottie";
import Icons from "../components/Icons";
import { COLORS } from "../COLORS";
import ContactInfo from "../components/ContactInfo";

import Typed from "typed.js";
import ScrollTop from "../components/ScrollTop";

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
        index % 2 === 0 ? "" : "flex-column-reverse px-0"
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
          className="col-lg-6 d-flex align-items-center px-0 custom-lottie-animation"
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
      <ScrollTop />
      <div
        className="row d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row homepage-row"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="col-lg-6 text-center">
          <div className="mx-auto">
            <h3 className="greeting">Holla everyone!</h3>
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
            <div className="mt-4 mb-2 contact-info">
              {contactListHomePage.map((item, index) => (
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
        <span
          className="quotes upquote"
          style={{ fontSize: 120, alignSelf: "center" }}
        >
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
    </div>
  );
};

export default Home;
