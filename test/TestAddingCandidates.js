const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
  it("should allow the owner to add a candidate", async () => {
    const instance = await Voting.deployed();
    const owner = accounts[0];
    const candidate = "Alice";

    await instance.addCandidate(candidate, { from: owner });

    const candidateVotes = await instance.getCandidateVotes(candidate);
    assert.equal(candidateVotes.toNumber(), 0, "Candidate should have 0 votes initially");
  });
});



