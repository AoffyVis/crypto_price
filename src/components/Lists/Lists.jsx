import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function Lists(props) {
  const fontStyle = {
    minWidth: "200px",
    fontSize: "18px",
    fontWeight: 600,
    color: "blueviolet",
  };

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 3,
      }}
    >
      {props.coinLists.map((coin) => {
        return (
          <div key={coin.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "right",
                width: "100%",
              }}
            >
              <img
                src={coin.image}
                alt="coin"
                style={{ width: 30, height: 30 }}
              />
              <Typography sx={fontStyle}>{coin.name}</Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                }}
              >
                {"$ "}
                {coin.current_price.toLocaleString()}
              </Typography>
              <Typography sx={fontStyle}>
                {coin.total_volume.toLocaleString()}
              </Typography>
              <Link to={`/coin/${coin.id}`}>
                <InfoIcon
                  color="primary"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                />
              </Link>
            </Box>
            <Divider />
          </div>
        );
      })}
    </Box>
  );
}

export default Lists;
