function CreateProposal({state,account}){
   
    return<><form >
    <label className="label1" htmlFor="name">
        Description: 
    </label>
    <input type="text" id="name"></input>
    <label className="label1" htmlFor="amount">
         Amount Neeed(in Wei): 
        </label>
    <input type="text" id="amount1"></input>
    <label className="label1" htmlFor="recipient">
       Recipient Address
        </label>
    <input type="text" id="recipient"></input>
    <button type="submit">Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;