import { useState, useEffect } from "react";
import Web3 from "web3";
import DAO from "./contracts/DAO.json";
import "./App.css";
import Investors from "./components/Investors/Investors";
import Manager from "./components/Manager/Manager";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  
  useEffect(() => {
    async function init() {
      const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
      const web3 = new Web3(provider);
      //console.log(web3);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = DAO.networks[networkId];
    
      const contract = new web3.eth.Contract(
       DAO.abi,
        deployedNetwork.address
      );
      //console.log(contract);
      setState({ web3: web3, contract: contract });
    }
    init();
  }, []);

  useEffect(() => {
    const { web3 } = state;
    const allAccounts = async () => {
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [state]);
  const selectAccount = async () => {
    let selectedAccountAddress = document.getElementById("selectNumber").value;

    if (
      selectedAccountAddress &&
      selectedAccountAddress !== "Choose an account"
    ) {
      setAccount(selectedAccountAddress);
    }
  };
  
  return (
    <div className="App">
   <p className="ca">Connected Account:{account}</p>
   <p className="ca">Available Funds:0 ETH</p>
   <form className="label0" id="myForm">
        <label htmlFor="">Choose an account</label>
        <select className="innerBox" id="selectNumber" onChange={selectAccount}>
          <option></option>
        </select>
      </form>
      <p>For Manager Only</p>
      <Manager state={state} account={account}></Manager>
      <p>For Investors Only</p>
     <Investors state={state} account={account}></Investors>
    
    </div>
  );
}
export default App;