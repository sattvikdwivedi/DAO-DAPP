import Contribute from "./Contribute";
import CreateProposal from "./CreateProposal";

import TransferShare from "./TransferShare";
import ReedemShare from "./ReedemShare"
import VoteProposal from "./VoteProposal"
import WithdrawAmount from "./WithdrawAmount"
import InvestorList from "./InvestorList";
import ProposalList from "./ProposalList";
function Investors({state,account}) {
    return <> 
    <Contribute state={state} account={account}></Contribute>
    <CreateProposal state={state} account={account}></CreateProposal>
    <TransferShare state={state} account={account}></TransferShare>
    <ReedemShare state={state} account={account}></ReedemShare>
    <VoteProposal state={state} account={account}></VoteProposal>
    <WithdrawAmount state={state} account={account}></WithdrawAmount>
    <InvestorList state={state}></InvestorList>
    <ProposalList state={state}></ProposalList>
    </>
 

}
export default Investors;