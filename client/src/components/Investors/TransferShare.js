function TransferShare({state,account}){
   
    return<><form >
    <label className="label1" htmlFor="to">
         Amount: 
        </label>
    <input type="text" id="to"></input>
    <label className="label1" htmlFor="amount">
       Address:
        </label>
    <input type="text" id="amount"></input>
    
    <button type="submit">Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;