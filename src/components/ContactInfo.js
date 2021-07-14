import React from "react";
import Icons from "../components/Icons";

const ContactInfo = ({ icon, tooltip, url }) => {
  return (
    <a href={url} target="_blank">
      <Icons src={icon} tooltip={tooltip} size="35" />
    </a>
  );
};

export default ContactInfo;
