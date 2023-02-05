function WithdrawAmount({state,account}){
   
    return<><form>
    <label className="label1" htmlFor="amount">
     Amount to withdraw:
        </label>
     <input type="text" id="amount"></input>
    <button type="submit">Withdraw</button>
    </form><br></br></>
    
   }
   export default WithdrawAmount;