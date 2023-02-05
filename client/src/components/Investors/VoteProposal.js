function VoteProposal({state,account}){
   
    return<><form >
     <label className="label1" htmlFor="voteId">
      Proposal Id:
        </label>
    <input type="text" id="voteId"></input>
    <button type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;