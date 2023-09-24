// Import necessary dependencies and components from external libraries and modules
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Pagination from "@mui/material/Pagination";
import "./CryptoTable.css";
import SearchCoin from "./SearchCoin";

// Define styles for the user table
const userTableStyles = {
  height: "auto",
  margin: "auto auto",
  padding: "20px",
  width: "60%",
  border: "none",
};
// Define the CryptoTable functional component
const CryptoTable = ({ onError }) => {
  // Initialize state variables
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoId, setCryptoId] = useState("");
  const [page, setPage] = useState(1); // Initialize the current page
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Use useEffect to make an API call and fetch cryptocurrency data when the page changes
  useEffect(() => {
    Axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=${page}`
    )
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        setError(error);
        onError();
      });
  }, [page]);
  // Function to handle page change in the pagination component
  const onPageChange = (event, newPage) => {
    setPage(newPage); // Update the current page when the page changes
  };
  // Define columns for the DataTable component
  const columns = [
    { field: "market_cap_rank", headerName: "#", width: 80 },
    {
      field: "name",
      headerName: "Coin",
      width: 320,
      renderCell: (params) => (
        <div>
          <img src={params.row.image} height="20" width="20" />{" "}
          <Link
            to={`./details/${params.row.id}`}
            state={{ rowData: params.row }}
          >
            <span style={{ fontSize: "16px" }}>{params.row.name}</span>
          </Link>{" "}
          <span style={{ fontSize: "12px" }}>
            {params.row.symbol.toUpperCase()}
          </span>
        </div>
      ),
    },
    {
      field: "current_price",
      headerName: "Price",
      width: 130,
      renderCell: (params) => (
        <div>${params.row.current_price.toLocaleString("en-US")}</div>
      ),
    },
    {
      field: "market_cap",
      headerName: "Mkt Cap",
      width: 150,
      renderCell: (params) => (
        <div>${params.row.market_cap.toLocaleString("en-US")}</div>
      ),
    },
    {
      field: "total_volume",
      headerName: "Total Volume",
      width: 200,
      renderCell: (params) => (
        <div>${params.row.total_volume.toLocaleString("en-US")}</div>
      ),
    },
  ];
  // Callback function to receive search input from child component
  const callThisFromChildComponent = (value) => {
    setSearch(value);
  };

  return (
    <div className="crypto-table-container">
      <SearchCoin callback={callThisFromChildComponent} />
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
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
            count={search.toLowerCase() != "" ? 1 : 101}
            page={page}
            onChange={onPageChange}
            shape="rounded"
          />
        </div>
      )}
    </div>
  );
};
// Export the CryptoTable component as the default export
export default CryptoTable;
