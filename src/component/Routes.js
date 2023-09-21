import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoTable from "./CryptoTable";
import CryptoDetails from "./CryptoDetails";
import SearchCoin from "./SearchCoin";
import React, { useState } from "react";

const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoTable />}></Route>
        <Route path="/details/:cryptoId" element={<CryptoDetails />}></Route>
        <Route path="/search" element={<SearchCoin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;
