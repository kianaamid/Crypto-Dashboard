// Import necessary dependencies from external libraries and modules
import { useLocation } from "react-router-dom";
import * as React from "react";

import "./CryptoDetails.css"; // Import the CSS file for styling

// Import icons and components from Material-UI
import { Typography, Grid } from "@mui/material";
import Link from "@mui/material/Link";

// Define the CryptoDetails functional component
const CryptoDetails = () => {
  // Get the current location using react-router's useLocation hook
  const location = useLocation();
  // Destructure rowData from the location state, default to an empty object if not present
  const { rowData } = location.state || {};
  // Check if rowData is available
  if (rowData) {
    return (
      // Render cryptocurrency details if rowData is available
      <div>
        <div className="Details">
          <h2>Information</h2>
          <p>Rank #{rowData.market_cap_rank}</p>
          {rowData && (
            <div>
              <img
                src={rowData.image}
                alt={`${rowData.name} Logo`}
                height="30"
                width="30"
              />
              <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                {rowData.name}{" "}
              </span>
              <span style={{ color: "green" }}>
                {" "}
                {rowData.symbol.toUpperCase()}
              </span>
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
  } else {
    // Render an error message if rowData is not available
    return (
      <div>
        <p>Error: No data available for this cryptocurrency.</p>
        <Link underline="hover" color="inherit" href="/">
          Back to Home
        </Link>
      </div>
    );
  }
};
// Export the CryptoDetails component as the default export
export default CryptoDetails;
