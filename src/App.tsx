import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";

function App() {
  const providerUrl = new Web3(Web3.givenProvider);

  useEffect(() => {
    const provider = window?.ethereum;
    if (typeof provider !== "undefined") {
      provider
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts: any) => {
          console.log(accounts, "accounts");
        })
        .catch((err: Error) => {
          console.log(err);
        });

      window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
        console.log(accounts, "lll");
      });
    }
  }, []);
  return <div className="App"></div>;
}

export default App;
