// SPDX-License-Identifier: GPL-3.0
pragma solidity >0.5.0 <0.9.0;

contract DAO {
  
  struct Proposal{
    uint id;
    string description;
    uint amount;
    address payable recipient;
    uint votes;
    uint end;
    bool isExecuted;
  }

  mapping(address =>bool ) public isInvestor;//address is investor or not
  mapping(address=>uint)  public numOfshares;//information about shares
  mapping(address=>mapping(uint=>bool)) public isVoted;//voting information of an address for a proposal
  mapping(address=>mapping(address=>bool)) public withdrwalStatus; //manager will set the status of withdrawal

  address[] public investorList;
  mapping(uint=>Proposal) public proposals; //ids and proposal
  uint public totalShares;
  uint public availableFunds;
  uint public paticipationTimeEnd;
  uint public nextProposalId;
  uint public voteTime;
  uint public quorum;
  address public manager;

  constructor(uint _paticipationTimeEnd,uint _voteTime,uint _quorum){
     require(_quorum>0 && _quorum<100,"The value should be between 0 and 100");//quorum part mistake -2
     paticipationTimeEnd=block.timestamp+_paticipationTimeEnd;
     voteTime= _voteTime;
     quorum= _quorum;
     manager=msg.sender;
  }

  modifier onlyInvestor(){
    require(isInvestor[msg.sender]==true,"You are not an investor");
    _;
  }
   modifier onlyManager(){
    require(manager==msg.sender,"You are not a manager");
    _;
  }

  function contribution() external payable{//1 wei = 1 share, cost of 1 share = 1 wei;
     require( paticipationTimeEnd>=block.timestamp,"Contribution Time Ended");
     require(msg.value>0,"Investiment amount should be greater than 0");
     isInvestor[msg.sender]=true;
     numOfshares[msg.sender]+=msg.value;
     totalShares+=msg.value;
     availableFunds+=msg.value;
     investorList.push(msg.sender);
  }

  function reedemShare(uint amount) external onlyInvestor(){//shares withdraw
    require(numOfshares[msg.sender]>=amount,"You do not have sufficient shares");
    require(availableFunds>=amount,"Not sufficient funds");
    numOfshares[msg.sender]-=amount;
    if(numOfshares[msg.sender]==0){
      isInvestor[msg.sender]=false;
    }
    availableFunds-=amount;
    payable(msg.sender).transfer(amount);
  }
 
 function transferShare(uint amount,address to) public onlyInvestor(){
   require(numOfshares[msg.sender]>=amount,"Insufficient shares");
   require(availableFunds>=amount,"Not sufficient funds");
   numOfshares[msg.sender]-=amount;
      if(numOfshares[msg.sender]==0){
      isInvestor[msg.sender]=false;
    }
    numOfshares[to]+=amount;
    isInvestor[to]=true;
 }

 function createProposal(string calldata description,uint amount,address payable recipient) public onlyInvestor() {
    require(amount<=availableFunds,"Not enough funds");
    proposals[nextProposalId]= Proposal(nextProposalId,description,amount,recipient,0,block.timestamp+voteTime,false);
    nextProposalId++;
 }

 function voteProposal(uint proposalId) public onlyInvestor(){
   Proposal storage proposal = proposals[proposalId];
   require(isVoted[msg.sender][proposalId]==false,"You have already voted for this proposal id");
   require(proposals[proposalId].end>=block.timestamp,"Voting time has ended");
   require(proposals[proposalId].isExecuted==false,"This has already executed");//mistake - 3
   isVoted[msg.sender][proposalId]=true;
   proposal.votes+=numOfshares[msg.sender];
 }

function executeProposal(uint proposalId) public onlyManager(){
  Proposal storage proposal=proposals[proposalId];
  require(((proposal.votes*100)/totalShares)>=quorum,"Not greater than the quorum");
  proposal.isExecuted=true;
  _transfer(proposal.amount,proposal.recipient);
}

function _transfer(uint amount,address payable to) internal{
   require(amount <= availableFunds, 'Funds not available');
   availableFunds -= amount;
   to.transfer(amount);
}

function allow(address to) public onlyManager(){
  withdrwalStatus[manager][to]=true;
}
function disallow(address to) public onlyManager(){
  withdrwalStatus[manager][to]=false;
}

function withdrawEther(uint amount) public {
  require(withdrwalStatus[manager][msg.sender]==true,"You are not allowed to withdraw");
  require(numOfshares[msg.sender]>=amount,"Not enought balance to withdraw");
  numOfshares[msg.sender]-=amount;
  if(numOfshares[msg.sender]==0){
    isInvestor[msg.sender]=false;
  }
  _transfer(amount,payable(msg.sender));
}

function ProposalList() public view returns(Proposal[] memory) {
  Proposal[] memory arr=new Proposal[](nextProposalId);
  for(uint i=0;i<nextProposalId;i++){

   arr[i]=proposals[i];

   }
return arr;
}
function investorsLists() public view returns(address[] memory){
  return investorList;
}
 
}
