import React from "react";
import { projectSVG } from "../assets";
import Icons from "../components/Icons";
import ScrollTop from "../components/ScrollTop";
import { projectList } from "../data/projectdata";

const ProjectCard = ({ img, title, description, logos, btnLabel, btnLink }) => {
  return (
    <div
      className="col-md-6 col-lg-4 my-3 project-col"
      style={{ maxHeight: "fit-content !important" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="card custom-card border-0">
        <img
          className="card-img-top project-img"
          src={img}
          alt="Istriwala project"
          height="200"
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-center project-title">
            {title}
          </h5>
          <div>
            <p className="card-text my-4 text-justify project-desc lead">
              {description}
            </p>
          </div>
          <div className="d-flex flex-wrap project-icons">
            {logos.map((item, index) => (
              <Icons
                src={item.icon}
                tooltip={item.tooltip}
                size={32}
                key={index}
              />
            ))}
          </div>
          <div className="text-right">
            <a href={btnLink} target="_blank" rel="noreferrer">
              <button className="btn mt-4">{btnLabel}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="container text-center">
      <ScrollTop />
      <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center my-5">
        <div className="col-md-6">
          <div
            className="d-inline-flex flex-column align-items-center title-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="display-5 title">Projects</h1>
            <div className="custom-header-divider" />
          </div>
        </div>
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={projectSVG}
            alt="Graduation"
            height="400"
            width="80%"
            className="title-img"
          />
        </div>
      </div>
      <div className="row my-5 d-flex flex-column flex-md-row content-row">
        {projectList.map((item, index) => (
          <ProjectCard
            img={item.img}
            title={item.title}
            description={item.description}
            btnLabel={item.btnLabel}
            btnLink={item.btnLink}
            logos={item.logos}
            key={index}
          />
        ))}
      </div>
      <a href="https://github.com/omjain2001" target="_blank" rel="noreferrer">
        <button className="btn " style={{ marginBottom: 50 }}>
          See More Projects
        </button>
      </a>
    </div>
  );
};

export default Project;
