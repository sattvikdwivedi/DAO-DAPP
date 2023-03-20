 import { useState,useEffect} from "react";
function InvestorList({state}){
   const[data,setdata]=useState([]);
   useEffect(()=>{
      const{contract}=state;
   async function list(){
      const lists=await contract.methods.investorsLists().call();
       setdata(lists);
      }
      contract && list();
   },[state]);

   return<>
   <table> InvestorList
      <tbody>{
         data.map((investorAddress)=>{
            return  <tr key={investorAddress}>{investorAddress}</tr>
         })
      }
      </tbody> 
   </table> 
   </>
  }
  export default InvestorList;