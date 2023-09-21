import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Pagination from "@mui/material/Pagination";
import "./CryptoTable.css";
import SearchCoin from "./SearchCoin";

const userTableStyles = {
  height: "auto",
  margin: "auto auto",
  padding: "40px",
  width: "60%",
  border: "none",
};

const CryptoTable = ({ onError }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoId, setCryptoId] = useState("");
  const [page, setPage] = useState(1); // Initialize the current page
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=${page}`
    )
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch(() => onError());
  }, [page]);
  const onPageChange = (event, newPage) => {
    setPage(newPage); // Update the current page when the page changes
  };

  const columns = [
    { field: "market_cap_rank", headerName: "#", width: 150 },
    {
      field: "name",
      headerName: "Coin",
      width: 500,
      renderCell: (params) => (
        <div>
          <img src={params.row.image} height="20" width="20" />
          <Link
            to={`./details/${params.row.id}`}
            state={{ rowData: params.row }}
          >
            <span style={{ fontSize: "16px" }}>{params.row.name}</span>
          </Link>
          <span style={{ fontSize: "12px" }}>
            {params.row.symbol.toUpperCase()}
          </span>
        </div>
      ),
    },
    {
      field: "current_price",
      headerName: "Price",
      width: 150,
      format: (value) => value.toLocaleString("en-US"),
      format: (value) => value.toFixed(2),
    },
    {
      field: "market_cap",
      headerName: "Mkt Cap",
      width: 200,
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
  const callThisFromChildComponent = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <SearchCoin callback={callThisFromChildComponent} />
      <DataTable
        rows={cryptoData.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search.toLowerCase());
        })}
        columns={columns}
        loading={!cryptoData.length}
        sx={userTableStyles}
      />
      <Pagination
        className="pagination-container"
        count={100}
        page={page}
        onChange={onPageChange}
        shape="rounded"
      />
    </div>
  );
};

export default CryptoTable;
