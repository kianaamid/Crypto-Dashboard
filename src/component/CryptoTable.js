import Axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CryptoTable.css";
import CryptoDetails from "./CryptoDetails";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoId, setCryptoId] = useState("");
  const fetchData = () => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    ).then((response) => {
      setCryptoData(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleLink = (clickedId) => {
    return setCryptoId(clickedId);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td>
                <div>
                  <img src={crypto.image} height="20" width="20" />
                  <Link to={`./details/${crypto.id}`}>
                    <span
                      style={{ fontSize: "16px" }}
                      onClick={() => {
                        handleLink(crypto.id);
                      }}
                    >
                      {" "}
                      {crypto.name}{" "}
                    </span>
                  </Link>

                  <span style={{ fontSize: "12px" }}>
                    {crypto.symbol.toUpperCase()}
                  </span>
                </div>
              </td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td>${crypto.market_cap.toLocaleString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
