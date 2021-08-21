import React from "react";
import Icons from "../components/Icons";

const ContactInfo = ({ icon, tooltip, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Icons src={icon} tooltip={tooltip} size="45" />
    </a>
  );
};

export default ContactInfo;
