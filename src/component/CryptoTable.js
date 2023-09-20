import Axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

const userTableStyles = {
  height: "900px",
};

const CryptoTable = ({ onError }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoId, setCryptoId] = useState("");
  const [page, setPage] = useState(1); // Initialize the current page

  useEffect(
    (page) => {
      Axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=${page}`
      )
        .then((response) => {
          setCryptoData(response.data);
        })
        .catch(() => onError());
    },
    [page]
  );
  const handleLink = (clickedId) => {
    return setCryptoId(clickedId);
  };
  const onPageChange = (newPage) => {
    setPage(newPage); // Update the current page when the page changes
  };
  const columns = [
    { field: "Rank", headerName: "#", width: 150 },
    {
      field: "name",
      headerName: "Coin",
      width: 500,
      renderCell: (params) => (
        <div>
          <img src={params.row.image} height="20" width="20" />
          <Link to={`./details/${params.row.id}`}>
            <span
              style={{ fontSize: "16px" }}
              onClick={() => {
                handleLink(params.row.id);
              }}
            >
              {" "}
              {params.row.name}{" "}
            </span>
          </Link>
          <span style={{ fontSize: "12px" }}>
            {params.row.symbol.toUpperCase()}
          </span>
        </div>
      ),
    },
    { field: "current_price", headerName: "Price", width: 150 },
    { field: "market_cap", headerName: "Mkt Cap", width: 200 },
  ];

  return (
    <DataTable
      rows={cryptoData}
      columns={columns}
      loading={!cryptoData.length}
      sx={userTableStyles}
    />
  );
};

export default CryptoTable;
