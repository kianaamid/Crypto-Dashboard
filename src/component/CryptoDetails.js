import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CryptoTable.css";

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const fetchDetails = () => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchDetails();
  }, [cryptoId]);

  return (
    <div>
      <p>What is {cryptoId} ?</p>
      <p>Who created {cryptoId}</p>
      <p>How does {cryptoId} work?</p>
      <p>{cryptoId} Mining</p>
    </div>
  );
};
export default CryptoDetails;
