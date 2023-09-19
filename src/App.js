import "./App.css";
import CryptoTable from "./component/CryptoTable";
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
