// deploy.ts
import { ethers } from "hardhat";
import { ERC404Example } from "../contracts/examples/ERC404Example.sol"; // Adjust the path according to your typechain setup

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    // Get the contract factory
    const ERC404ExampleFactory = await ethers.getContractFactory("ERC404Example");

    // Define constructor parameters
    const name: string = "DeathGod";
    const symbol: string = "DTG";
    const decimals: number = 18;
    const maxTotalSupplyERC721: number = 1000;
    const initialOwner: string = deployer.address; // Setting deployer as the initial owner
    const initialMintRecipient: string = deployer.address; // Setting deployer as the mint recipient

    // Deploy the contract
    const contract = await ERC404ExampleFactory.deploy(
        name,
        symbol,
        decimals,
        maxTotalSupplyERC721,
        initialOwner,
        initialMintRecipient
    ) as ERC404Example; // Cast to the specific contract type

    await contract.deployed(); // This should now work

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
