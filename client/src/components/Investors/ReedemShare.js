function ReedemShare({state,account}){
    async function Redeemfunc(event) {
        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#amount").value.toString();
        try {
          await contract.methods.reedemShare(amount).send({ from:account,gas:"1000000" });
          alert("Reedem successful");
            window.location.reload();
        } 
        catch (error) {
          alert(error);
        }
      }

    return<><form onSubmit={Redeemfunc}>
         <label className="label1" htmlFor="amount">
      Number of Shares:
        </label>
    <input type="text" id="amount"></input>

    <button type="submit">Reedem Share</button>
    </form><br></br></>
}

export default ReedemShare;