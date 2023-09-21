import { useParams, useLocation } from "react-router-dom";
import "./CryptoDetails.css";
import * as React from "react";

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const location = useLocation();

  const { rowData } = location.state || {};

  return (
    <div className="Details">
      <h2>Info</h2>
      {rowData && (
        <div>
          <h3>{rowData.name}</h3>
          {/* Display other details from rowData as needed */}
        </div>
      )}
    </div>
  );
};

export default CryptoDetails;
