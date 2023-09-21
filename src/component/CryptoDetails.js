import { useLocation } from "react-router-dom";
import * as React from "react";
import { Typography, Grid } from "@mui/material";
import "./CryptoDetails.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CryptoDetails = () => {
  const location = useLocation();
  const { rowData } = location.state || {};

  return (
    <div>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Details</Typography>
        </Breadcrumbs>
      </div>
      <div className="Details">
        <h2>Information</h2>
        <p>Rank #{rowData.market_cap_rank}</p>
        {rowData && (
          <div>
            <img
              src={rowData.image}
              alt={`${rowData.name} Logo`}
              height="25"
              width="25"
            />
            {`${rowData.name} (${rowData.symbol.toUpperCase()})`}
          </div>
        )}
      </div>
      <div className="gridDetails">
        <Grid container spacing={1}>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Market Cap</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.market_cap.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Circulating Supply</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.circulating_supply.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Total Volume</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.total_volume.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Total Supply</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.total_supply.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Fully Diluted Valuation</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.fully_diluted_valuation.toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant="body1">Max Supply</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">
              ${rowData.max_supply.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CryptoDetails;
