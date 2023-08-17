// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address public owner;
    string[] public candidates;
    mapping(address => bool) public voters;
    mapping(string => uint256) public votesReceived;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor(string[] memory _candidates) {
        owner = msg.sender;
        candidates = _candidates;
    }

    function addCandidate(string memory candidate) public onlyOwner {
        candidates.push(candidate);
    }

    function castVote(uint256 candidateIndex) public {
        require(candidateIndex < candidates.length, "Invalid candidate index");
        require(!voters[msg.sender], "You have already voted");
        
        
        string memory candidateName = candidates[candidateIndex];
        votesReceived[candidateName]++;
        
      
        voters[msg.sender] = true;
    }

    function getCandidateVotes(string memory candidate) public view returns (uint256) {
        return votesReceived[candidate];
    }

    function hasVoted(address voter) public view returns (bool) {
        return voters[voter];
    }
}

