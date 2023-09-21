import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./SearchCoin.css";

const SearchCoin = ({ callback }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        label="Coin Name"
        variant="outlined"
        type="text"
        onChange={changeHandler}
        value={input}
      />
      <Button variant="contained" onClick={() => callback(input)}>
        Search
      </Button>
    </div>
  );
};

export default SearchCoin;
