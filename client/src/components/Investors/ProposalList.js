import { useEffect,useState } from "react";
function ProposalList({state}){
   const[lists,setlists]=useState([]);
   useEffect(()=>{
    const{contract}=state;
    async function Prosposals(){
    const data= await contract.methods.ProposalList().call();
   setlists(data);}
   contract && Prosposals();

   },[state]);


   return<>
      <table>
         <tbody> Proposal List
         {lists.map((proposal)=>{
            return (<tr key={proposal.id}>
            <td>{proposal.id}</td>
            <td>{proposal.description}</td>
            <td>{proposal.amount}</td>
            <td>{proposal.recipient}</td>
            <td>{proposal.votes}</td>
            <td>{proposal.end}</td>
            <td>{String(proposal.isExecuted)}</td>
            </tr>)
            
            
            })
          } </tbody>
      </table>
   </>
  }
  export default ProposalList;