import React from "react";
import { Box } from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Link } from "react-router-dom";

function PageError() {
    return (
        <Box
          sx={{
            maxWidth: 1280,
            width: "100%",
            minHeight: "75vh",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            p: 3,
            mt: 2,
            position: "relative",
          }}
        >
          <Link to="/">
            <FastRewindIcon
              sx={{
                position: "absolute",
                width: 50,
                height: 50,
                left: 50,
                fill: "red",
                cursor: "pointer",
                "&.MuiSvgIcon-root:hover": {
                    fill: "#000"
                }
              }}
            />
          </Link>
          <h1 style={{ textAlign: "center", color: "red", marginBottom: "16px" }}>ERROR Page!!!!</h1>
        </Box>
      );
}

export default PageError