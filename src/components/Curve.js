import React from "react";
import { COLORS } from "../COLORS";

const Curve = () => {
  return (
    <div style={styles.container}>
      {/* <img src={curve} alt="Curve" style={styles.curve} /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -20 1440 320"
        height="100%"
        width="100%"
      >
        <path
          fill="#002F47"
          fill-opacity="1"
          d="M0,288L120,293.3C240,299,480,309,720,266.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1079.739"
      >
        <path
          id="curve"
          d="M0,991.767H212.928c172.914-3.569,438.822-3.113,758.822-161.7C1291.75,669.981,1600,391.913,1760,211.956L1920,32V1111.739H0Z"
          transform="translate(0 -32)"
          fill="#002f47"
        />
      </svg> */}
      {/* <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        height="100%"
        width="100%"
        preserveAspectRatio="none"
        fill="#002F47"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"
        ></path>
      </svg> */}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        width="200%"
        height="100%"
        fill="#002F47"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
};

export default Curve;

const styles = {
  container: {
    backgroundColor: COLORS.curveBG,
    height: "60vh",
    width: "100%",
    position: "absolute",
    lineHeight: 0,
    top: 0,
    left: 0,
  },
  curve: {
    // position: "relative",
    width: "100%",
    height: "10%",
  },
};
