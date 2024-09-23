// require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Load environment variables from .env file
import "@nomiclabs/hardhat-ethers";

module.exports = {
  solidity: "0.8.0",
  networks: {
    // Local Hardhat network for testing
    hardhat: {
      chainId: 31337, // Standard chain ID for the local Hardhat network
      forking: {
        // You can enable forking if you want to simulate a real blockchain state
        url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Fork from Sepolia or another network
        blockNumber: 12345678, // Optional: block number to fork from
      },
    },
    // Sepolia Testnet configuration
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Alchemy Sepolia RPC URL
      accounts: [process.env.SEPOLIA_PRIVATE_KEY_1], // Use the private key from .env
      chainId: 11155111, // Chain ID for Sepolia
    },
  },
  // Optional settings for gas optimization or reporting
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 21,
    outputFile: "gas-report.txt", // Output to a file if you want to log gas usage
    noColors: true, // If you want to disable colors in the gas report
  },
  mocha: {
    timeout: 20000, // Increase test timeout if needed
  },
};
