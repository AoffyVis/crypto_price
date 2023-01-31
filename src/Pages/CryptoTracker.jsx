import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Header from "../components/Headers/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Lists from "../components/Lists/Lists";
import Loading from "../components/Loading/Loading";

function CryptoTracker() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res);
        setCoins(res.data);
        setLoading(true)
      })
      .catch((error) => console.log(error));
  }, []);

  //   useEffect(() => {
  //     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  //       .then((res) => res.json())
  //       .then((data) => setCoins(data))
  //   }, [])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  //   const filterCoins = coins.filter((coin) =>
  //     coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  //   );

  return (
    <Box
      sx={{
        maxWidth: 1280,
        width: "100%",
        minHeight: "50vh",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        p: 3,
        mt: 2,
        position: "relative",
      }}
    >
      <Header />
      <SearchBar search={handleChange} />
      {/* <Lists coinLists={coins}/> */}
      {loading ? (
        <Lists coinLists={filterCoins} />
      ) : (
        <Loading />
      )}
    </Box>
  );
}

export default CryptoTracker;
