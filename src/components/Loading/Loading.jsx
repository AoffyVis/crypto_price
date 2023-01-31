import React from "react";
import logo from "../../logo.svg";

function Loading() {
  return (
    <>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
        }}
      />
      <h2 style={{ textAlign: "center" }}>Loading. . .</h2>
    </>
  );
}

export default Loading;
