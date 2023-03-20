function WithdrawAmount({state,account}){
   async function withdrawAll() {
      const {contract}=state;
      try {
        await contract.methods.withdrawAllEther().send({ from:account,gas:"1000000" });
        alert("withdraw successful");
          window.location.reload();
      } 
      catch (error) {
        alert(error);
      }
   }
   
    return<>
 
    <button type="submit" onClick={withdrawAll} >Withdraw</button>
    </>
    
   }
   export default WithdrawAmount;