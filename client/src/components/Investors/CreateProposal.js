function CreateProposal({state,account}){
 
    async function Proposal(event){
        event.preventDefault();
    const {contract}=state;
    // const amount=document.querySelector("#amount").value;
    const description=document.getElementById("name").value;
    const amount=document.getElementById("amount1").value;
    const recipient=document.getElementById("recipient").value;
    try{
    await contract.methods.createProposal(description,amount,recipient).send({from:account,gas:"1000000"});
    alert("Proposal Created");
    window.location.reload();
          }
    catch(error){
        alert(error);
    }
    }


   
    return<><form onSubmit={Proposal}  >
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