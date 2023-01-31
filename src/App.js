import "./App.css";
import CryptoTracker from "./Pages/CryptoTracker";
import { Routes, Route } from "react-router-dom";
import PageAbout from "./Pages/PageAbout";
import Coin from "./Pages/Coin";
import PageError from "./Pages/PageError";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Routes>
        <Route path="/" element={<CryptoTracker />}>
          {/* <CryptoTracker /> */}
        </Route>
        <Route path="/about" element={<PageAbout />} />
        <Route path="/coin/:coinID" element={<Coin />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      {/* <CryptoTracker /> */}
    </div>
  );
}

export default App;
