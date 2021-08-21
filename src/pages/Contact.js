import React from "react";
import { contactEnvelopSVG } from "../assets";
import ContactInfo from "../components/ContactInfo";
import ScrollTop from "../components/ScrollTop";
import { contactDesc } from "../info";
import { contactList } from "../data/contactdata";

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
              Always feel free to ask
            </h3>
            <h5
              style={{ lineHeight: 1.5, textAlign: "justify" }}
              className="contact-body"
            >
              {contactDesc}
            </h5>
            <div className="mt-5">
              {contactList.map((item, index) => (
                <ContactInfo
                  icon={item.icon}
                  url={item.url}
                  tooltip={item.tooltip}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
