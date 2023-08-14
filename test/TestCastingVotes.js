const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  it("should allow a voter to cast a vote", async () => {
    const instance = await Voting.deployed();
    const voter = accounts[1];
    const candidateIndex = 0;

    await instance.castVote(candidateIndex, { from: voter });

    const hasVoted = await instance.hasVoted(voter);
    assert.equal(hasVoted, true, "Voter should be marked as voted");

    const candidateVotes = await instance.getCandidateVotes("Alice");
    assert.equal(candidateVotes, 1, "Candidate should have received 1 vote");
  });
});

