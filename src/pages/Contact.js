import React from "react";
import { contactEnvelopSVG } from "../assets";
import ContactInfo from "../components/ContactInfo";
import ScrollTop from "../components/ScrollTop";
import { contactDesc } from "../info";
import { contactList } from "../data/contactdata";
import { gmail, address } from "../assets";
import Icons from "../components/Icons";

const Contact = () => {
  return (
    <div
      className="container contact-container"
      // style={{ height: "90vh" }}
    >
      <ScrollTop />
      <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center my-5">
        <div
          className="col-md-6 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={contactEnvelopSVG}
            alt="Graduation"
            height="300"
            width="80%"
            className="title-img"
          />
        </div>
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1000">
          <div className="d-flex flex-column align-items-center title-container">
            <h3 className="display-5 font-weight-bold my-4 contact-title">
              Feel free to contact me
            </h3>
            <h5
              style={{ lineHeight: 1.5, textAlign: "justify" }}
              className="contact-body"
            >
              {contactDesc}
            </h5>
            <div className="mt-5 w-100 text-center mb-5 contact-list">
              <h4 className="text-center mb-3">Get in touch !</h4>
              {contactList.map((item, index) => (
                <ContactInfo
                  icon={item.icon}
                  url={item.url}
                  tooltip={item.tooltip}
                  key={index}
                />
              ))}
              <div
                className="d-flex align-items-center mt-4 contact-info"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Icons src={gmail} size="40" tooltip="Email" />
                <h5 className="mb-0 ml-3 lead">omjain2606@gmail.com</h5>
              </div>
              <div
                className="d-flex align-items-center contact-info"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Icons src={address} size="40" tooltip="Address" />
                <h5 className="mb-0 ml-3 lead">
                  Raleigh, North Carolina, United States
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
