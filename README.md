# Voting Smart Contract

A simple decentralized voting smart contract implemented in Solidity.

## Features

- Allows the owner to add candidates to the list of choices.
- Allows voters to cast votes for their preferred candidates.
- Tracks the number of votes received by each candidate.
- Prevents voters from casting multiple votes.

## Usage

1. Deploy the smart contract to the Ethereum network.
2. Initialize the contract with an array of initial candidate names.
3. The owner can add additional candidates using the `addCandidate` function.
4. Voters can cast their votes by calling the `castVote` function with the index of their preferred candidate.
5. The contract maintains a record of each candidate's vote count, accessible through the `getCandidateVotes` function.
6. The `hasVoted` function allows users to check if they have already voted.

## Getting Started

To get started, follow these steps:

1. Clone this repository.
2. Install Truffle and Ganache if not already installed.
3. Configure your development environment and network settings in Truffle's `truffle-config.js` file.
4. Run `truffle compile` to compile the smart contract.
5. Run `truffle migrate` to deploy the contract to your chosen network.
6. Run `truffle test` to execute the test suite and ensure contract functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
