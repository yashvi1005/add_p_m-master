import "./App.css";
import List from "./components/List";
import { createContext, useState } from "react";

export const noteContext = createContext();

function App() {
  const [open1, setOpen1] = useState(false);
  const [currentData, setcurrentData] = useState({
    
  });
  const [data, setdata] = useState({
    packagename: "",
    description: "",
    packagetype: "",
    trialdays: "",
  });

  const [currency, setcurrency] = useState([
    {
      packageCurrency: "",
      intervalType: "",
      price: "",
      id: 0,
    },
  ]);
  return (
    <noteContext.Provider
      value={{
        open1,
        setOpen1,
        data,
        setdata,
        currency,
        setcurrency,
        currentData,
        setcurrentData,
      }}
    >
      <List />
    </noteContext.Provider>
  );
}

export default App;
