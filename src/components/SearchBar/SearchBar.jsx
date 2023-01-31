import React from "react";
import { TextField } from "@mui/material";

function SearchBar(props) {
  return (
    <TextField
      fullWidth
      placeholder="Example: btc"
      size="small"
      type="text"
      InputLabelProps={{
        shrink: false,
      }}
      sx={{
        width: "50%",
        minHeight: "42px",
        background: "#F7F7F8",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        color: "#89939C",
        mx: "auto",
      }}
      onChange={props.search}
    />
  );
}

export default SearchBar;
