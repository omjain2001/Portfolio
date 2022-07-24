import React from "react";
import { experienceSVG, PASCLogo, SOLLogo, dwebboxLogo } from "../assets";
import ScrollTop from "../components/ScrollTop";

const Experience = () => {
  return (
    <div className="container text-center">
      <ScrollTop />
      <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center my-5">
        <div className="col-md-6 mr-0 ml-0">
          <div
            className="d-inline-flex flex-column align-items-center title-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="display-5 title">Experience</h1>
            <div className="custom-header-divider" />
          </div>
        </div>
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={experienceSVG}
            alt="Graduation"
            height="400"
            width="80%"
            className="title-img"
          />
        </div>
      </div>
      <div
        className="domain-title font-weight-bold"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Internships
      </div>
      <div
        className="row card custom-card my-5 d-flex flex-column flex-lg-row experience-card content-row"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-lg-2">
          <div className="card-body text-center">
            <img
              src={dwebboxLogo}
              alt="Logo"
              height="20%"
              width="100%"
              className="experience-card-logo"
            />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="card-body px-0">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
              <h5 className="card-title font-weight-bold mb-0 experience-title">
                Full Stack Developer Intern
              </h5>
              <span
                style={{ fontSize: 15, color: "skyblue" }}
                className="exp-duration"
              >
                Sept 2021 - March 2022
              </span>
            </div>
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center">
              <cite className="cite exp-company">D-WebBox</cite>
              <span
                style={{ fontSize: 15, color: "skyblue" }}
                className="exp-location"
              >
                Work from home
              </span>
            </div>
            <p className="mt-4 lead exp-body text-justify">
              I worked on the company's official website to improve UI and
              animations. I have built an admin panel that helps the admins to
              add data which will be dynamically rendered on webpage. Integrated
              CKEditor tool that allows the admins to style their data. I have
              built robust mobile application UI screens using React Native.
              Integrated API endpoints with the app.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row card custom-card my-5 d-flex flex-column flex-lg-row experience-card content-row"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-lg-2">
          <div className="card-body text-center">
            <img
              src={SOLLogo}
              alt="Logo"
              height="20%"
              width="100%"
              className="experience-card-logo"
            />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="card-body px-0">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center ">
              <h5 className="card-title font-weight-bold mb-0 experience-title">
                Frontend web developer
              </h5>
              <span
                style={{ fontSize: 15, color: "skyblue" }}
                className="exp-duration"
              >
                April 2021 - May 2021
              </span>
            </div>
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center">
              <cite className="cite exp-company">Shoes on Loose Pvt. Ltd</cite>
              <span
                style={{ fontSize: 15, color: "skyblue" }}
                className="exp-location"
              >
                Work from home
              </span>
            </div>
            <p className="mt-4 lead exp-body text-justify">
              I worked on the project based on supply-chain management. I have
              made useful components which helps to quickly add
              customer,vendor,etc. I also contributed in code cleaning process
              thereby making the flow smooth and efficient. Technology tools
              used were React, Redux, Material UI, etc.
            </p>
          </div>
        </div>
      </div>
      <div
        className="domain-title font-weight-bold mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Volunteer
      </div>
      <div
        className="row card custom-card text-left my-5 d-flex flex-column flex-lg-row experience-card content-row"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-lg-2">
          <div className="card-body text-center">
            <img
              src={PASCLogo}
              className="experience-card-logo"
              alt="Logo"
              height="20%"
              width="100%"
            />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="card-body px-0">
            <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
              <h5 className="card-title font-weight-bold mb-0 experience-title">
                PICT ACM Student Chapter (PASC)
              </h5>
              <span
                style={{ fontSize: 15, color: "skyblue" }}
                className="exp-duration"
              >
                Aug 2019 - present
              </span>
            </div>
            <p className="mt-4 lead exp-body text-justify">
              I got an opportunity to take SIG on competitve programming. I have
              contributed in creating website for our annual techfest "Pulzion".
              I have also contributed in developing PASC's official website.
              Besides, I attend sessions by our alumni and other industry
              experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
