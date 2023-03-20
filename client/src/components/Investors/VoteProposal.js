function VoteProposal({state,account}){
  async function Votefunc(event) {
    event.preventDefault();
    const {contract} = state;
    const proposalId = document.querySelector("#voteId").value;
    try {
      await contract.methods.voteProposal(proposalId).send({ from:account,gas:"1000000" });
      alert("Vote successful");
        window.location.reload();
    } 
    catch (error) {
      alert(error);
    }
  }
    return<><form  onSubmit={Votefunc}>
     <label className="label1" htmlFor="voteId">
      Proposal Id:
        </label>
    <input type="text" id="voteId"></input>
    <button type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;