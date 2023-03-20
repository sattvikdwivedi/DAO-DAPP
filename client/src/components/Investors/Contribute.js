function Contribute({ state, account }) {
  async function contributionfunc(event) {
    event.preventDefault();
    const {contract} = state;
    const weiValue = document.querySelector("#weiValue").value;
    try {
      await contract.methods.contribution().send({ from:account, value: weiValue,gas:"1000000" });
      alert("contribution successful");
        window.location.reload();
    } 
    catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <form onSubmit={contributionfunc}>  
        <label className="label1" htmlFor="weiValue">
          Contribution Amount:
        </label>
        <input type="text" id="weiValue"></input>
        <button type="submit">Contribute</button>
      </form>
      <br></br>
    </>
  );
}
export default Contribute;
