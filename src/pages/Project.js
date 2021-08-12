import React from "react";
import {
  projectSVG,
  istriwalaImg,
  chatAppImg,
  devConnectorImg,
  react,
  firebase,
  mongodb,
  socketIo,
  redux,
  nodejs,
} from "../assets";
// import project from "../assets/home_page.svg";
// import istriwala from "../assets/istriwala.png";
// import chat_app from "../assets/chat_app.png";
// import devConnector from "../assets/devConnector.png";
// import react from "../assets/react.svg";
// import firebase from "../assets/firebase.svg";
// import mongodb from "../assets/mongodb.svg";
// import socket_io from "../assets/socket_io.svg";
// import redux from "../assets/redux.svg";
// import nodejs from "../assets/nodejs.svg";
import Icons from "../components/Icons";
import ScrollTop from "../components/ScrollTop";

const projectList = [
  {
    img: istriwalaImg,
    title: "Istriwala App",
    description:
      "This project aims to ease the work of Estreewala. It includes the features like maintaining day-to-day customer records, check pending and completed orders, check payment status, etc.",
    logos: [
      { icon: react, tooltip: "React Native" },
      { icon: firebase, tooltip: "Firebase" },
      { icon: redux, tooltip: "Redux" },
      { icon: nodejs, tooltip: "Nodejs" },
    ],
    btnLabel: "View",
    btnLink:
      "https://drive.google.com/file/d/1K3ZbUK5DfqmFolcjXT_Qhgr3uokz70pQ/view?usp=sharing",
  },
  {
    img: devConnectorImg,
    title: "DevConnector",
    description: `It is a social media platform to connect users across the world where user can post, like, comment, build profile, etc. This was a learning project under the instructor - Brad Traversy. It is developed using MERN stack.`,
    logos: [
      { icon: react, tooltip: "React" },
      { icon: redux, tooltip: "Redux" },
      { icon: nodejs, tooltip: "Nodejs" },
      { icon: mongodb, tooltip: "MongoDB" },
    ],
    btnLabel: "View",
    btnLink: "https://connect-with-world.herokuapp.com/",
  },
  {
    img: chatAppImg,
    title: "Chat App",
    description:
      "It is a real time chat application. It allows the users to join the room and chat with the users in that room. For the real-time messaging, socket.io library is used. It is learning project under the instructor - Andrew Mead",
    logos: [
      { icon: nodejs, tooltip: "Nodejs" },
      { icon: socketIo, tooltip: "Socket.io" },
    ],
    btnLabel: "Link",
    btnLink: "https://jain-chat-room.herokuapp.com/",
  },
];

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
            <a href={btnLink} target="_blank">
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
      <div className="row d-flex flex-column-reverse flex-md-row justify-content-around align-items-center my-5">
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
      <div className="row my-5 d-flex flex-column flex-md-row">
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
        <button
          className="btn mt-5 mx-auto"
          data-aos="fade-up"
          data-aos-duration="500"
          style={{ marginBottom: 100 }}
        >
          See More Projects
        </button>
      </a>
    </div>
  );
};

export default Project;
