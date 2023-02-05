import WithdrawStatus from "./WithdrawStatus";
import ExecuteProposal from "./ExecuteProposal";

function Manager({state,account}) {
    return <> 
    <ExecuteProposal state={state} account={account}></ExecuteProposal>
    <WithdrawStatus state={state} account={account}></WithdrawStatus>
    </>
 

}
export default Manager;