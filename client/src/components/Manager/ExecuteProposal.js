function ExecuteProposal({state,account}){
  async function Execute(event) {
    event.preventDefault();
    const {contract} = state;
    const Id= document.querySelector("#id").value;
    try {
      await contract.methods.executeProposal(Id).send({ from:account,gas:"1000000" });
      alert("Execute successfully");
        window.location.reload();
    } 
    catch (error) {
      alert(error);
    }
  }
    return<><form onSubmit={Execute}>
    <label className="label1" htmlFor="amount">
      Proposal Id:
        </label>
    <input type="text" id="id"></input>
    <button type="submit">Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;