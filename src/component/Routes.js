import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import CryptoTable from "./CryptoTable";
import CryptoDetails from "./CryptoDetails";

const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoTable />}></Route>
        <Route path="/details/:cryptoId" element={<CryptoDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;
