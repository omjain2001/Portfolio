import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Icons = ({ src, tooltip, size }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="tooltip custom-tooltip" {...props}>
      {tooltip}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 200, hide: 200 }}
      overlay={renderTooltip}
    >
      <img
        src={src}
        height={size ? size : 45}
        width={size ? size : 45}
        alt="Frontend icons"
        style={{ margin: 10, cursor: "pointer" }}
        className="icons"
      />
    </OverlayTrigger>
  );
};

export default Icons;
