import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ScrollTop = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="btn-back-to-top" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowAltCircleUp} size="1x" />
    </div>
  );
};

export default ScrollTop;
