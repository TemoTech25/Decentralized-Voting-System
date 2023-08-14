const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  it("should return correct votes for a candidate", async () => {
    const instance = await Voting.deployed();
    const candidate = "Alice";

    // Cast a vote for the candidate "Alice"
    await instance.castVote(0, { from: accounts[1] });

    const candidateVotes = await instance.getCandidateVotes(candidate);
    assert.equal(candidateVotes, 1, "Candidate should have received 1 vote");
  });
});
