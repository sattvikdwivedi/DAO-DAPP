function WithdrawSatus({state,account}){
  async function Allow(event) {
    event.preventDefault();
    const {contract} = state;
    const address = document.querySelector(".address").value;
    try {
      await contract.methods.allow(address).send({ from:account,gas:"1000000" });
      alert("Allowed successfully");
        window.location.reload();
    } 
    catch (error) {
      alert(error);
    }
  }
  async function Disallow(event) {
    event.preventDefault();
    const {contract} = state;
    const address= document.querySelector(".address").value;
    try {
      await contract.methods.disallow(address).send({ from:account,gas:"1000000" });
      alert("Disallowed successfully");
        window.location.reload();
    }
    catch (error) {
      alert(error);
    }
  }

    return<><form onSubmit={Allow}>
    <label className="label1" htmlFor="address">
      Address:
        </label>
    <input type="text" className="address"></input>
    <button type="submit">Allow</button>
    </form><br></br>
    
    <form  onSubmit={Disallow}>
    <label className="label1" htmlFor="address">
     Address:
        </label>
    <input type="text" className="address"></input>
    <button type="submit">Disallow</button>
    </form><br></br></>
   }
   export default WithdrawSatus;