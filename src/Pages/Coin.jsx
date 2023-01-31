import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading/Loading";

function Coin() {
  let { coinID } = useParams();
  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
      .then((res) => {
        setCoinData(res.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, [coinID]);

  return (
    <>
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
        {loading ? (
          <>
            <Card
              sx={{
                maxWidth: 500,
                height: "auto",
                mx: "auto",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100%"
                  height="auto"
                  image={coinData?.image?.large}
                  alt="green iguana"
                  sx={{
                    maxWidth: 300,
                    maxHeight: 300,
                    objectFit: "contain",
                    mx: "auto",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {coinData.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {"Category: "}
                    {coinData?.categories?.[0]}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "3",
                      fontSize: "18px",
                      my: 2,
                    }}
                  >
                    {coinData.description?.en}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontWeight: 600,
                      color: "#3ac63d",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {"$ "}
                    {coinData?.market_data?.current_price?.usd.toLocaleString()}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Link to="/">
              <FastRewindIcon
                sx={{
                  position: "absolute",
                  width: 50,
                  height: 50,
                  top: 50,
                  left: 50,
                  fill: "#3293f0",
                  cursor: "pointer",
                  "&.MuiSvgIcon-root:hover": {
                    fill: "#000",
                  },
                }}
              />
            </Link>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </Box>
      )
    </>
  );
}

export default Coin;
