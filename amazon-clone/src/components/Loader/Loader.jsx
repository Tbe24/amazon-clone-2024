import React from "react";
import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    // Added return here
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#36d7b7" /> {/* Fixed the color syntax */}
    </div>
  );
}

export default Loader;
