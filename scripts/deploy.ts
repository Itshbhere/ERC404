import { ethers } from "hardhat";

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
    const initialOwner: string = deployer.address;
    const initialMintRecipient: string = deployer.address;

    // Deploy the contract
    const contract = await ERC404ExampleFactory.deploy(
        name,
        symbol,
        decimals,
        maxTotalSupplyERC721,
        initialOwner,
        initialMintRecipient
    );

    // Wait for the contract to be deployed
    await contract.waitForDeployment();

    console.log("Contract deployed to:", await contract.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });