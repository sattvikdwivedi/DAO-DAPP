function WithdrawSatus({state,account}){

    return<><form>
    <label className="label1" htmlFor="address">
      Address:
        </label>
    <input type="text" className="address"></input>
    <button type="submit">Allow</button>
    </form><br></br>
    
    <form >
    <label className="label1" htmlFor="address">
     Address:
        </label>
    <input type="text" className="address"></input>
    <button type="submit">Disallow</button>
    </form><br></br></>
   }
   export default WithdrawSatus;