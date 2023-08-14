const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  it("should return correct voting status", async () => {
    const instance = await Voting.deployed();
    const voter = accounts[1];
    const candidateIndex = 0;

    const hasVotedBefore = await instance.hasVoted(voter);
    assert.equal(hasVotedBefore, false, "Voter should not have voted yet");

    await instance.castVote(candidateIndex, { from: voter });

    const hasVotedAfter = await instance.hasVoted(voter);
    assert.equal(hasVotedAfter, true, "Voter should be marked as voted");
  });
});
