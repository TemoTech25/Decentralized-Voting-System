require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = process.env.INFURA_API_KEY;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: `https://sepolia.infura.io/v3/${infuraKey}`
      }),
      network_id: '*', // Change this to the appropriate network ID if needed
      gas: 10000000,
      gasPrice: 2000000000, // Set a lower gas price (in wei)
    },
    // ... (other networks)
  },
  compilers: {
    solc: {
      version: "0.8.7"
    }
  }
};
