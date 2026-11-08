import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import { portfolioData } from "./data/portfolioData";

const GAS_URL = "https://script.google.com/macros/s/AKfycbzTdCS6meW5FU4-KpZnriK910qSOopUvUYUdigMbXZ-C23G5AHq9P7p1OaUPnZOCKd6/exec";

const App = () => {
  const [data, setData] = useState(portfolioData);

  useEffect(() => {
    console.log("useEffect triggered: Attempting to fetch cloud data...");

    fetch(GAS_URL)
      .then((res) => {
        console.log("HTTP Response status:", res.status);
        return res.json();
      })
      .then((result) => {
        console.log("Parsed Cloud Result:", result);
        if (result && result.status === "success" && result.portfolioData) {
          setData(result.portfolioData);
          console.log("State updated with Cloud Data successfully!");
        } else {
          console.warn("Cloud data format was invalid, using fallback.");
        }
      })
      .catch((err) => {
        console.error("Fetch Error caught:", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/admin" element={<Admin data={data} setData={setData} GAS_URL={GAS_URL} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;