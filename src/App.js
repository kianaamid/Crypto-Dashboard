import "./App.css";
import React, { useState } from "react";

import Header from "./component/Header";
import RouterPages from "./component/Routes";

function App() {
  return (
    <div>
      <Header />
      <RouterPages />
    </div>
  );
}

export default App;
