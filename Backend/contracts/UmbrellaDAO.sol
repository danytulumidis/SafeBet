//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract UmbrellaDAO {

    event ProposalCreated(uint256 proposalID, ProposalType proposalType);

    enum VoteType {
        YES,
        NO
    }

    enum ProposalType {
        // TODO: Implement
        IMPROVE
    }

    struct Member {
        uint256 joinedAt;
        string name;
    }

    struct Proposal {
        uint256 deadline;
        uint256 yayVotes;
        uint256 nayVotes;
        bool executed;
        ProposalType proposalType;
        mapping(address => bool) voters;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(address => Member) public members;

    uint256 public totalProposals;

     modifier memberOnly() {
        // TODO: Implement
        _;
    }

    function createProposal(ProposalType _proposalType)
        external
        memberOnly
    {
        Proposal storage proposal = proposals[totalProposals];
        proposal.deadline = block.timestamp + 2 minutes;
        proposal.proposalType = _proposalType;

        totalProposals++;

        emit ProposalCreated(totalProposals - 1, _proposalType);
    }

    function voteOnProposal(uint256 _proposalId, VoteType _vote)
        external
        memberOnly
    {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.deadline > block.timestamp, "INACTIVE_PROPOSAL");
        require(proposal.voters[msg.sender] == false, "ALREADY_VOTED");

        proposal.voters[msg.sender] = true;

        if (_vote == VoteType.YES) {
            proposal.yayVotes++;
        } else {
            proposal.nayVotes++;
        }
    }

    // Receive and fallback function
    receive() external payable {}

    fallback() external payable {}

}