import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      console.log("Visible");
      setVisible(true);
    } else {
      console.log("Not Visible");
      setVisible(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div id="btn-back-to-top" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="1x" />
      </div>
    )
  );
};

export default ScrollTop;
