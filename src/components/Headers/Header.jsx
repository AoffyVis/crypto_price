import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          color: "#324586",
          my: 3,
        }}
      >
        CryptoSearch
      </Typography>
      <Link to="/about">
        <Typography
          variant="p"
          className="aboutBtn"
          sx={{
            position: "absolute",
            top: 0,
            right: 50,
            textAlign: "center",
            fontWeight: 600,
            color: "#324586",
            my: 3,
            p: 1,
            border: "2px solid #324586",
            borderRadius: "6px",
            cursor: "pointer",
            "&.aboutBtn:hover": {
              color: "white",
              border: "2px solid #FFFFFF",
              background: "#324586",
            },
          }}
        >
          About
        </Typography>
      </Link>
    </>
  );
}

export default Header;
